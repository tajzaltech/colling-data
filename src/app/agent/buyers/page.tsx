"use client";

import { User, MapPin, DollarSign, TrendingUp } from "lucide-react";
import { mockBuyers } from "@/lib/mockData";

export default function BuyersPage() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', background: '#ffffff', minHeight: '100vh' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                    Buyer Profiles
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Track buyer preferences and engagement
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {mockBuyers.map((buyer) => (
                    <div key={buyer.id} style={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.2s',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                            e.currentTarget.style.borderColor = '#3b82f6';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                            e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '3.5rem',
                                height: '3.5rem',
                                borderRadius: '1rem',
                                background: 'rgba(59, 130, 246, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <User size={24} style={{ color: '#3b82f6' }} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#0f172a' }}>
                                    {buyer.name}
                                </div>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '0.75rem',
                                    color: '#3b82f6',
                                    fontWeight: '600',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    padding: '0.125rem 0.5rem',
                                    borderRadius: '9999px',
                                    marginTop: '0.25rem'
                                }}>
                                    Active Buyer
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '2rem', display: 'flex', justifyContent: 'center' }}>
                                    <DollarSign size={18} style={{ color: '#64748b' }} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>Budget</div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#0f172a' }}>{buyer.budget}</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '2rem', display: 'flex', justifyContent: 'center' }}>
                                    <MapPin size={18} style={{ color: '#64748b' }} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>Preferred Suburbs</div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#3b82f6' }}>
                                        {buyer.suburbs.join(', ')}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '2rem', display: 'flex', justifyContent: 'center' }}>
                                    <TrendingUp size={18} style={{ color: '#64748b' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                                        <span style={{ color: '#64748b' }}>Engagement Score</span>
                                        <span style={{ color: '#10b981', fontWeight: '600' }}>{buyer.engagement}%</span>
                                    </div>
                                    <div style={{
                                        height: '0.5rem',
                                        background: '#f1f5f9',
                                        borderRadius: '9999px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            height: '100%',
                                            width: `${buyer.engagement}%`,
                                            background: '#3b82f6',
                                            borderRadius: '9999px'
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
