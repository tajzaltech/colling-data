"use client";

import { Database, Shield, GitMerge, BarChart3, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminNav = [
    { icon: Home, label: "Dashboard", href: "/admin" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Shield, label: "Compliance", href: "/admin/compliance" },
    { icon: Database, label: "Ingestion", href: "/admin/ingestion" },
    { icon: GitMerge, label: "Matching", href: "/admin/matching" },
];

export function AdminNav() {
    const pathname = usePathname();

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '0.75rem',
                        background: '#5ec5cf', // Navy
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(15, 23, 42, 0.3)'
                    }}>
                        <Shield size={20} style={{ color: 'white' }} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#5ec5cf' }}>
                            Internal Admin
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>Collings Property</div>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {adminNav.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.25rem',
                                    borderRadius: '0.75rem',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                    transition: 'all 0.2s',
                                    background: isActive ? '#5ec5cf' : 'transparent',
                                    color: isActive ? 'white' : '#64748b',
                                    boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.3)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.background = '#f1f5f9';
                                        e.currentTarget.style.color = '#5ec5cf';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#64748b';
                                    }
                                }}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </Link>
                        );
                    })}

                    {/* Consumer App Link */}
                    <Link href="/" style={{
                        padding: '0.75rem 1.25rem',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        color: '#64748b',
                        border: '1px solid #e2e8f0',
                        transition: 'all 0.2s',
                        marginLeft: '0.5rem'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f8fafc';
                            e.currentTarget.style.color = '#5ec5cf';
                            e.currentTarget.style.borderColor = '#5ec5cf';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#64748b';
                            e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                    >
                        Consumer App
                    </Link>
                </div>
            </div>
        </nav>
    );
}
