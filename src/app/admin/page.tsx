"use client";

import { Activity, Database, Shield, GitMerge, TrendingUp, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', minHeight: 'calc(100vh - 80px)' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                    System Dashboard
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Real-time monitoring and system health overview
                </p>
            </div>

            {/* System Health Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                    { icon: Activity, label: 'System Status', value: 'Operational', color: '#0f172a' },
                    { icon: Database, label: 'Data Pipelines', value: '4/4 Active', color: '#0f172a' },
                    { icon: Shield, label: 'Compliance', value: '100%', color: '#0f172a' },
                    { icon: GitMerge, label: 'Matching Engine', value: '99.8%', color: '#0f172a' }
                ].map((metric, idx) => (
                    <div key={idx} style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid white',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(15, 23, 42, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div style={{
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(15, 23, 42, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <metric.icon size={24} style={{ color: '#0f172a' }} />
                            </div>
                            <CheckCircle size={20} style={{ color: '#10b981' }} />
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: '500' }}>
                            {metric.label}
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>
                            {metric.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pipeline Status */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid white',
                borderRadius: '1rem',
                padding: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
                    Data Pipeline Status
                </h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                        { name: 'RP Data Pipeline', status: 'Running', records: '2.4M', lastSync: '2 mins ago', health: 100 },
                        { name: 'REIP Feed', status: 'Running', records: '156K', lastSync: '1 min ago', health: 100 },
                        { name: 'Compliance Guard', status: 'Active', records: '2.4M', lastSync: 'Real-time', health: 100 },
                        { name: 'Matching Engine', status: 'Running', records: '2.5M', lastSync: '30 secs ago', health: 99.8 }
                    ].map((pipeline, idx) => (
                        <div key={idx} style={{
                            padding: '1.25rem',
                            background: 'rgba(248, 250, 252, 0.5)',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                    <div style={{ fontWeight: '600', fontSize: '0.875rem', color: '#0f172a' }}>
                                        {pipeline.name}
                                    </div>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        background: 'rgba(15, 23, 42, 0.1)',
                                        color: '#0f172a',
                                        border: '1px solid rgba(15, 23, 42, 0.1)'
                                    }}>
                                        {pipeline.status}
                                    </span>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                    {pipeline.records} records • Last sync: {pipeline.lastSync}
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem' }}>
                                    {pipeline.health}%
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                    Health
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
                    Recent System Activity
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { time: '2 mins ago', action: 'RP Data sync completed', details: '1,247 new records processed', icon: Database },
                        { time: '5 mins ago', action: 'Compliance check passed', details: 'All records validated', icon: Shield },
                        { time: '8 mins ago', action: 'Matching engine updated', details: '342 properties matched', icon: GitMerge },
                        { time: '12 mins ago', action: 'REIP feed refreshed', details: '89 listings updated', icon: TrendingUp }
                    ].map((activity, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            gap: '1rem',
                            padding: '1rem',
                            background: 'rgba(248, 250, 252, 0.5)',
                            borderRadius: '0.5rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(15, 23, 42, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <activity.icon size={18} style={{ color: '#0f172a' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '600', fontSize: '0.875rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                                    {activity.action}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                    {activity.details}
                                </div>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8', flexShrink: 0 }}>
                                {activity.time}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
