"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Database, FileText, Shield, Image, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function IngestionView() {
    const rpDataSteps = [
        { name: 'API Loader', icon: Database, status: 'complete' },
        { name: 'Normalisation', icon: FileText, status: 'complete' },
        { name: 'Compliance Filter', icon: Shield, status: 'complete' },
        { name: 'Storage', icon: Database, status: 'complete' }
    ];

    const reipSteps = [
        { name: 'REAXML Parser', icon: FileText, status: 'complete' },
        { name: 'Media Processing', icon: Image, status: 'complete' },
        { name: 'Deduplication', icon: CheckCircle, status: 'complete' },
        { name: 'Storage', icon: Database, status: 'complete' }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '0.5rem' }}>
                    Data Ingestion Pipelines
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Real-time data processing from licensed sources
                </p>
            </div>

            {/* Pipeline Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                    { label: 'RP Data Records', value: '2.4M', color: '#ef4444' },
                    { label: 'REIP Listings', value: '156K', color: '#3b82f6' },
                    { label: 'Processing Rate', value: '1.2K/min', color: '#10b981' },
                    { label: 'Pipeline Health', value: '100%', color: '#10b981' }
                ].map((stat, idx) => (
                    <div key={idx} style={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: '500' }}>
                            {stat.label}
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: stat.color }}>
                            {stat.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pipelines */}
            <div style={{ display: 'grid', gap: '2rem' }}>
                {/* RP Data Pipeline */}
                <div style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5ec5cf' }}>
                                RP Data Pipeline
                            </h2>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                background: 'rgba(239, 68, 68, 0.1)',
                                color: '#ef4444',
                                border: '1px solid rgba(239, 68, 68, 0.2)'
                            }}>
                                Restricted
                            </span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                            Licensed sales data • Internal use only • Daily sync
                        </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {rpDataSteps.map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={{
                                        padding: '1rem',
                                        background: '#f8fafc',
                                        borderRadius: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        minWidth: '120px'
                                    }}
                                >
                                    <div style={{
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        borderRadius: '0.5rem',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <step.icon size={20} style={{ color: '#ef4444' }} />
                                    </div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#5ec5cf', textAlign: 'center' }}>
                                        {step.name}
                                    </div>
                                    <CheckCircle size={16} style={{ color: '#10b981' }} />
                                </motion.div>
                                {idx < rpDataSteps.length - 1 && (
                                    <ArrowRight size={20} style={{ color: '#cbd5e1' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* REIP Pipeline */}
                <div style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5ec5cf' }}>
                                REIP Feed Pipeline
                            </h2>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: '#3b82f6',
                                border: '1px solid rgba(59, 130, 246, 0.2)'
                            }}>
                                Public
                            </span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                            Live listings • Media content • Real-time updates
                        </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {reipSteps.map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={{
                                        padding: '1rem',
                                        background: '#f8fafc',
                                        borderRadius: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        minWidth: '120px'
                                    }}
                                >
                                    <div style={{
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        borderRadius: '0.5rem',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <step.icon size={20} style={{ color: '#3b82f6' }} />
                                    </div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#5ec5cf', textAlign: 'center' }}>
                                        {step.name}
                                    </div>
                                    <CheckCircle size={16} style={{ color: '#10b981' }} />
                                </motion.div>
                                {idx < reipSteps.length - 1 && (
                                    <ArrowRight size={20} style={{ color: '#cbd5e1' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
