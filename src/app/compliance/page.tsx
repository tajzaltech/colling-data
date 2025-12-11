"use client";

import { ComplianceView } from "@/components/views/ComplianceView";

export default function CompliancePage() {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#ffffff',
            padding: '2rem'
        }}>
            <ComplianceView />
        </div>
    );
}
