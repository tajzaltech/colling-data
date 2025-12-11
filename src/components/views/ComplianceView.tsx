"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Shield, Lock, FileText, AlertTriangle } from "lucide-react";
import { useState } from "react";

const mockRecords = [
    { id: 1, address: '123 Collins St, Melbourne', source: 'RP Data', license: 'Restricted', expiry: '2025-12-31', status: 'compliant' },
    { id: 2, address: '456 Bourke St, Melbourne', source: 'REIP', license: 'Public', expiry: '2026-06-30', status: 'compliant' },
    { id: 3, address: '789 Swanston St, Melbourne', source: 'RP Data', license: 'Restricted', expiry: '2025-12-31', status: 'compliant' },
    { id: 4, address: '321 Lonsdale St, Melbourne', source: 'User Upload', license: 'Public', expiry: 'Perpetual', status: 'compliant' }
];

export function ComplianceView() {
    const [filter, setFilter] = useState('all');

    const filteredRecords = filter === 'all'
        ? mockRecords
        : mockRecords.filter(r => r.license.toLowerCase() === filter);

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '0.5rem' }}>
                    Compliance Architecture
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Data licensing and access control management
                </p>
            </div>

            {/* Compliance Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                    { icon: Shield, label: 'Compliance Status', value: '100%', color: '#10b981' },
                    { icon: Lock, label: 'Restricted Records', value: '2.4M', color: '#ef4444' },
                    { icon: FileText, label: 'Public Records', value: '156K', color: '#3b82f6' },
                    { icon: AlertTriangle, label: 'Violations', value: '0', color: '#10b981' }
                ].map((stat, idx) => (
                    <div key={idx} style={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div style={{
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '0.75rem',
                                background: `rgba(${stat.color === '#10b981' ? '16, 185, 129' : stat.color === '#ef4444' ? '239, 68, 68' : '59, 130, 246'}, 0.1)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <stat.icon size={24} style={{ color: stat.color }} />
                            </div>
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: '500' }}>
                            {stat.label}
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5ec5cf' }}>
                            {stat.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* Data Controls */}
            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '1.5rem' }}>
                    Data Access Controls
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { title: 'RP Data Controls', items: ['Internal use only', 'No public API exposure', 'Audit logging enabled'], color: '#ef4444' },
                        { title: 'Public Display', items: ['REIP content allowed', 'User uploads permitted', 'Attribution required'], color: '#3b82f6' },
                        { title: 'Audit Logging', items: ['All access logged', 'Compliance reports', 'Real-time monitoring'], color: '#10b981' }
                    ].map((control, idx) => (
                        <div key={idx} style={{
                            padding: '1.25rem',
                            background: '#f8fafc',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '1rem' }}>
                                {control.title}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {control.items.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: control.color }} />
                                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* License Tagging Registry */}
            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5ec5cf' }}>
                        License Tagging Registry
                    </h2>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        {['all', 'restricted', 'public'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid ' + (filter === f ? '#3b82f6' : '#e2e8f0'),
                                    background: filter === f ? 'rgba(59, 130, 246, 0.1)' : 'white',
                                    color: filter === f ? '#3b82f6' : '#64748b',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    textTransform: 'capitalize'
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                {['Address', 'Source', 'License Type', 'Expiry', 'Status'].map(header => (
                                    <th key={header} style={{
                                        padding: '0.75rem',
                                        textAlign: 'left',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        color: '#64748b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRecords.map((record) => (
                                <tr key={record.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#5ec5cf', fontWeight: '500' }}>
                                        {record.address}
                                    </td>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
                                        {record.source}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '9999px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            background: record.license === 'Restricted' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                            color: record.license === 'Restricted' ? '#ef4444' : '#3b82f6'
                                        }}>
                                            {record.license}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
                                        {record.expiry}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '9999px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            color: '#10b981'
                                        }}>
                                            {record.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
