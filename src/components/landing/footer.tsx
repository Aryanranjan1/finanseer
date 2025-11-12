
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { footerData } from '@/lib/page-data';

const { logo, slogan, socials, links, newsletter, copyright, disclaimer } = footerData;

const socialIcons: { [key: string]: React.ElementType } = {
  Twitter,
  Facebook,
  Linkedin,
};

const Logo = () => (
    <Link href="/" className="text-2xl font-bold font-headline text-white">
        {logo}
    </Link>
);

export function Footer() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.4], ['50px', '0px']);

  return (
    <motion.footer 
      ref={targetRef}
      style={{ opacity, y }}
      className="bg-primary text-primary-foreground"
    >
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-sm text-primary-foreground/70">
              {slogan}
            </p>
            <div className="flex space-x-4">
              {socials.map(social => {
                const Icon = socialIcons[social.icon];
                return Icon ? <Link key={social.name} href={social.href} aria-label={social.name}><Icon className="h-5 w-5 hover:text-accent transition-colors" /></Link> : null;
              })}
            </div>
          </div>
          {Object.entries(links).map(([title, linkItems]) => (
            <div key={title}>
                <h4 className="font-semibold mb-4 font-headline">{title}</h4>
                <ul className="space-y-2 text-sm">
                {linkItems.map(link => (
                    <li key={link.text}><Link href={link.href} className="hover:text-accent transition-colors">{link.text}</Link></li>
                ))}
                </ul>
            </div>
          ))}
          <div className='flex flex-col items-center md:items-start'>
            <h4 className="font-semibold mb-4 font-headline">{newsletter.headline}</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              {newsletter.description}
            </p>
            <form className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-primary-foreground/50 focus:border-accent focus:ring-accent" />
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">{newsletter.cta}</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>{copyright}</p>
          <p className="mt-2 max-w-3xl mx-auto">
            {disclaimer}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

    