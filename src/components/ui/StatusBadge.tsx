import { cn } from "@/lib/utils";

type StatusType = "active" | "syncing" | "error" | "restricted" | "compliant" | "sold" | "pending" | "withdrawn" | "rent" | "off-market" | "new" | "contacted" | "qualified" | "lost";

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  className?: string;
}

const styles: Record<StatusType, React.CSSProperties> = {
  active: {
    background: 'linear-gradient(135deg, #66cbd5 0%, #4db8c4 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(102, 203, 213, 0.4)'
  },
  syncing: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
    animation: 'pulse 2s ease-in-out infinite'
  },
  error: {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
  },
  restricted: {
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
  },
  compliant: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
  },
  sold: {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
  },
  pending: {
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
  },
  withdrawn: {
    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(100, 116, 139, 0.4)'
  },
  rent: {
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)'
  },
  "off-market": {
    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(100, 116, 139, 0.4)'
  },
  new: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
  },
  contacted: {
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
  },
  qualified: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
  },
  lost: {
    background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(148, 163, 184, 0.4)'
  }

};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        ...styles[status],
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        border: '1.5px solid rgba(255, 255, 255, 0.3)'
      }}
    >
      {label || status}
    </span>
  );
}
