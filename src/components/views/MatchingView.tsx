"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Database, FileText, User, GitMerge, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function MatchingView() {
    const sources = [
        { name: 'RP Data', icon: Database, records: '2.4M', color: '#ef4444' },
        { name: 'REIP Feed', icon: FileText, records: '156K', color: '#3b82f6' },
        { name: 'User Upload', icon: User, records: '12K', color: '#10b981' }
    ];

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '0.5rem' }}>
                    Property Intelligence Graph
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Fuzzy matching and golden record creation from multiple sources
                </p>
            </div>

            {/* Matching Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                    { label: 'Total Properties', value: '2.5M', color: '#3b82f6' },
                    { label: 'Match Confidence', value: '99.8%', color: '#10b981' },
                    { label: 'Golden Records', value: '2.5M', color: '#8b5cf6' },
                    { label: 'Linked Assets', value: '8.2M', color: '#f59e0b' }
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

            {/* Matching Flow */}
            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '2rem', textAlign: 'center' }}>
                    Entity Resolution Flow
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
                    {/* Source Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                        {sources.map((source, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    padding: '1.25rem',
                                    background: '#f8fafc',
                                    borderRadius: '0.75rem',
                                    border: '1px solid #e2e8f0'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        borderRadius: '0.5rem',
                                        background: `rgba(${source.color === '#ef4444' ? '239, 68, 68' : source.color === '#3b82f6' ? '59, 130, 246' : '16, 185, 129'}, 0.1)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <source.icon size={20} style={{ color: source.color }} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.875rem', color: '#5ec5cf' }}>
                                            {source.name}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                            {source.records} records
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Arrow */}
                    <ArrowRight size={32} style={{ color: '#cbd5e1', flexShrink: 0 }} />

                    {/* Matching Engine */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            padding: '2rem',
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                            borderRadius: '1rem',
                            border: '2px solid #3b82f6',
                            flex: 1,
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            width: '4rem',
                            height: '4rem',
                            borderRadius: '1rem',
                            background: '#3b82f6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1rem auto'
                        }}>
                            <GitMerge size={32} style={{ color: 'white' }} />
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#5ec5cf', marginBottom: '0.5rem' }}>
                            Fuzzy Matching
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                            Address normalization<br />
                            Geocoding<br />
                            Confidence scoring
                        </div>
                        <div style={{
                            padding: '0.5rem 1rem',
                            background: 'rgba(16, 185, 129, 0.1)',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            color: '#10b981',
                            display: 'inline-block'
                        }}>
                            99.8% Confidence
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <ArrowRight size={32} style={{ color: '#cbd5e1', flexShrink: 0 }} />

                    {/* Golden Record */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            padding: '2rem',
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(245, 158, 11, 0.1))',
                            borderRadius: '1rem',
                            border: '2px solid #8b5cf6',
                            flex: 1
                        }}
                    >
                        <div style={{
                            width: '4rem',
                            height: '4rem',
                            borderRadius: '1rem',
                            background: '#8b5cf6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1rem auto'
                        }}>
                            <CheckCircle size={32} style={{ color: 'white' }} />
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#5ec5cf', marginBottom: '1rem', textAlign: 'center' }}>
                            Golden Record
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {['RP Data attributes', 'REIP listing content', 'User media', 'Geocoded location'].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
                                    <div style={{ width: '0.375rem', height: '0.375rem', borderRadius: '9999px', background: '#8b5cf6' }} />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Example Match */}
            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '1.5rem',
                marginTop: '2rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '1rem' }}>
                    Example: 123 Collins Street, Melbourne
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {[
                        { source: 'RP Data', data: 'Sales history, Attributes' },
                        { source: 'REIP', data: 'Photos, Floorplans, Description' },
                        { source: 'User', data: 'Renovation photos' },
                        { source: 'Golden', data: 'Complete property profile' }
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            padding: '1rem',
                            background: '#f8fafc',
                            borderRadius: '0.5rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#3b82f6', marginBottom: '0.5rem' }}>
                                {item.source}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                {item.data}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
