"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TrendingUp, Search, Users, BarChart3 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const valuationData = [
    { month: 'Jan', actual: 2.1, predicted: 2.0 },
    { month: 'Feb', actual: 2.3, predicted: 2.2 },
    { month: 'Mar', actual: 2.5, predicted: 2.4 },
    { month: 'Apr', actual: 2.4, predicted: 2.5 },
    { month: 'May', actual: 2.7, predicted: 2.6 },
    { month: 'Jun', actual: 2.9, predicted: 2.8 }
];

export function AnalyticsView() {
    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '0.5rem' }}>
                    AI & Analytics
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Machine learning models and predictive analytics
                </p>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                    { icon: TrendingUp, label: 'Valuation Accuracy', value: '94.2%', color: '#3b82f6' },
                    { icon: Search, label: 'Search Queries', value: '12.4K', color: '#3b82f6' },
                    { icon: Users, label: 'Buyer Clusters', value: '8', color: '#3b82f6' },
                    { icon: BarChart3, label: 'Model Training', value: 'Active', color: '#10b981' }
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
                                background: `rgba(${stat.color === '#3b82f6' ? '59, 130, 246' : '16, 185, 129'}, 0.1)`,
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

            {/* Valuation Engine */}
            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '0.5rem' }}>
                        Valuation Engine
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        AI-powered property valuation predictions vs actual prices
                    </p>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={valuationData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '0.75rem' }} />
                        <YAxis stroke="#64748b" style={{ fontSize: '0.75rem' }} />
                        <Tooltip
                            contentStyle={{
                                background: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '0.5rem',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                        <Area type="monotone" dataKey="predicted" stroke="#3b82f6" fill="rgba(59, 130, 246, 0.1)" strokeWidth={2} />
                        <Area type="monotone" dataKey="actual" stroke="#10b981" fill="rgba(16, 185, 129, 0.1)" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '1rem', height: '0.25rem', background: '#3b82f6', borderRadius: '9999px' }} />
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Predicted</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '1rem', height: '0.25rem', background: '#10b981', borderRadius: '9999px' }} />
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Actual</span>
                    </div>
                </div>
            </div>

            {/* Semantic Search & Buyer Clustering */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                {/* Semantic Search */}
                <div style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '1rem' }}>
                        Semantic Search Engine
                    </h3>
                    <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                            "Family home near good schools with pool"
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            → Matched: 4 beds, 2 baths, pool, 500m to school
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {['Natural language processing', 'Semantic embeddings', 'Context-aware ranking'].map((feature, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: '#3b82f6' }} />
                                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buyer Clustering */}
                <div style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '1rem' }}>
                        Buyer Clustering
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[
                            { cluster: 'First Home Buyers', count: 342, color: '#3b82f6' },
                            { cluster: 'Investors', count: 289, color: '#8b5cf6' },
                            { cluster: 'Upgraders', count: 156, color: '#10b981' },
                            { cluster: 'Downsizers', count: 98, color: '#f59e0b' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                padding: '0.75rem',
                                background: '#f8fafc',
                                borderRadius: '0.5rem',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', background: item.color }} />
                                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#5ec5cf' }}>{item.cluster}</span>
                                </div>
                                <span style={{ fontSize: '0.875rem', fontWeight: '700', color: item.color }}>{item.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
