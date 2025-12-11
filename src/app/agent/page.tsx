"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Users, TrendingUp, Home, DollarSign, Eye, Mail, ArrowUpRight, Sparkles, Phone, Calendar } from "lucide-react";
import { mockLeads, mockAgentListings } from "@/lib/mockData";
import { motion } from "framer-motion";

export default function AgentDashboard() {
    const totalValue = mockAgentListings.reduce((sum, l) => sum + l.price, 0);
    const totalViews = mockAgentListings.reduce((sum, l) => sum + l.views, 0);
    const totalEnquiries = mockAgentListings.reduce((sum, l) => sum + l.enquiries, 0);

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                    Dashboard
                </h1>
                <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    Welcome back! Here's your performance overview
                </p>
            </div>

            {/* AI Actions Widget (High Priority) */}
            <div style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                borderRadius: '1rem',
                padding: '1.5rem',
                color: 'white',
                marginBottom: '2rem',
                boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.1)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem'
            }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '0.75rem' }}>
                    <Sparkles style={{ color: '#38bdf8' }} size={24} />
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>AI Action Plan: Who to call today</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1rem' }}>Based on recent buyer behaviour and property matches.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            { name: "Sareena Patel", reason: "Matched 12 Osborne St (High Interest)", time: "Best time: 4 PM" },
                            { name: "David Smith", reason: "Viewed 88 Toorak Rd 3 times", time: "Best time: Now" }
                        ].map((action, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{action.name}</div>
                                <div style={{ fontSize: '0.875rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>{action.reason}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#38bdf8' }}>
                                    <Phone size={12} />
                                    {action.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                    { icon: Users, label: 'Active Leads', value: mockLeads.length, change: '+12%', color: '#0f172a' },
                    { icon: Home, label: 'Active Listings', value: mockAgentListings.filter(l => l.status === 'active').length, change: '+8%', color: '#0f172a' },
                    { icon: DollarSign, label: 'Total Value', value: `$${(totalValue / 1000000).toFixed(1)}M`, change: '+15%', color: '#0f172a' },
                    { icon: TrendingUp, label: 'Conversion Rate', value: '18%', change: '+3%', color: '#0f172a' }
                ].map((stat, idx) => (
                    <div key={idx} style={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s'
                    }}>
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
                                <stat.icon size={24} style={{ color: stat.color }} />
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                background: 'rgba(16, 185, 129, 0.1)',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: '#10b981'
                            }}>
                                <ArrowUpRight size={12} />
                                {stat.change}
                            </div>
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: '500' }}>
                            {stat.label}
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>
                            {stat.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Leads - Clean Table */}
            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>
                        Recent Leads
                    </h2>
                    <button style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e2e8f0',
                        background: 'white',
                        color: '#0f172a',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>
                        View All
                    </button>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                {['Name', 'Contact', 'Property', 'Date', 'Status'].map(header => (
                                    <th key={header} style={{
                                        padding: '0.75rem',
                                        textAlign: 'left',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        color: '#64748b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {mockLeads.slice(0, 5).map((lead) => (
                                <tr key={lead.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '1rem', fontWeight: '600', color: '#0f172a', fontSize: '0.875rem' }}>
                                        {lead.name}
                                    </td>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
                                        <div>{lead.email}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{lead.phone}</div>
                                    </td>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
                                        {lead.property}
                                    </td>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
                                        {lead.date}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '9999px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            background: lead.status === 'new' ? 'rgba(239, 68, 68, 0.1)' :
                                                lead.status === 'contacted' ? 'rgba(59, 130, 246, 0.1)' :
                                                    'rgba(16, 185, 129, 0.1)',
                                            color: lead.status === 'new' ? '#ef4444' :
                                                lead.status === 'contacted' ? '#3b82f6' :
                                                    '#10b981'
                                        }}>
                                            {lead.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Listings Performance - Clean Cards */}
            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>
                        Top Performing Listings
                    </h2>
                    <button style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e2e8f0',
                        background: 'white',
                        color: '#0f172a',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>
                        View All
                    </button>
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {mockAgentListings.slice(0, 4).map((listing) => (
                        <div key={listing.id} style={{
                            padding: '1rem',
                            background: '#f8fafc',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '600', fontSize: '0.875rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                                    {listing.address}
                                </div>
                                <div style={{ fontSize: '0.875rem', color: '#0f172a', fontWeight: '600' }}>
                                    ${(listing.price / 1000000).toFixed(2)}M
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>
                                        <Eye size={14} />
                                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Views</span>
                                    </div>
                                    <span style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem' }}>{listing.views.toLocaleString()}</span>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>
                                        <Mail size={14} />
                                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Enquiries</span>
                                    </div>
                                    <span style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem' }}>{listing.enquiries}</span>
                                </div>
                                <span style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    background: listing.status === 'active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                                    color: listing.status === 'active' ? '#10b981' : '#f59e0b'
                                }}>
                                    {listing.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
