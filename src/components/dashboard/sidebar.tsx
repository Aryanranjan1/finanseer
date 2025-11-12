
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu, Bell, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Logo = () => (
    <Link href="/" className="text-xl font-bold text-primary font-headline flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M22 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
        Finanseer
    </Link>
);


const UserMenu = () => {
    const router = useRouter();

    const handleLogout = async () => {
        // Mock logout
        router.push('/logout');
    };
    
    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
             <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxoYXBweSUyMHBlcnNvbnxlbnwwfHx8fDE3NjI4NDE1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="User Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Jane Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">jane.doe@email.com</p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
)};


const NavContent = ({ navItems }: { navItems: any[] }) => {
    const pathname = usePathname();
    return (
        <div className="flex h-full flex-col">
            <div className="p-4 border-b">
                <Logo />
            </div>
            <nav className="flex-1 space-y-4 p-4">
                {navItems.map((group) => (
                    <div key={group.title}>
                        <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">{group.title}</h3>
                        <div className="space-y-1">
                            {group.items.map((item: any) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={cn(
                                        'flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors',
                                        pathname === item.href
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:bg-muted'
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.title}</span>
                                    {item.badge && <Badge className="ml-auto">{item.badge}</Badge>}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>
            <div className="p-4 border-t mt-auto">
                <div className="p-4 bg-muted/80 rounded-lg text-center">
                    <h4 className="font-semibold text-sm">Upgrade to Pro</h4>
                    <p className="text-xs text-muted-foreground mt-1">Unlock advanced AI and unlimited accounts.</p>
                    <Button size="sm" className="mt-4 w-full">Upgrade</Button>
                </div>
            </div>
        </div>
    )
}

export function DashboardSidebar({ navItems }: { navItems: any[] }) {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 border-r">
                <NavContent navItems={navItems} />
            </aside>
            
            {/* Mobile Header */}
            <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4 md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0">
                       <NavContent navItems={navItems} />
                    </SheetContent>
                </Sheet>
                <div className="w-full flex-1">
                    <Logo />
                </div>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 justify-center p-0">5</Badge>
                </Button>
                <UserMenu />
            </header>
        </>
    );
}
