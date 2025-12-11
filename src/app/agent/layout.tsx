import { AgentNav } from "@/components/agent/AgentNav";

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <AgentNav />
      {children}
    </div>
  );
}
