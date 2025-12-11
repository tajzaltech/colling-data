"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(className)}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '2px solid rgba(255, 255, 255, 0.9)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 2px 0 rgba(255, 255, 255, 1)',
        borderRadius: '1rem',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15), inset 0 2px 0 rgba(255, 255, 255, 1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 2px 0 rgba(255, 255, 255, 1)';
      }}
      {...props}
    >
      <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)',
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
}
