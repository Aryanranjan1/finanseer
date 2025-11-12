
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { dashboardOverviewData } from '@/lib/page-data';
import { Button } from '@/components/ui/button';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';

const { netWorth, aiSummary, recentActivity, quickActions } = dashboardOverviewData;

export default function OverviewPage() {
  const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  const formatCompactCurrency = (value: number) => new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(value);


  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold">Overview</h1>
        <div className="flex items-center space-x-2">
            <Button>Add Widget</Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Worth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(netWorth.current)}</div>
            <p className="text-xs text-muted-foreground">
              +{formatCurrency(netWorth.change)} {netWorth.period}
            </p>
          </CardContent>
        </Card>
        {/* Add more KPI cards here */}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Net Worth Trend</CardTitle>
            <CardDescription>Your net worth over the past 30 days.</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={netWorth.chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                    <XAxis dataKey="date" tickFormatter={(str) => new Date(str).toLocaleDateString('en-us', {day:'numeric', month:'short'})} fontSize={12} />
                    <YAxis tickFormatter={(val) => formatCompactCurrency(val as number)} fontSize={12} />
                    <Tooltip content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            return (
                            <div className="bg-background p-2 rounded-md border shadow-sm">
                                <p className="text-xs font-bold text-muted-foreground">{new Date(payload[0].payload.date).toLocaleDateString()}</p>
                                <p className="text-sm font-semibold">{formatCurrency(payload[0].value as number)}</p>
                            </div>
                            );
                        }
                        return null;
                        }}
                    />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="url(#colorValue)" />
                </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>AI Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{aiSummary}</p>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                    {quickActions.map(action => (
                         <Button key={action.label} asChild variant="outline">
                            <Link href={action.href}>
                                {action.label}
                                <ArrowRight className="ml-auto h-4 w-4" />
                            </Link>
                         </Button>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>

       <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>A summary of your latest transactions and portfolio changes.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {recentActivity.map(activity => (
                        <div key={activity.id} className="flex items-center">
                            <Avatar className="h-9 w-9">
                                <AvatarFallback>{activity.type.charAt(0)}</AvatarFallback>
                            </Avatar>
                             <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{activity.description}</p>
                                <p className="text-sm text-muted-foreground">{activity.date}</p>
                            </div>
                            <div className="ml-auto font-medium">{formatCurrency(activity.amount)}</div>
                        </div>
                    ))}
                </div>
            </CardContent>
       </Card>
    </div>
  );
}

    