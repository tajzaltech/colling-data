"use client";

import { Shield, AlertOctagon, FileText, Check } from "lucide-react";

export default function CompliancePage() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', minHeight: 'calc(100vh - 80px)' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                    Compliance Officer
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Real-time enforcement of Distribution Licences & Privacy Controls
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <MetricBox title="Records Redacted" value="14,205" sub="Sensitive fields hidden" color="text-amber-600" bg="bg-amber-50" border="border-amber-200" />
                <MetricBox title="Licence Violations Blocked" value="0" sub="All systems compliant" color="text-emerald-600" bg="bg-emerald-50" border="border-emerald-200" />
                <MetricBox title="Audit Log Entries" value="892" sub="Last 24 hours" color="text-slate-600" bg="bg-slate-50" border="border-slate-200" />
            </div>

            <div style={{
                background: 'white',
                borderRadius: '1rem',
                border: '1px solid #e2e8f0',
                padding: '1.5rem'
            }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
                    Active Compliance Rules
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                        { rule: "RP Data Sales Redaction", desc: "Sales History removed from Public API", status: "Active" },
                        { rule: "Owner Contact Privacy", desc: "Phone/Email fields hashed on ingestion", status: "Active" },
                        { rule: "Tenant Data Shield", desc: "Lease details accessible only to Auth Agents", status: "Active" },
                        { rule: "UGC Copyright Tagging", desc: "User uploads auto-tagged with usage rights", status: "Active" }
                    ].map((item, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '1rem',
                            background: '#f8fafc',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    padding: '0.5rem',
                                    background: '#dcfce7',
                                    borderRadius: '0.5rem',
                                    color: '#16a34a'
                                }}>
                                    <Check size={18} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', color: '#0f172a' }}>{item.rule}</div>
                                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{item.desc}</div>
                                </div>
                            </div>
                            <div style={{
                                padding: '0.25rem 0.75rem',
                                background: '#f1f5f9',
                                borderRadius: '99px',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: '#0f172a'
                            }}>
                                {item.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MetricBox({ title, value, sub, color, bg, border }: any) {
    // Note: using inline styles for color simplicity in this artifact
    return (
        <div style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid #e2e8f0'
        }}>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>{title}</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem' }}>{value}</div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{sub}</div>
        </div>
    )
}
