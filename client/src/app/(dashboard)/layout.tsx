"use client";

import Loading from '@/components/Loading';
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils";
import { SidebarProvider } from '@/components/ui/sidebar';
import AppDashboard from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const [courseId, setCourseId] = useState<string | null>(null);
    const { user, isLoaded } = useUser();
    const isCoursePage = /^\/user\/courses\/[^\/]+(?:\/chapters\/[^\/]+)?$/.test(
        pathname
    );
    // handle use effect isCoursePage
    useEffect(() => {
        if (isCoursePage) {
            const match = pathname.match(/\/user\/courses\/([^\/]+)/);
            setCourseId(match ? match[1] : null);
        } else {
            setCourseId(null);
        }
    }, [isCoursePage, pathname]);

    if (!isLoaded) return <Loading />
    if (!user) return <div>Please sign in to access this page</div>

    return (
        <SidebarProvider>

            <div className="dashboard">
                <AppDashboard />
                <div className="dashboard__content">
                    {/* chapters sidebar will go here */}
                    <div className={cn("dashboard__main")} style={{ height: "100vh" }}>
                        <Navbar isCoursePage={isCoursePage} />
                        <main className="dashboard__body">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </SidebarProvider >
    )
}
