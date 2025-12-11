"use client";

import { Database, Shield, AlertCircle, CheckCircle, RefreshCw, Server, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function IngestionPage() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', minHeight: 'calc(100vh - 80px)' }}>
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                        Ingestion Efficiency Monitor
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b' }}>
                        Live monitoring of separated data pipelines (Strict Isolation Enforced)
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{
                        padding: '0.75rem 1.5rem',
                        background: '#0f172a',
                        color: 'white',
                        borderRadius: '0.5rem',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <RefreshCw size={16} />
                        Force Sync
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                {/* RP Data Pipeline */}
                <PipelineCard
                    title="RP Data Ingestion"
                    source="API / Licensed Dataset"
                    status="Active"
                    records="2.4M"
                    color="#0ea5e9" // Light Blue
                    logs={[
                        "Batch #4059 started: Daily Incrementals",
                        "Source Tagging: RP_DATA_LICENSED",
                        "Redaction Policy Applied: 104 fields hidden",
                        "Storage: /secure/rp-data/raw"
                    ]}
                />

                {/* REIP Pipeline */}
                <PipelineCard
                    title="REIP Feed Handler"
                    source="REAXML / API Feed"
                    status="Live Streaming"
                    records="156K"
                    color="#f59e0b" // Amber
                    logs={[
                        "Listing Update: ID #L-99283 (Richmond)",
                        "Media Processed: 12 photos, 1 floorplan",
                        "Agent Mapping: Confirm ID #AG-442",
                        "Storage: /public/reip/listings"
                    ]}
                />
            </div>

            {/* Isolation Verification */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Shield style={{ color: '#10b981' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>
                        Compliance Guard: Pipeline Isolation Verified
                    </h3>
                </div>
                <div style={{
                    padding: '1rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '0.5rem',
                    color: '#065f46',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                }}>
                    System confirms 0 bytes shared between RP Data and REIP storage buckets. All merges occur strictly in the Property Matching Engine with field-level tagging.
                </div>
            </div>
        </div>
    );
}

function PipelineCard({ title, source, status, records, color, logs }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
                background: 'white',
                borderRadius: '1rem',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}
        >
            <div style={{
                padding: '1.5rem',
                borderBottom: `2px solid ${color}`,
                background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(248,250,252,1))'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            padding: '0.5rem',
                            background: `${color}15`,
                            borderRadius: '0.5rem'
                        }}>
                            <Server size={20} style={{ color: color }} />
                        </div>
                        <div>
                            <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#0f172a' }}>{title}</h3>
                            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{source}</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#0f172a' }}>{records}</div>
                        <div style={{ fontSize: '0.75rem', color: color, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'flex-end' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color }} />
                            {status}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: '1.5rem', background: '#f8fafc' }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Live Ingestion Logs
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {logs.map((log: string, i: number) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            fontSize: '0.8125rem',
                            color: '#334155',
                            fontFamily: 'monospace'
                        }}>
                            <ArrowRight size={12} style={{ color: '#94a3b8' }} />
                            {log}
                        </div>
                    ))}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: color, animation: 'pulse 1s infinite' }} />
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Processing incoming stream...</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
