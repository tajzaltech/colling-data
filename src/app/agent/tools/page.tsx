"use client";

import { Calculator, Target, Sparkles, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function AIToolsPage() {
    const [activeTab, setActiveTab] = useState<'estimator' | 'scoring' | 'comps'>('estimator');
    const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEstimate = () => {
        if (!address) return;
        setLoading(true);
        setTimeout(() => {
            setEstimatedPrice(2450000 + Math.random() * 500000);
            setLoading(false);
        }, 1500);
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', background: '#ffffff', minHeight: '100vh' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                    AI Tools Suite
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Advanced property analytics and valuation tools
                </p>
            </div>

            {/* Tabs */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '1px'
            }}>
                {[
                    { id: 'estimator', label: 'Price Estimator', icon: Calculator },
                    { id: 'scoring', label: 'Property Scoring', icon: Target },
                    { id: 'comps', label: 'Comp Suggestions', icon: Sparkles },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '1rem 1.5rem',
                            background: 'transparent',
                            border: 'none',
                            borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
                            color: activeTab === tab.id ? '#3b82f6' : '#64748b',
                            fontWeight: 600,
                            cursor: 'pointer',
                            marginBottom: '-2px',
                            transition: 'all 0.2s',
                            fontSize: '0.9375rem'
                        }}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: '400px' }}>

                {/* Price Estimator Tool */}
                {activeTab === 'estimator' && (
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '1rem',
                            padding: '2rem',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <div style={{
                                    width: '4rem',
                                    height: '4rem',
                                    borderRadius: '1rem',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    color: '#3b82f6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem auto'
                                }}>
                                    <Calculator size={32} />
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                                    Property Valuation Engine
                                </h2>
                                <p style={{ color: '#64748b' }}>
                                    Get an instant AI-powered price estimate for any property
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                <input
                                    type="text"
                                    placeholder="Enter property address (e.g. 123 Collins St, Melbourne)"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    style={{
                                        flex: 1,
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid #e2e8f0',
                                        fontSize: '1rem',
                                        color: '#0f172a',
                                        outline: 'none',
                                        background: '#f8fafc'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                />
                                <button
                                    onClick={handleEstimate}
                                    disabled={loading || !address}
                                    style={{
                                        padding: '0 2rem',
                                        borderRadius: '0.5rem',
                                        background: '#3b82f6',
                                        color: 'white',
                                        fontWeight: 600,
                                        border: 'none',
                                        cursor: loading || !address ? 'not-allowed' : 'pointer',
                                        opacity: loading || !address ? 0.7 : 1,
                                        minWidth: '140px'
                                    }}
                                >
                                    {loading ? 'Analyzing...' : 'Estimate'}
                                </button>
                            </div>

                            {estimatedPrice && !loading && (
                                <div style={{
                                    padding: '2rem',
                                    background: '#f8fafc',
                                    borderRadius: '1rem',
                                    border: '1px solid #e2e8f0',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                                        Estimated Value
                                    </div>
                                    <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#0f172a', lineHeight: 1 }}>
                                        ${(estimatedPrice / 1000000).toFixed(2)}M
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#10b981', marginTop: '0.5rem', fontWeight: 500 }}>
                                        High Confidence (94%)
                                    </div>
                                    <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#64748b' }}>
                                        Range: ${(estimatedPrice / 1000000 - 0.15).toFixed(2)}M - ${(estimatedPrice / 1000000 + 0.15).toFixed(2)}M
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Property Scoring Tool */}
                {activeTab === 'scoring' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '1rem',
                            padding: '2rem'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Target size={24} style={{ color: '#3b82f6' }} />
                                Investment Potential
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {[
                                    { label: 'Location Score', value: 92, desc: 'Prime area, close to CBD' },
                                    { label: 'Growth Potential', value: 85, desc: 'High demand suburb' },
                                    { label: 'Rental Yield', value: 78, desc: 'Above market average' }
                                ].map((metric, idx) => (
                                    <div key={idx}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <div>
                                                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#0f172a' }}>{metric.label}</div>
                                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{metric.desc}</div>
                                            </div>
                                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>{metric.value}</span>
                                        </div>
                                        <div style={{
                                            height: '0.75rem',
                                            background: '#f1f5f9',
                                            borderRadius: '9999px',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                height: '100%',
                                                width: `${metric.value}%`,
                                                background: '#3b82f6',
                                                borderRadius: '9999px'
                                            }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '1rem',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                border: '8px solid #3b82f6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                background: 'white'
                            }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a' }}>8.8</span>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                                Overall Score
                            </h3>
                            <p style={{ color: '#64748b', maxWidth: '300px' }}>
                                This property represents a <strong>strong investment opportunity</strong> with excellent long-term growth prospects.
                            </p>
                        </div>
                    </div>
                )}

                {/* Comp Suggestions Tool */}
                {activeTab === 'comps' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>
                                Comparable Properties
                            </h3>
                            <button style={{
                                padding: '0.5rem 1rem',
                                border: '1px solid #e2e8f0',
                                borderRadius: '0.5rem',
                                background: 'white',
                                color: '#64748b',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                cursor: 'pointer'
                            }}>
                                Filter & Sort
                            </button>
                        </div>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                { address: '125 Collins St, Melbourne', similarity: 94, price: '$2.4M', beds: 4, baths: 2, status: 'Sold Feb 2025' },
                                { address: '47 Smith Rd, Melbourne', similarity: 89, price: '$2.3M', beds: 3, baths: 2, status: 'Sold Jan 2025' },
                                { address: '90 James St, Melbourne', similarity: 85, price: '$2.5M', beds: 4, baths: 3, status: 'Active' },
                                { address: '32 Park Ave, Melbourne', similarity: 82, price: '$2.2M', beds: 3, baths: 2, status: 'Sold Dec 2024' }
                            ].map((comp, idx) => (
                                <div key={idx} style={{
                                    padding: '1.5rem',
                                    background: 'white',
                                    borderRadius: '1rem',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    transition: 'all 0.2s',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#3b82f6';
                                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                        <div style={{
                                            width: '3rem',
                                            height: '3rem',
                                            borderRadius: '0.5rem',
                                            background: '#f1f5f9',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#64748b',
                                            fontWeight: 'bold'
                                        }}>
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '1.125rem', marginBottom: '0.25rem' }}>
                                                {comp.address}
                                            </div>
                                            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                                {comp.beds} beds • {comp.baths} baths • {comp.status}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem' }}>
                                            {comp.price}
                                        </div>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '9999px',
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            color: '#3b82f6',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold'
                                        }}>
                                            {comp.similarity}% Match
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
