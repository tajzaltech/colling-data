"use client";

import { Users, TrendingUp, Home, DollarSign, Eye, Mail, ArrowUpRight, Sparkles, Phone, ArrowRight } from "lucide-react";
import { mockLeads, mockAgentListings } from "@/lib/mockData";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function AgentDashboard() {
    const totalValue = mockAgentListings.reduce((sum, l) => sum + l.price, 0);

    // Quick calculations for stats
    const activeLeads = mockLeads.filter(l => l.status === 'new' || l.status === 'contacted').length;
    const activeListings = mockAgentListings.filter(l => l.status === 'active').length;

    const stats = [
        {
            label: 'Active Leads',
            value: activeLeads.toString(),
            change: '+12%',
            icon: Users,
            color: '#3b82f6',
            bg: 'rgba(59, 130, 246, 0.1)'
        },
        {
            label: 'Active Listings',
            value: activeListings.toString(),
            change: '+5%',
            icon: Home,
            color: '#10b981',
            bg: 'rgba(16, 185, 129, 0.1)'
        },
        {
            label: 'Total Pipeline',
            value: `$${(totalValue / 1000000).toFixed(1)}M`,
            change: '+8%',
            icon: DollarSign,
            color: '#f59e0b',
            bg: 'rgba(245, 158, 11, 0.1)'
        },
        {
            label: 'Conversion Rate',
            value: '22%',
            change: '+2.4%',
            icon: TrendingUp,
            color: '#8b5cf6',
            bg: 'rgba(139, 92, 246, 0.1)'
        }
    ];

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', fontFamily: 'sans-serif' }}>

            {/* Header */}
            <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
                        Dashboard
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b' }}>
                        Welcome back, James! Here's your daily overview.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{
                        padding: '0.75rem 1.5rem',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        color: '#475569',
                        cursor: 'pointer',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
                    }}>
                        Add Lead
                    </button>
                    <button style={{
                        padding: '0.75rem 1.5rem',
                        background: '#5ec5cf',
                        border: 'none',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px -1px rgba(94, 197, 207, 0.4)'
                    }}>
                        Create Listing
                    </button>
                </div>
            </div>

            {/* AI Action Widget */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    color: 'white',
                    marginBottom: '2.5rem',
                    boxShadow: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.1)'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '1rem' }}>
                        <Sparkles size={24} color="#5ec5cf" fill="#5ec5cf" fillOpacity={0.2} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>AI Recommended Actions</h2>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>You have 3 high-priority tasks for today based on buyer activity.</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                        {
                            name: "Sarah Jenkins",
                            action: "Call for Follow-up",
                            reason: "Viewed 12 Osborne St (Brochure Downloaded)",
                            time: "Best time: 2:00 PM"
                        },
                        {
                            name: "Michael Chen",
                            action: "Email Market Report",
                            reason: "Requested appraisal for 44 Toorak Rd",
                            time: "Sent 2 hrs ago"
                        },
                        {
                            name: "Emma Wilson",
                            action: "Schedule Inspection",
                            reason: "High interest in 88 St Kilda Rd",
                            time: "Pending Response"
                        }
                    ].map((task, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '1rem',
                            padding: '1.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <span style={{ fontWeight: '600', fontSize: '1rem' }}>{task.name}</span>
                                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(94, 197, 207, 0.15)', color: '#5ec5cf', borderRadius: '99px', fontWeight: '600' }}>{task.time}</span>
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>{task.reason}</div>
                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                color: '#38bdf8',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0
                            }}>
                                {task.action} <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {stats.map((stat, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        style={{
                            background: 'white',
                            borderRadius: '1.5rem',
                            padding: '1.75rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                            border: '1px solid #f1f5f9'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                            <div style={{
                                padding: '0.75rem',
                                borderRadius: '1rem',
                                background: stat.bg,
                                color: stat.color
                            }}>
                                <stat.icon size={24} />
                            </div>
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                fontSize: '0.875rem',
                                fontWeight: '700',
                                color: '#10b981',
                                background: 'rgba(16, 185, 129, 0.1)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '99px'
                            }}>
                                <ArrowUpRight size={14} /> {stat.change}
                            </span>
                        </div>
                        <div style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: '600' }}>{stat.label}</div>
                        <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#1e293b', letterSpacing: '-0.025em' }}>{stat.value}</div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

                {/* Recent Leads Module */}
                <div style={{
                    background: 'white',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #f1f5f9'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b' }}>Recent Leads</h2>
                        <Link href="/agent/leads">
                            <button style={{ color: '#5ec5cf', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>View All</button>
                        </Link>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {mockLeads.slice(0, 5).map((lead, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1rem',
                                borderRadius: '1rem',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: '#cbd5e1',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.9rem',
                                        fontWeight: '700',
                                        color: 'white'
                                    }}>
                                        {lead.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '600', color: '#1e293b' }}>{lead.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Interested in {lead.property}</div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: lead.status === 'new' ? '#ef4444' : '#10b981',
                                        background: lead.status === 'new' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '99px',
                                        display: 'inline-block',
                                        marginBottom: '0.25rem',
                                        textTransform: 'uppercase'
                                    }}>
                                        {lead.status}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{lead.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Listings Widgets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '1.5rem',
                        padding: '2rem',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                        border: '1px solid #f1f5f9'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b' }}>Top Listing</h2>
                            <button style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}>...</button>
                        </div>
                        {mockAgentListings.slice(0, 1).map((listing, i) => (
                            <div key={i}>
                                <div style={{
                                    height: '180px',
                                    borderRadius: '1rem',
                                    background: '#e2e8f0',
                                    marginBottom: '1rem',
                                    backgroundImage: `url(${listing.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'rgba(255,255,255,0.9)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '99px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: '#10b981'
                                    }}>
                                        Active
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.25rem' }}>{listing.address}</h3>
                                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#5ec5cf', marginBottom: '1rem' }}>${(listing.price / 1000000).toFixed(2)}M</div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Views</div>
                                        <div style={{ fontWeight: '700', color: '#1e293b' }}>{listing.views}</div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Enquiries</div>
                                        <div style={{ fontWeight: '700', color: '#1e293b' }}>{listing.enquiries}</div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Offers</div>
                                        <div style={{ fontWeight: '700', color: '#1e293b' }}>3</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
