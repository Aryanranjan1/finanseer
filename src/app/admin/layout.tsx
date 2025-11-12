
'use client';

import React from 'react';
import { AdminSidebar } from '@/components/admin/sidebar';
import { adminNavItems }from '@/lib/page-data';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar navItems={adminNavItems} />
      <main className="flex-1 p-8 bg-muted/40">
        {children}
      </main>
    </div>
  );
}
