"use client";

import { ClipboardCheck, Calendar, MapPin, CheckCircle, Clock, Plus, Search, Filter, Eye, Edit2, Trash2, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppraisalsPage() {
    // Mock Appraisals Data
    const [appraisals, setAppraisals] = useState([
        {
            id: 1,
            address: "88 Toorak Road, South Yarra",
            client: "Michael Chen",
            date: "Today, 2:00 PM",
            status: "Scheduled",
            estValue: "$2.4M - $2.6M",
            type: "Sales Appraisal",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
        },
        {
            id: 2,
            address: "15 Osborne Street, South Yarra",
            client: "Sarah Jessica",
            date: "Tomorrow, 10:00 AM",
            status: "Pending",
            estValue: "TBD",
            type: "Rental Appraisal",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
        },
        {
            id: 3,
            address: "4/22 Chapel Street, Windsor",
            client: "Tom Wilson",
            date: "Yesterday",
            status: "Completed",
            estValue: "$850k - $920k",
            type: "Sales Appraisal",
            image: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80"
        },
        {
            id: 4,
            address: "102/55 Commercial Rd, Prahran",
            client: "Emily Davis",
            date: "Aug 12, 4:00 PM",
            status: "Completed",
            estValue: "$600k - $650k",
            type: "Sales Appraisal",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80"
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newAppraisal, setNewAppraisal] = useState({
        address: '',
        client: '',
        date: '',
        timeval: '',
        type: 'Sales Appraisal',
        estValue: '',
        status: 'Pending'
    });

    const handleAddAppraisal = () => {
        if (!newAppraisal.address || !newAppraisal.client || !newAppraisal.date || !newAppraisal.timeval) {
            alert("Please fill in Address, Client, Date and Time.");
            return;
        }

        const appraisal = {
            id: appraisals.length + 1,
            address: newAppraisal.address,
            client: newAppraisal.client,
            date: `${newAppraisal.date}, ${newAppraisal.timeval}`,
            status: newAppraisal.status,
            estValue: newAppraisal.estValue || 'TBD',
            type: newAppraisal.type,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80' // Mock image
        };

        setAppraisals([appraisal, ...appraisals]);
        setShowModal(false);
        setNewAppraisal({ address: '', client: '', date: '', timeval: '', type: 'Sales Appraisal', estValue: '', status: 'Pending' });
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this appraisal?")) {
            setAppraisals(appraisals.filter(a => a.id !== id));
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', fontFamily: 'sans-serif' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
                        Appraisals
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b' }}>
                        Manage valuation requests and simple presentations.
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
                    <Plus size={18} />
                    New Appraisal
                </button>
            </div>

            {/* Stats / Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                    <div>
                        <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: '600' }}>Scheduled</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1e293b' }}>2</div>
                    </div>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Calendar size={24} color="#0284c7" />
                    </div>
                </div>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                    <div>
                        <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: '600' }}>Completed (Mth)</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1e293b' }}>12</div>
                    </div>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ClipboardCheck size={24} color="#16a34a" />
                    </div>
                </div>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                    <div>
                        <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: '600' }}>Pipeline Value</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1e293b' }}>$15.2M</div>
                    </div>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MapPin size={24} color="#ea580c" />
                    </div>
                </div>
            </div>

            {/* List */}
            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {appraisals.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            background: 'white',
                            borderRadius: '1.25rem',
                            border: '1px solid #e2e8f0',
                            padding: '1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: '0 2px 4px -1px rgba(0,0,0,0.05)',
                            gap: '1.5rem'
                        }}
                    >
                        {/* Left: Image & Info */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                            <div style={{
                                width: '6rem',
                                height: '4.5rem',
                                borderRadius: '0.75rem',
                                overflow: 'hidden',
                                flexShrink: 0
                            }}>
                                <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.25rem' }}>{item.address}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
                                    <span>{item.type}</span>
                                    <span style={{ width: '4px', height: '4px', background: '#cbd5e1', borderRadius: '50%' }} />
                                    <span>{item.client}</span>
                                </div>
                            </div>
                        </div>

                        {/* Middle: Details */}
                        <div style={{ display: 'flex', gap: '2.5rem', paddingRight: '2rem' }}>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem', fontWeight: '600' }}>DATE & TIME</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: '#475569' }}>
                                    <Clock size={16} /> {item.date}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem', fontWeight: '600' }}>EST. VALUE</div>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#5ec5cf' }}>
                                    {item.estValue}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem', fontWeight: '600' }}>STATUS</div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.75rem',
                                    background: item.status === 'Completed' ? '#dcfce7' : item.status === 'Pending' ? '#fff7ed' : '#e0f2fe',
                                    color: item.status === 'Completed' ? '#15803d' : item.status === 'Pending' ? '#c2410c' : '#0369a1',
                                    borderRadius: '99px',
                                    fontWeight: '700',
                                    display: 'inline-block'
                                }}>
                                    {item.status}
                                </span>
                            </div>
                        </div>

                        {/* Right: Actions */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{ padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', cursor: 'pointer' }}>
                                <Eye size={18} />
                            </button>
                            <button style={{ padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: 'white', color: '#3b82f6', cursor: 'pointer' }}>
                                <Edit2 size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(item.id)}
                                style={{ padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid #fee2e2', background: '#fef2f2', color: '#ef4444', cursor: 'pointer' }}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>

                    </motion.div>
                ))}
            </div>

            {/* New Appraisal Modal */}
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
                                    New Appraisal
                                </h2>
                                <button onClick={() => setShowModal(false)} style={{ padding: '0.5rem', borderRadius: '0.5rem', border: 'none', background: '#f1f5f9', cursor: 'pointer' }}>
                                    <X size={20} color="#64748b" />
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {/* Address */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Property Address *</label>
                                    <input type="text" value={newAppraisal.address} onChange={(e) => setNewAppraisal({ ...newAppraisal, address: e.target.value })} placeholder="e.g., 10 Downing St, Brighton" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box' }} />
                                </div>

                                {/* Date & Time */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Date *</label>
                                        <input type="date" value={newAppraisal.date} onChange={(e) => setNewAppraisal({ ...newAppraisal, date: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Time *</label>
                                        <input type="time" value={newAppraisal.timeval} onChange={(e) => setNewAppraisal({ ...newAppraisal, timeval: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                </div>

                                {/* Client */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Client Name *</label>
                                    <input type="text" value={newAppraisal.client} onChange={(e) => setNewAppraisal({ ...newAppraisal, client: e.target.value })} placeholder="e.g., Mr. Smith" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                </div>

                                {/* Value & Type */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Est. Value Range</label>
                                        <input type="text" value={newAppraisal.estValue} onChange={(e) => setNewAppraisal({ ...newAppraisal, estValue: e.target.value })} placeholder="e.g., $1.5M - $1.6M" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Type</label>
                                        <select value={newAppraisal.type} onChange={(e) => setNewAppraisal({ ...newAppraisal, type: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                                            <option value="Sales Appraisal">Sales</option>
                                            <option value="Rental Appraisal">Rental</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', fontWeight: '700', cursor: 'pointer' }}>Cancel</button>
                                    <button onClick={handleAddAppraisal} style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: 'none', background: '#5ec5cf', color: 'white', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(94, 197, 207, 0.4)' }}>Create</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
