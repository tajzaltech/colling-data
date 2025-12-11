"use client";

import { Check, Mail, Phone, Clock, ArrowRight, UserPlus } from "lucide-react";

export default function LeadsPage() {
    const leads = [
        { id: 1, name: "Sareena Patel", type: "Buyer", source: "Domain", status: "New", time: "2m ago", listing: "12 Osborne St" },
        { id: 2, name: "Michael Chen", type: "Vendor", source: "Website Appraisal", status: "Contacted", time: "1h ago", listing: "88 Toorak Rd" },
        { id: 3, name: "David Smith", type: "Buyer", source: "Open Home", status: "Follow Up", time: "3h ago", listing: "12 Osborne St" },
        { id: 4, name: "Emma Wilson", type: "Tenant", source: "Realestate.com.au", status: "New", time: "5h ago", listing: "4/22 Chapel St" },
        { id: 5, name: "James O'Connor", type: "Buyer", source: "Direct Call", status: "New", time: "1d ago", listing: "General Enquiry" },
    ];

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', background: '#ffffff', minHeight: 'calc(100vh - 80px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '0.5rem' }}>
                        Lead Management
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b' }}>
                        Process and assign incoming enquiries
                    </p>
                </div>
                <button style={{
                    padding: '0.75rem 1.5rem',
                    background: '#5ec5cf',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                }}>
                    <UserPlus size={18} />
                    Add Manual Lead
                </button>
            </div>

            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                        <tr>
                            {['Lead Name', 'Type / Source', 'Interest', 'Status', 'Timing', 'Actions'].map(h => (
                                <th key={h} style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }}>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ fontWeight: '600', color: '#5ec5cf' }}>{lead.name}</div>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ fontSize: '0.875rem', color: '#5ec5cf', fontWeight: '500' }}>{lead.type}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{lead.source}</div>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ fontSize: '0.875rem', color: '#334155' }}>{lead.listing}</div>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '99px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        background: lead.status === 'New' ? '#fef2f2' : '#f0f9ff',
                                        color: lead.status === 'New' ? '#ef4444' : '#0284c7'
                                    }}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: '#64748b' }}>
                                        <Clock size={14} />
                                        {lead.time}
                                    </div>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0', color: '#5ec5cf', background: 'white', cursor: 'pointer' }}>
                                            <Phone size={16} />
                                        </button>
                                        <button style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0', color: '#5ec5cf', background: 'white', cursor: 'pointer' }}>
                                            <Mail size={16} />
                                        </button>
                                        <button style={{ padding: '0.5rem', borderRadius: '0.375rem', background: '#5ec5cf', color: 'white', border: 'none', cursor: 'pointer' }}>
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
