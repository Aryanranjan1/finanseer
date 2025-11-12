
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { adminDashboardData } from '@/lib/page-data';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function AdminDashboardPage() {
    const { kpis, userGrowthChart, revenueChart, recentSignups } = adminDashboardData;
    const formatCompactCurrency = (value: number) => new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(value);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {kpis.map(kpi => (
                    <Card key={kpi.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                            {kpi.changeType === 'positive' ? <TrendingUp className="h-4 w-4 text-muted-foreground" /> : <TrendingDown className="h-4 w-4 text-muted-foreground" />}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{kpi.value}</div>
                            <p className={`text-xs ${kpi.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                                {kpi.change} vs last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>User Growth</CardTitle>
                        <CardDescription>Total users: {userGrowthChart.total.toLocaleString()}</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={userGrowthChart.data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                                <XAxis dataKey="month" fontSize={12} />
                                <YAxis fontSize={12} tickFormatter={(val) => formatCompactCurrency(val as number)} />
                                <Tooltip
                                    content={({ active, payload, label }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                            <div className="bg-background p-2 rounded-md border shadow-sm">
                                                <p className="text-xs font-bold text-muted-foreground">{label}</p>
                                                <p className="text-sm font-semibold">{`${payload[0].value} users`}</p>
                                            </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                 </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Monthly Revenue</CardTitle>
                        <CardDescription>Total this month: ${revenueChart.total.toLocaleString()}</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueChart.data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                                <XAxis dataKey="month" fontSize={12} />
                                <YAxis tickFormatter={(val) => `$${formatCompactCurrency(val as number)}`} fontSize={12} />
                                <Tooltip
                                    content={({ active, payload, label }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                            <div className="bg-background p-2 rounded-md border shadow-sm">
                                                <p className="text-xs font-bold text-muted-foreground">{label}</p>
                                                <p className="text-sm font-semibold">{`$${(payload[0].value as number).toLocaleString()}`}</p>
                                            </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                 </Card>
            </div>
            
             <Card>
                <CardHeader>
                    <CardTitle>Recent Signups</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentSignups.map((signup, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarFallback>{signup.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{signup.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{signup.email}</TableCell>
                                    <TableCell>{signup.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
             </Card>
        </div>
    );
}
