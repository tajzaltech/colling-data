import { AdminNav } from "@/components/admin/AdminNav";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', // Fallback
        }} className="bg-gradient-to-br from-slate-50 to-[#0A192F]/5">
            <AdminNav />
            {children}
        </div>
    );
}
