"use client";

import { Check, Mail, Phone, Clock, ArrowRight, UserPlus, Filter, Search, Eye, Edit2, Trash2, X, MoreVertical } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

export default function LeadsPage() {
    // Mock Data State
    const [leads, setLeads] = useState([
        { id: 1, name: "Sareena Patel", type: "Buyer", source: "Domain", status: "New", time: "2m ago", listing: "12 Osborne St", email: "sareena@gmail.com", phone: "0400 123 456" },
        { id: 2, name: "Michael Chen", type: "Vendor", source: "Website Appraisal", status: "Contacted", time: "1h ago", listing: "88 Toorak Rd", email: "m.chen@outlook.com", phone: "0412 987 654" },
        { id: 3, name: "David Smith", type: "Buyer", source: "Open Home", status: "Follow Up", time: "3h ago", listing: "12 Osborne St", email: "d.smith@yahoo.com", phone: "0499 888 777" },
        { id: 4, name: "Emma Wilson", type: "Tenant", source: "Realestate.com.au", status: "New", time: "5h ago", listing: "4/22 Chapel St", email: "emma.w@gmail.com", phone: "0423 456 789" },
        { id: 5, name: "James O'Connor", type: "Buyer", source: "Direct Call", status: "New", time: "1d ago", listing: "General Enquiry", email: "jimmy.o@hotmail.com", phone: "0455 222 111" },
        { id: 6, name: "Sarah Jenkins", type: "Vendor", source: "Referral", status: "Qualified", time: "2d ago", listing: "Potential Listing", email: "s.jenkins@bigpond.com", phone: "0488 111 222" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newLead, setNewLead] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'Buyer',
        source: 'Walk In',
        status: 'New',
        listing: '',
    });

    const handleAddLead = () => {
        if (!newLead.name || !newLead.email || !newLead.phone) {
            alert("Please fill in all required fields (Name, Email, Phone)");
            return;
        }

        const lead = {
            id: leads.length + 1,
            ...newLead,
            time: "Just now"
        };

        setLeads([lead, ...leads]);
        setShowModal(false);
        setNewLead({ name: '', email: '', phone: '', type: 'Buyer', source: 'Walk In', status: 'New', listing: '' });
    };

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
                <button
                    onClick={() => setShowModal(true)}
                    style={{
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
                    }}
                >
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
                                    <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem' }}>{lead.listing || 'Unknown Interest'}</div>
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
                <div>Showing <strong>{leads.length}</strong> of <strong>{leads.length > 24 ? leads.length : 24}</strong> leads</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '0.5rem', cursor: 'pointer', color: '#94a3b8' }} disabled>Previous</button>
                    <button style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '0.5rem', cursor: 'pointer', color: '#1e293b' }}>Next</button>
                </div>
            </div>

            {/* Add Lead Modal */}
            <AnimatePresence>
                {showModal && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            style={{
                                background: 'white',
                                borderRadius: '1.5rem',
                                padding: '2.5rem',
                                maxWidth: '500px',
                                width: '90%',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                maxHeight: '90vh',
                                overflowY: 'auto'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a' }}>
                                    Add Manual Lead
                                </h2>
                                <button onClick={() => setShowModal(false)} style={{ padding: '0.5rem', borderRadius: '0.5rem', border: 'none', background: '#f1f5f9', cursor: 'pointer' }}>
                                    <X size={20} color="#64748b" />
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {/* Name */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Full Name *</label>
                                    <input type="text" value={newLead.name} onChange={(e) => setNewLead({ ...newLead, name: e.target.value })} placeholder="e.g., John Doe" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box' }} />
                                </div>

                                {/* Contact */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Email *</label>
                                        <input type="email" value={newLead.email} onChange={(e) => setNewLead({ ...newLead, email: e.target.value })} placeholder="john@example.com" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Phone *</label>
                                        <input type="tel" value={newLead.phone} onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })} placeholder="0400 000 000" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                </div>

                                {/* Details */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Type</label>
                                        <select value={newLead.type} onChange={(e) => setNewLead({ ...newLead, type: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                                            <option value="Buyer">Buyer</option>
                                            <option value="Vendor">Vendor</option>
                                            <option value="Tenant">Tenant</option>
                                            <option value="Landlord">Landlord</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Status</label>
                                        <select value={newLead.status} onChange={(e) => setNewLead({ ...newLead, status: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                                            <option value="New">New</option>
                                            <option value="Contacted">Contacted</option>
                                            <option value="Qualified">Qualified</option>
                                            <option value="Lost">Lost</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Source */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Source</label>
                                    <select value={newLead.source} onChange={(e) => setNewLead({ ...newLead, source: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                                        <option value="Walk In">Walk In</option>
                                        <option value="Realestate.com.au">Realestate.com.au</option>
                                        <option value="Domain">Domain</option>
                                        <option value="Website">Website</option>
                                        <option value="Referral">Referral</option>
                                    </select>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', fontWeight: '700', cursor: 'pointer' }}>Cancel</button>
                                    <button onClick={handleAddLead} style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: 'none', background: '#5ec5cf', color: 'white', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(94, 197, 207, 0.4)' }}>Add Lead</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
