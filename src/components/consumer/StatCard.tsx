"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  isPositive?: boolean;
  icon: LucideIcon;
}

export function StatCard({ label, value, trend, isPositive, icon: Icon }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        background: 'white',
        border: '2px solid #e2e8f0',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
        borderRadius: '1rem',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div style={{
            padding: '0.75rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #66cbd5, #4db8c4)',
            boxShadow: '0 4px 12px rgba(102, 203, 213, 0.3)'
          }}>
            <Icon size={24} style={{ color: 'white' }} />
          </div>
          
          {trend && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.25rem',
              color: isPositive ? '#10b981' : '#ef4444',
              fontSize: '0.875rem',
              fontWeight: 'bold'
            }}>
              {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {trend}
            </div>
          )}
        </div>

        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem' }}>
          {value}
        </div>
        <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>
          {label}
        </div>
      </div>
    </motion.div>
  );
}
