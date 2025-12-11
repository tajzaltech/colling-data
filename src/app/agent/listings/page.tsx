"use client";

import { Eye, Edit2, Trash2, Plus, X, Bed, Bath, Car, Home, Filter, Search, Mail, TrendingUp } from "lucide-react";
import { mockAgentListings } from "@/lib/mockData";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AgentListingsPage() {
    const [filter, setFilter] = useState("all");
    const [listings, setListings] = useState(mockAgentListings);
    const [showModal, setShowModal] = useState(false);

    // Detailed state for new listing
    const [newListing, setNewListing] = useState({
        address: '',
        price: '',
        resType: 'House',
        beds: '',
        baths: '',
        cars: '',
        image: '',
        views: 0,
        enquiries: 0,
        status: 'active' as const
    });

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('agentListings');
        if (saved) {
            setListings(JSON.parse(saved));
        }
    }, []);

    const filteredListings = filter === "all"
        ? listings
        : listings.filter(l => l.status === filter);

    const handleAddListing = () => {
        if (!newListing.address || !newListing.price) {
            alert('Please fill in at least Address and Price');
            return;
        }

        const listing = {
            id: String(listings.length + 1),
            address: newListing.address,
            price: parseInt(newListing.price),
            type: newListing.resType,
            beds: parseInt(newListing.beds) || 0,
            baths: parseInt(newListing.baths) || 0,
            cars: parseInt(newListing.cars) || 0,
            image: newListing.image || 'https://images.unsplash.com/photo-1600596542815-2495db9b63f6?auto=format&fit=crop&q=80',
            views: 0,
            enquiries: 0,
            status: 'active' as const
        };

        const updatedListings = [...listings, listing];
        setListings(updatedListings);
        localStorage.setItem('agentListings', JSON.stringify(updatedListings));

        setShowModal(false);
        setNewListing({
            address: '', price: '', resType: 'House',
            beds: '', baths: '', cars: '', image: '',
            views: 0, enquiries: 0, status: 'active'
        });
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this listing?')) {
            const updatedListings = listings.filter(l => l.id !== id);
            setListings(updatedListings);
            localStorage.setItem('agentListings', JSON.stringify(updatedListings));
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', fontFamily: 'sans-serif' }}>

            {/* Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
                        My Listings
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b' }}>
                        Manage your property listings and performance.
                    </p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    style={{
                        padding: '0.75rem 1.5rem',
                        background: '#5ec5cf',
                        color: 'white',
                        borderRadius: '0.75rem',
                        border: 'none',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(94, 197, 207, 0.4)'
                    }}
                >
                    <Plus size={20} />
                    Add New Listing
                </button>
            </div>

            {/* Stats Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                    { label: 'Total Views', value: listings.reduce((sum, l) => sum + l.views, 0).toLocaleString(), icon: Eye, color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
                    { label: 'Total Enquiries', value: listings.reduce((sum, l) => sum + l.enquiries, 0), icon: Mail, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
                    { label: 'Total Value', value: `$${(listings.reduce((sum, l) => sum + l.price, 0) / 1000000).toFixed(1)}M`, icon: TrendingUp, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' }
                ].map((stat, idx) => (
                    <div key={idx} style={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '1.5rem',
                        padding: '1.75rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <div style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '0.25rem', fontWeight: '600' }}>
                                    {stat.label}
                                </div>
                                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b' }}>
                                    {stat.value}
                                </div>
                            </div>
                            <div style={{
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '1rem',
                                background: stat.bg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <stat.icon size={24} style={{ color: stat.color }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search & Filters */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
                    <div style={{ position: 'relative', flex: 1, minWidth: '300px', maxWidth: '400px' }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                        <input
                            type="text"
                            placeholder="Search listings..."
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
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: 'white', padding: '0.25rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                    {['all', 'active', 'sold'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: '0.5rem 1.25rem',
                                borderRadius: '0.5rem',
                                border: 'none',
                                background: filter === f ? '#e0f2fe' : 'transparent',
                                color: filter === f ? '#0284c7' : '#64748b',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                textTransform: 'capitalize',
                                transition: 'all 0.2s'
                            }}
                        >
                            {f} {f !== 'all' && `(${listings.filter(l => l.status === f).length})`}
                            {f === 'all' && `(${listings.length})`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Listings Table */}
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
                            {['Property', 'Type', 'Details', 'Price', 'Stats', 'Status', 'Actions'].map(header => (
                                <th key={header} style={{
                                    padding: '1.25rem 1.5rem',
                                    textAlign: 'left',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
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
                        {filteredListings.map((listing: any) => (
                            <tr key={listing.id} style={{ borderBottom: '1px solid #f1f5f9' }} className="hover:bg-slate-50">
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        {/* Thumbnail */}
                                        <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', overflow: 'hidden', background: '#f1f5f9', flexShrink: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                            {listing.image && (
                                                <img src={listing.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            )}
                                            {!listing.image && (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Home size={20} style={{ color: '#cbd5e1' }} />
                                                </div>
                                            )}
                                        </div>
                                        <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '0.95rem' }}>
                                            {listing.address}
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>
                                        {listing.type || 'House'}
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Bed size={16} color="#94a3b8" /> {listing.beds || 0}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Bath size={16} color="#94a3b8" /> {listing.baths || 0}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Car size={16} color="#94a3b8" /> {listing.cars || 0}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem', fontWeight: '700', color: '#5ec5cf', fontSize: '1rem' }}>
                                    ${(listing.price / 1000000).toFixed(2)}M
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                            <Eye size={14} color="#3b82f6" /> {listing.views.toLocaleString()}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                            <Mail size={14} color="#f59e0b" /> {listing.enquiries}
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        background: listing.status === 'active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                                        color: listing.status === 'active' ? '#10b981' : '#f59e0b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {listing.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button
                                            title="View Details"
                                            style={{
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #e2e8f0',
                                                background: 'white',
                                                cursor: 'pointer',
                                                color: '#64748b'
                                            }}>
                                            <Eye size={16} />
                                        </button>
                                        <button
                                            title="Edit Listing"
                                            style={{
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #e2e8f0',
                                                background: 'white',
                                                cursor: 'pointer',
                                                color: '#3b82f6'
                                            }}>
                                            <Edit2 size={16} />
                                        </button>
                                        <button
                                            title="Delete Listing"
                                            onClick={() => handleDelete(listing.id)}
                                            style={{
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #fee2e2',
                                                background: '#fef2f2',
                                                cursor: 'pointer',
                                                color: '#ef4444'
                                            }}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredListings.length === 0 && (
                    <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                        <div style={{ background: '#f1f5f9', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                            <Home size={32} color="#cbd5e1" />
                        </div>
                        <p style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>
                            No listings found
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>
                            {filter === 'all' ? 'Add your first listing to get started' : `No ${filter} listings at the moment`}
                        </p>
                    </div>
                )}
            </div>

            {/* Add Listing Modal */}
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
                        style={{
                            background: 'white',
                            borderRadius: '1.5rem',
                            padding: '2.5rem',
                            maxWidth: '550px',
                            width: '90%',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a' }}>
                                Add New Listing
                            </h2>
                            <button onClick={() => setShowModal(false)} style={{ padding: '0.5rem', borderRadius: '0.5rem', border: 'none', background: '#f1f5f9', cursor: 'pointer' }}>
                                <X size={20} color="#64748b" />
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {/* Address */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Property Address *</label>
                                <input type="text" value={newListing.address} onChange={(e) => setNewListing({ ...newListing, address: e.target.value })} placeholder="e.g., 123 Collins Street, Melbourne" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {/* Price */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Price ($) *</label>
                                    <input type="number" value={newListing.price} onChange={(e) => setNewListing({ ...newListing, price: e.target.value })} placeholder="e.g., 2500000" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                                {/* Type */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Type</label>
                                    <select value={newListing.resType} onChange={(e) => setNewListing({ ...newListing, resType: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                                        <option value="House">House</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Villa">Villa</option>
                                        <option value="Townhouse">Townhouse</option>
                                    </select>
                                </div>
                            </div>

                            {/* Details: Beds, Baths, Cars */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Beds</label>
                                    <input type="number" value={newListing.beds} onChange={(e) => setNewListing({ ...newListing, beds: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Baths</label>
                                    <input type="number" value={newListing.baths} onChange={(e) => setNewListing({ ...newListing, baths: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Cars</label>
                                    <input type="number" value={newListing.cars} onChange={(e) => setNewListing({ ...newListing, cars: e.target.value })} style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                            </div>

                            {/* Image URL */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#475569', marginBottom: '0.5rem' }}>Image URL</label>
                                <input type="text" value={newListing.image} onChange={(e) => setNewListing({ ...newListing, image: e.target.value })} placeholder="https://" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', fontWeight: '700', cursor: 'pointer' }}>Cancel</button>
                                <button onClick={handleAddListing} style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: 'none', background: '#5ec5cf', color: 'white', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(94, 197, 207, 0.4)' }}>Add Listing</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
