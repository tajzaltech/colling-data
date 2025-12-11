"use client";

import { GitMerge, Check, X, AlertTriangle, Network } from "lucide-react";

export default function MatchingPage() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', minHeight: 'calc(100vh - 80px)' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                    Matching Engine
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Collings Intelligence Graph: Entity Resolution & Mapping
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

                {/* Graph Area */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #e2e8f0',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    minHeight: '500px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Network size={20} />
                            Active Resolution Graph
                        </h3>
                        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Processing ID: #PROP-Match-9921</div>
                    </div>

                    {/* FAKE GRAPH VISUALIZATION */}
                    <div style={{ flex: 1, position: 'relative', background: '#f8fafc', borderRadius: '0.75rem', border: '1px dashed #cbd5e1', overflow: 'hidden' }}>
                        {/* Central Node */}
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '1rem 2rem',
                            background: '#0f172a',
                            color: 'white',
                            borderRadius: '9999px',
                            fontWeight: 'bold',
                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                            zIndex: 10
                        }}>
                            Unified Property
                        </div>

                        {/* Connected Nodes */}
                        <div style={{ position: 'absolute', top: '20%', left: '20%', background: '#fff', border: '2px solid #0ea5e9', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            RP Data (Sale)
                        </div>
                        <div style={{ position: 'absolute', bottom: '20%', right: '20%', background: '#fff', border: '2px solid #f59e0b', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            REIP (Listing)
                        </div>
                        <div style={{ position: 'absolute', top: '20%', right: '30%', background: '#fff', border: '2px solid #10b981', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            User Uploads
                        </div>

                        {/* Connecting Lines (CSS only for demo) */}
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                            <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="50%" y1="50%" x2="70%" y2="25%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>
                </div>

                {/* Match Queue */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Requires Manual Review
                    </h3>
                    {[
                        { address: "12 Osborne St, South Yarra", conflict: "Price Mismatch (>20%)", score: 82 },
                        { address: "5/99 Toorak Rd, South Yarra", conflict: "Address Ambiguity", score: 65 },
                        { address: "42 Chapel St, Windsor", conflict: "Duplicate REIP Feed", score: 95 }
                    ].map((item, i) => (
                        <div key={i} style={{
                            background: 'white',
                            padding: '1rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem' }}>{item.address}</div>
                            <div style={{ fontSize: '0.75rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                                <AlertTriangle size={12} />
                                {item.conflict}
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', background: '#f0fdf4', color: '#16a34a', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
                                    <Check size={16} />
                                </button>
                                <button style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', background: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
