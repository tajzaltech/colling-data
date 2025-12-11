"use client";

import { User, MapPin, DollarSign, TrendingUp, Phone, Mail, Edit2, Trash2, Eye, Plus, Filter, Search, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BuyersPage() {
    // Mock Buyers Data
    const [buyers, setBuyers] = useState([
        {
            id: 1,
            name: "James & Sarah Peterson",
            budget: "$1.2M - $1.5M",
            suburbs: ["Richmond", "South Yarra"],
            status: "Hot",
            engagement: 85,
            phone: "0400 111 222",
            email: "james.p@gmail.com",
            type: "FHB"
        },
        {
            id: 2,
            name: "Michael Chang",
            budget: "$800k - $950k",
            suburbs: ["Docklands", "CBD"],
            status: "Warm",
            engagement: 60,
            phone: "0411 222 333",
            email: "m.chang@outlook.com",
            type: "Investor"
        },
        {
            id: 3,
            name: "Emma Wilson",
            budget: "$2.5M+",
            suburbs: ["Toorak", "Malvern"],
            status: "Hot",
            engagement: 92,
            phone: "0422 333 444",
            email: "emma.w@yahoo.com",
            type: "Upsizing"
        },
        {
            id: 4,
            name: "David & Julie Smith",
            budget: "$1.1M Max",
            suburbs: ["Collingwood", "Fitzroy"],
            status: "Cold",
            engagement: 30,
            phone: "0433 444 555",
            email: "d.smith@gmail.com",
            type: "Downsizing"
        },
        {
            id: 5,
            name: "Robert Fox",
            budget: "$3M - $4M",
            suburbs: ["Brighton", "Elwood"],
            status: "Warm",
            engagement: 65,
            phone: "0444 555 666",
            email: "r.fox@bigpond.com",
            type: "Investor"
        },
        {
            id: 6,
            name: "Lisa Wong",
            budget: "$650k - $750k",
            suburbs: ["Southbank"],
            status: "New",
            engagement: 45,
            phone: "0455 666 777",
            email: "lisa.w@hotmail.com",
            type: "FHB"
        }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newBuyer, setNewBuyer] = useState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        status: 'New',
        type: 'FHB',
        suburbs: ''
    });

    const handleAddBuyer = () => {
        if (!newBuyer.name || !newBuyer.budget) {
            alert("Please fill in Name and Budget");
            return;
        }

        const buyer = {
            id: buyers.length + 1,
            ...newBuyer,
            suburbs: newBuyer.suburbs.split(',').map(s => s.trim()).filter(s => s),
            engagement: 50 // Default
        };

        setBuyers([buyer, ...buyers]);
        setShowModal(false);
        setNewBuyer({ name: '', email: '', phone: '', budget: '', status: 'New', type: 'FHB', suburbs: '' });
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this buyer profile?")) {
            setBuyers(buyers.filter(b => b.id !== id));
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', fontFamily: 'sans-serif' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
                        Buyer Profiles
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b' }}>
                        Track preferences and match buyers to properties.
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
                    Add New Buyer
                </button>
            </div>

            {/* Search & Filter */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '300px', maxWidth: '400px' }}>
                    <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                        type="text"
                        placeholder="Search buyers by name, budget or location..."
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
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.6rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <Filter size={16} /> Budget
                    </button>
                    <button style={{ padding: '0.6rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <Filter size={16} /> Status
                    </button>
                </div>
            </div>

            {/* Buyer Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
                {buyers.map((buyer, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={buyer.id}
                        style={{
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '1.5rem',
                            padding: '1.75rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Status Strip */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: buyer.status === 'Hot' ? '#ef4444' : buyer.status === 'Warm' ? '#f59e0b' : '#3b82f6'
                        }} />

                        {/* Card Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    borderRadius: '1rem',
                                    background: '#f1f5f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    color: '#64748b'
                                }}>
                                    {buyer.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.25rem' }}>{buyer.name}</h3>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        padding: '0.15rem 0.5rem',
                                        background: '#f1f5f9',
                                        borderRadius: '4px',
                                        color: '#64748b',
                                        fontWeight: '600'
                                    }}>
                                        {buyer.type}
                                    </span>
                                </div>
                            </div>
                            <div style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '99px',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                background: buyer.status === 'Hot' ? 'rgba(239, 68, 68, 0.1)' : buyer.status === 'Warm' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                color: buyer.status === 'Hot' ? '#ef4444' : buyer.status === 'Warm' ? '#f59e0b' : '#3b82f6'
                            }}>
                                {buyer.status}
                            </div>
                        </div>

                        {/* Key Metrics */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '1rem' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                                    <DollarSign size={14} /> Budget
                                </div>
                                <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '0.95rem' }}>{buyer.budget}</div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                                    <TrendingUp size={14} /> Engagement
                                </div>
                                <div style={{ fontWeight: '700', color: buyer.engagement > 70 ? '#10b981' : '#64748b', fontSize: '0.95rem' }}>{buyer.engagement}%</div>
                            </div>
                        </div>

                        {/* Preferences */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: '600' }}>
                                <MapPin size={14} /> Looking in
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {buyer.suburbs.map(sub => (
                                    <span key={sub} style={{ fontSize: '0.75rem', border: '1px solid #e2e8f0', padding: '0.15rem 0.5rem', borderRadius: '6px', color: '#475569' }}>
                                        {sub}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions Footer */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button title="Call" style={{ padding: '0.5rem', borderRadius: '50%', background: '#f0f9ff', color: '#0ea5e9', border: 'none', cursor: 'pointer' }}><Phone size={16} /></button>
                                <button title="Email" style={{ padding: '0.5rem', borderRadius: '50%', background: '#f0f9ff', color: '#0ea5e9', border: 'none', cursor: 'pointer' }}><Mail size={16} /></button>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button
                                    title="View Profile"
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid #e2e8f0',
                                        color: '#475569',
                                        background: 'white',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        cursor: 'pointer'
                                    }}>
                                    Profile
                                </button>
                                <button
                                    title="Edit"
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
                                    title="Delete"
                                    onClick={() => handleDelete(buyer.id)}
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
                        </div>

                    </motion.div>
                ))}
            </div>

            {/* Add Buyer Modal */}
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
                                    Add New Buyer
                                </h2>
                                <button onClick={() => setShowModal(false)} style={{ padding: '0.5rem', borderRadius: '0.5rem', border: 'none', background: '#f1f5f9', cursor: 'pointer' }}>
                                    <X size={20} color="#64748b" />
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {/* Name */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Buyer Name *</label>
                                    <input type="text" value={newBuyer.name} onChange={(e) => setNewBuyer({ ...newBuyer, name: e.target.value })} placeholder="e.g., Sarah & John" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box' }} />
                                </div>

                                {/* Budget & Type */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Budget Range *</label>
                                        <input type="text" value={newBuyer.budget} onChange={(e) => setNewBuyer({ ...newBuyer, budget: e.target.value })} placeholder="e.g., $1.2M - $1.5M" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Type</label>
                                        <select value={newBuyer.type} onChange={(e) => setNewBuyer({ ...newBuyer, type: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                                            <option value="FHB">First Home Buyer</option>
                                            <option value="Investor">Investor</option>
                                            <option value="Upsizing">Upsizing</option>
                                            <option value="Downsizing">Downsizing</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Email</label>
                                        <input type="email" value={newBuyer.email} onChange={(e) => setNewBuyer({ ...newBuyer, email: e.target.value })} placeholder="email@example.com" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Phone</label>
                                        <input type="tel" value={newBuyer.phone} onChange={(e) => setNewBuyer({ ...newBuyer, phone: e.target.value })} placeholder="Mobile Number" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                </div>

                                {/* Suburbs */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Suburbs (comma separated)</label>
                                    <input type="text" value={newBuyer.suburbs} onChange={(e) => setNewBuyer({ ...newBuyer, suburbs: e.target.value })} placeholder="e.g., Richmond, South Yarra" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', fontWeight: '700', cursor: 'pointer' }}>Cancel</button>
                                    <button onClick={handleAddBuyer} style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: 'none', background: '#5ec5cf', color: 'white', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(94, 197, 207, 0.4)' }}>Add Buyer</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
