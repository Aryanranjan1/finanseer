
'use client';

import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { dashboardNavItems } from '@/lib/page-data';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar navItems={dashboardNavItems} />
      <main className="flex-1 p-8 bg-muted/40">
        {children}
      </main>
    </div>
  );
}

    