import { cn } from "@/lib/utils";

type StatusType = "active" | "syncing" | "error" | "restricted" | "compliant";

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
    background: 'linear-gradient(135deg, #66cbd5 0%, #4db8c4 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(102, 203, 213, 0.4)',
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
    background: 'linear-gradient(135deg, #66cbd5 0%, #4db8c4 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(102, 203, 213, 0.4)'
  },
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
