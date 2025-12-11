"use client";

import { BarChart3, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', minHeight: 'calc(100vh - 80px)' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                    AI & Analytics Engine
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Market Intelligence, Valuation Models & User Behaviour
                </p>
            </div>

            {/* Top Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <MetricCard label="Daily Valuation Runs" value="12,504" trend="+8.2%" icon={DollarSign} />
                <MetricCard label="Active Buyer Profiles" value="3,204" trend="+12%" icon={Users} />
                <MetricCard label="Prediction Accuracy" value="94.2%" trend="+0.5%" icon={TrendingUp} />
                <MetricCard label="Data Freshness" value="99.9%" trend="Stable" icon={Calendar} isGood={true} />
            </div>

            {/* Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    minHeight: '400px'
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
                        Valuation Model Confidence
                    </h3>
                    {/* Mock Chart Visual */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', height: '300px', gap: '1rem' }}>
                        {[40, 60, 45, 70, 85, 60, 75, 50, 65, 80, 70, 90].map((h, i) => (
                            <div key={i} style={{
                                flex: 1,
                                height: `${h}%`,
                                background: i === 11 ? '#0f172a' : '#cbd5e1',
                                borderRadius: '4px 4px 0 0',
                                transition: 'all 0.3s'
                            }}
                            />
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: '#94a3b8', fontSize: '0.75rem' }}>
                        <span>Jan</span><span>Dec</span>
                    </div>
                </div>

                <div style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
                        Buyer Demand Index
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <SkillBar label="Toorak" percent={88} />
                        <SkillBar label="South Yarra" percent={76} />
                        <SkillBar label="Richmond" percent={62} />
                        <SkillBar label="Prahran" percent={54} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetricCard({ label, value, trend, icon: Icon, isGood = true }: any) {
    return (
        <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.5rem', background: '#f1f5f9', borderRadius: '0.5rem' }}>
                    <Icon size={20} style={{ color: '#0f172a' }} />
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: isGood ? '#16a34a' : '#ef4444' }}>
                    {trend}
                </span>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>{label}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{value}</div>
        </div>
    )
}

function SkillBar({ label, percent }: any) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                <span style={{ fontWeight: '500', color: '#334155' }}>{label}</span>
                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{percent}%</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{ width: `${percent}%`, height: '100%', background: '#0f172a' }} />
            </div>
        </div>
    )
}
