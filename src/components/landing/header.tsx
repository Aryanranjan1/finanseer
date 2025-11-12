
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationData } from '@/lib/page-data';

const Logo = () => (
    <Link href="/" className="text-xl font-bold text-primary font-headline">
        Finanseer
    </Link>
);

const { links } = navigationData;

export function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down hide the navbar
                setIsVisible(false);
            } else { // if scroll up show the navbar
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    
    const renderNavLinks = (isMobile: boolean) => {
        const navClass = isMobile 
            ? "flex flex-col space-y-4 text-lg p-4" 
            : "hidden md:flex items-center space-x-6";
        
        const linkClass = isMobile 
            ? "text-muted-foreground hover:text-primary transition-colors"
            : "text-sm font-medium text-muted-foreground hover:text-primary transition-colors";

        return (
            <nav className={navClass}>
                {links.map((link) => (
                    <Link key={link.title} href={link.href} onClick={() => isMobile && setIsSheetOpen(false)} className={linkClass}>
                        {link.title}
                    </Link>
                ))}
            </nav>
        );
    };

    return (
        <header className={cn(
            "fixed top-0 z-50 w-full py-4 transition-transform duration-300",
            isVisible ? "translate-y-0" : "-translate-y-full"
        )}>
            <div className="container">
                 <div className="flex h-16 items-center justify-between rounded-full bg-white/60 px-6 p-4 shadow-lg backdrop-blur-md">
                    <div className="flex items-center">
                        <Logo />
                    </div>
                    
                    {renderNavLinks(false)}

                    <div className="hidden md:flex items-center space-x-2">
                        <Button asChild variant="outline" className="bg-white hover:bg-gray-100 border-gray-200 text-black rounded-full">
                           <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                           <Link href="/login">Sign Up</Link>
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] p-0">
                               <div className="flex flex-col h-full">
                                    <div className="p-4 border-b">
                                        <Logo />
                                    </div>
                                    {renderNavLinks(true)}
                                    <div className="mt-auto p-4 space-y-4 border-t">
                                        <Button asChild variant="outline" className="w-full rounded-full">
                                            <Link href="/login">Login</Link>
                                        </Button>
                                        <Button asChild className="w-full rounded-full">
                                            <Link href="/login">Sign Up</Link>
                                        </Button>
                                    </div>
                               </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
