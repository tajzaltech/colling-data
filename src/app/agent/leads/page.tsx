"use client";

import { Check, Mail, Phone, Clock, ArrowRight, UserPlus, Filter, Search, Eye, Edit2, Trash2, MoreVertical } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';

export default function LeadsPage() {
    // Mock Data State to simulate actions
    const [leads, setLeads] = useState([
        { id: 1, name: "Sareena Patel", type: "Buyer", source: "Domain", status: "New", time: "2m ago", listing: "12 Osborne St", email: "sareena@gmail.com", phone: "0400 123 456" },
        { id: 2, name: "Michael Chen", type: "Vendor", source: "Website Appraisal", status: "Contacted", time: "1h ago", listing: "88 Toorak Rd", email: "m.chen@outlook.com", phone: "0412 987 654" },
        { id: 3, name: "David Smith", type: "Buyer", source: "Open Home", status: "Follow Up", time: "3h ago", listing: "12 Osborne St", email: "d.smith@yahoo.com", phone: "0499 888 777" },
        { id: 4, name: "Emma Wilson", type: "Tenant", source: "Realestate.com.au", status: "New", time: "5h ago", listing: "4/22 Chapel St", email: "emma.w@gmail.com", phone: "0423 456 789" },
        { id: 5, name: "James O'Connor", type: "Buyer", source: "Direct Call", status: "New", time: "1d ago", listing: "General Enquiry", email: "jimmy.o@hotmail.com", phone: "0455 222 111" },
        { id: 6, name: "Sarah Jenkins", type: "Vendor", source: "Referral", status: "Qualified", time: "2d ago", listing: "Potential Listing", email: "s.jenkins@bigpond.com", phone: "0488 111 222" },
    ]);

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this lead?")) {
            setLeads(leads.filter(l => l.id !== id));
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', fontFamily: 'sans-serif' }}>

            {/* Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
                        Lead Management
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b' }}>
                        Track, assign, and convert your incoming enquiries.
                    </p>
                </div>
                <button style={{
                    padding: '0.75rem 1.5rem',
                    background: '#5ec5cf',
                    color: 'white',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(94, 197, 207, 0.4)'
                }}>
                    <UserPlus size={18} />
                    Add Manual Lead
                </button>
            </div>

            {/* Filters & Search */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
            }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
                    <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                        type="text"
                        placeholder="Search leads by name, email or property..."
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem 0.75rem 3rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0',
                            outline: 'none',
                            fontSize: '0.9rem',
                            color: '#1e293b',
                            background: 'white',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <button style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #e2e8f0',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#64748b',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}>
                    <Filter size={18} /> Filter
                </button>
            </div>

            {/* Main Table Card */}
            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                        <tr>
                            {['Lead Details', 'Interest / Source', 'Status', 'Last Activity', 'Actions'].map(h => (
                                <th key={h} style={{
                                    padding: '1.25rem 1.5rem',
                                    textAlign: 'left',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: '#64748b',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }} className="hover:bg-slate-50">
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            background: '#e0f2fe',
                                            color: '#0284c7',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: '700',
                                            fontSize: '0.9rem'
                                        }}>
                                            {lead.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.95rem' }}>{lead.name}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.1rem' }}>{lead.email}</div>
                                            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{lead.phone}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem' }}>{lead.listing}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                                        <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '0.1rem 0.5rem', borderRadius: '4px', color: '#64748b', fontWeight: '500' }}>{lead.type}</span>
                                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>via {lead.source}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '99px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        background: lead.status === 'New' ? 'rgba(239, 68, 68, 0.1)' :
                                            lead.status === 'Contacted' ? 'rgba(59, 130, 246, 0.1)' :
                                                'rgba(16, 185, 129, 0.1)',
                                        color: lead.status === 'New' ? '#ef4444' :
                                            lead.status === 'Contacted' ? '#3b82f6' :
                                                '#10b981',
                                        border: lead.status === 'New' ? '1px solid rgba(239, 68, 68, 0.2)' : 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    }}>
                                        {lead.status === 'New' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }}></span>}
                                        {lead.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#64748b' }}>
                                        <Clock size={14} />
                                        {lead.time}
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button
                                            title="View Details"
                                            style={{
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #e2e8f0',
                                                color: '#475569',
                                                background: 'white',
                                                cursor: 'pointer',
                                                transition: 'all 0.1s'
                                            }}>
                                            <Eye size={16} />
                                        </button>
                                        <button
                                            title="Edit Lead"
                                            style={{
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #e2e8f0',
                                                color: '#3b82f6',
                                                background: 'white',
                                                cursor: 'pointer'
                                            }}>
                                            <Edit2 size={16} />
                                        </button>
                                        <button
                                            title="Delete Lead"
                                            onClick={() => handleDelete(lead.id)}
                                            style={{
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #fee2e2',
                                                color: '#ef4444',
                                                background: '#fef2f2',
                                                cursor: 'pointer'
                                            }}>
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination / Footer */}
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '0.875rem' }}>
                <div>Showing <strong>{leads.length}</strong> of <strong>24</strong> leads</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '0.5rem', cursor: 'pointer', color: '#94a3b8' }} disabled>Previous</button>
                    <button style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '0.5rem', cursor: 'pointer', color: '#1e293b' }}>Next</button>
                </div>
            </div>
        </div>
    );
}
