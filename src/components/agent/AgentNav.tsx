"use client";

import { Home, Users, Building2, Sparkles, ClipboardCheck, LineChart, Target } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const agentNav = [
  { icon: Home, label: "Dashboard", href: "/agent" },
  { icon: Target, label: "Leads", href: "/agent/leads" },
  { icon: Building2, label: "Listings", href: "/agent/listings" },
  { icon: Users, label: "Buyers", href: "/agent/buyers" },
  { icon: ClipboardCheck, label: "Appraisals", href: "/agent/appraisals" },
  { icon: LineChart, label: "Insights", href: "/agent/insights" },
];

export function AgentNav() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'white',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/agent" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '0.75rem',
            background: '#5ec5cf',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)'
          }}>
            <Building2 size={20} style={{ color: 'white' }} />
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5ec5cf', lineHeight: 1.1 }}>
              Agent CRM
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>Collings Property</div>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {agentNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s',
                  background: isActive ? 'rgba(15, 23, 42, 0.05)' : 'transparent',
                  color: isActive ? '#5ec5cf' : '#64748b',
                }}
              >
                <item.icon size={18} style={{ color: isActive ? '#5ec5cf' : '#94a3b8' }} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/" style={{
          padding: '0.625rem 1rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '0.875rem',
          color: 'white',
          background: '#5ec5cf',
          transition: 'all 0.2s',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          Consumer App
          <Sparkles size={14} />
        </Link>
      </div>
    </nav>
  );
}
