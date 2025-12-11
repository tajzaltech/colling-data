"use client";

import { TrendingUp, ArrowUpRight, ArrowDownRight, Map, Home } from "lucide-react";

export default function InsightsPage() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', background: '#ffffff', minHeight: 'calc(100vh - 80px)' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                    Market Insights
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Suburb trends and performance metrics for South Yarra & Surrounds
                </p>
            </div>

            {/* Suburb Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <StatBox label="Median House Price" value="$2.45M" trend="+12.5%" isGood={true} suburb="South Yarra" />
                <StatBox label="Median Unit Price" value="$680k" trend="-2.1%" isGood={false} suburb="South Yarra" />
                <StatBox label="Clearance Rate" value="76%" trend="+5.0%" isGood={true} suburb="Weekly Auction" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* Main Content - Market Pulse */}
                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
                        Market Pulse: Buyer Demand
                    </h3>
                    <div style={{ height: '300px', background: '#f8fafc', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #cbd5e1' }}>
                        <p style={{ color: '#64748b' }}>Demand Chart Visualization (High Demand)</p>
                    </div>
                </div>

                {/* Suburb Ranking */}
                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
                        Top Growth Suburbs
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: "South Yarra", growth: "+12.5%" },
                            { name: "Toorak", growth: "+8.2%" },
                            { name: "Prahran", growth: "+6.5%" },
                            { name: "Windsor", growth: "+4.1%" },
                        ].map((sub, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ padding: '0.5rem', background: 'white', borderRadius: '50%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                                        <Map size={16} />
                                    </div>
                                    <span style={{ fontWeight: '600', color: '#0f172a' }}>{sub.name}</span>
                                </div>
                                <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.875rem' }}>{sub.growth}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatBox({ label, value, trend, isGood, suburb }: any) {
    return (
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>{suburb}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', fontWeight: 'bold', color: isGood ? '#16a34a' : '#ef4444' }}>
                    {isGood ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {trend}
                </span>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem' }}>{value}</div>
            <div style={{ color: '#64748b', fontSize: '0.875rem' }}>{label}</div>
        </div>
    )
}
