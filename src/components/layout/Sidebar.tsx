"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Database, 
  ShieldCheck, 
  GitGraph, 
  BarChart, 
  Settings, 
  ChevronLeft, 
  Menu,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' },
  { icon: Database, label: "Ingestion", href: "/ingestion", gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' },
  { icon: ShieldCheck, label: "Compliance", href: "/compliance", gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)' },
  { icon: GitGraph, label: "Property Graph", href: "/matching", gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)' },
  { icon: BarChart, label: "Analytics", href: "/analytics", gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' },
  { icon: Settings, label: "Settings", href: "/settings", gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div 
      initial={{ width: 280 }}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3 }}
      style={{
        height: '100vh',
        position: 'sticky',
        top: 0,
        left: 0,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRight: '2px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '4px 0 24px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50
      }}
    >
      {/* Header */}
      <div style={{
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
      }}>
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
              }}>
                <Sparkles color="white" size={20} />
              </div>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Collings
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          style={{
            padding: '0.625rem',
            background: 'rgba(255, 255, 255, 0.6)',
            border: 'none',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            color: '#64748b',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#3b82f6';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.color = '#64748b';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  background: isActive ? item.gradient : 'transparent',
                  color: isActive ? 'white' : '#475569',
                  fontWeight: isActive ? 'bold' : '600',
                  fontSize: '0.875rem',
                  transition: 'all 0.3s',
                  boxShadow: isActive ? '0 8px 24px rgba(59, 130, 246, 0.4)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.color = '#1e3a8a';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <item.icon size={22} style={{ position: 'relative', zIndex: 10 }} />
                {!collapsed && (
                  <span style={{ position: 'relative', zIndex: 10, whiteSpace: 'nowrap', letterSpacing: '0.025em' }}>
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div style={{ padding: '1rem', borderTop: '1px solid rgba(226, 232, 240, 0.5)' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.75rem',
          borderRadius: '1rem',
          background: 'rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          transition: 'all 0.2s',
          justifyContent: collapsed ? 'center' : 'flex-start'
        }}>
           <div style={{
             width: '2.75rem',
             height: '2.75rem',
             borderRadius: '0.75rem',
             background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #a855f7 100%)',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             color: 'white',
             fontWeight: 900,
             fontSize: '0.875rem',
             boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
             border: '2px solid rgba(255, 255, 255, 0.5)'
           }}>
             JD
           </div>
           {!collapsed && (
             <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#0f172a' }}>John Doe</span>
               <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#64748b' }}>System Admin</span>
             </div>
           )}
        </div>
      </div>
    </motion.div>
  );
}
