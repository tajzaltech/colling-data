"use client";

import { useState } from "react";
import { ArrowLeft, MapPin, Bed, Bath, Car, Share2, Heart, CheckCircle, Home, FileText, Shield } from "lucide-react";
import Link from "next/link";
import { mockProperties } from "@/lib/mockData";
import { useParams } from "next/navigation";

export default function PropertyDetailPage() {
    const params = useParams();
    const idValue = params?.id;
    const propertyId = Array.isArray(idValue) ? idValue[0] : idValue;
    const property = mockProperties.find(p => p.id === decodeURIComponent(propertyId || ''));

    if (!property) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5ec5cf' }}>Property Not Found</h1>
                    <Link href="/" style={{ color: '#3b82f6', textDecoration: 'underline', marginTop: '1rem', display: 'block' }}>Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc', paddingBottom: '4rem' }}>
            {/* Navigation */}
            <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 50 }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#64748b', fontWeight: '600' }}>
                        <ArrowLeft size={20} />
                        Back to Search
                    </Link>
                    <div style={{ fontWeight: 'bold', color: '#5ec5cf' }}>Collings Property Intelligence</div>
                </div>
            </nav>

            <main style={{ maxWidth: '1400px', margin: '2rem auto', padding: '0 2rem' }}>
                {/* Source Banners - Demonstration of Architecture */}
                {property.source === 'RP Data' ? (
                    <div style={{
                        background: 'linear-gradient(90deg, #ecfeff 0%, #cffafe 100%)',
                        border: '1px solid #a5f3fc',
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: '#0891b2'
                    }}>
                        <Shield size={24} />
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '0.925rem' }}>RP Data Licensed Record ({property.id})</div>
                            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>This record is sourced solely from CoreLogic/RP Data archival systems. Compliance restrictions apply.</div>
                        </div>
                    </div>
                ) : (
                    <div style={{
                        background: 'linear-gradient(90deg, #fffbeb 0%, #fef3c7 100%)',
                        border: '1px solid #fcd34d',
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: '#d97706'
                    }}>
                        <FileText size={24} />
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '0.925rem' }}>REIP Feed Listing ({property.id})</div>
                            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Live listing ingestion from Real Estate Industry Partners feed. Standard agency terms apply.</div>
                        </div>
                    </div>
                )}

                {/* Hero Image Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', height: '500px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2rem' }}>
                    <div style={{ background: '#cbd5e1' }}>
                        <img src={property.image} alt={property.address} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ background: '#cbd5e1' }}>
                            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800" alt="Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ background: '#cbd5e1' }}>
                            <img src="https://images.unsplash.com/photo-1616137466211-f939a420be63?w=800" alt="Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>

                    {/* Main Info */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div>
                                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#5ec5cf', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                                    {property.address}
                                </h1>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '1.125rem' }}>
                                    <MapPin size={20} />
                                    {property.suburb}, {property.state}
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>
                                    ${(property.price / 1000000).toFixed(2)}m
                                </div>
                                <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '600' }}>
                                    {property.status === 'active' ? 'Guide Price' : 'Sold Price'}
                                </div>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '3rem',
                            padding: '2rem 0',
                            borderTop: '1px solid #e2e8f0',
                            borderBottom: '1px solid #e2e8f0',
                            marginBottom: '2rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem', fontWeight: '600', color: '#334155' }}>
                                <Bed size={24} style={{ color: '#94a3b8' }} /> {property.beds} Bedrooms
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem', fontWeight: '600', color: '#334155' }}>
                                <Bath size={24} style={{ color: '#94a3b8' }} /> {property.baths} Bathrooms
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem', fontWeight: '600', color: '#334155' }}>
                                <Car size={24} style={{ color: '#94a3b8' }} /> {property.cars} Parking
                            </div>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '1rem' }}>Property Description</h3>
                            <p style={{ lineHeight: 1.8, color: '#475569', fontSize: '1.125rem' }}>
                                A masterpiece of modern design in the heart of {property.suburb}. This exceptional residence sets a new benchmark for luxury living, offering a seamless blend of sophisticated style and practical functionality. With its commanding street presence and meticulously curated interiors, every element has been considered to create a home of enduring quality.
                            </p>
                            <br />
                            <p style={{ lineHeight: 1.8, color: '#475569', fontSize: '1.125rem' }}>
                                Additional features include state-of-the-art security, expansive living areas, and premium finishes throughout. Whether you're entertaining in the designer kitchen or relaxing in the private courtyard, this property offers a lifestyle of unparalleled comfort and convenience.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Agent Card */}
                    <div>
                        <div style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                            position: 'sticky',
                            top: '120px'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '1.5rem' }}>Interested in this property?</h3>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🤵</span>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold', color: '#5ec5cf', fontSize: '1.125rem' }}>James Collings</div>
                                    <div style={{ color: '#64748b' }}>Senior Sales Executive</div>
                                </div>
                            </div>

                            <button style={{
                                width: '100%',
                                padding: '1rem',
                                background: '#5ec5cf',
                                color: 'white',
                                borderRadius: '0.75rem',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                marginBottom: '1rem',
                                cursor: 'pointer',
                                border: 'none'
                            }}>
                                Enquire Now
                            </button>
                            <button style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'white',
                                color: '#5ec5cf',
                                borderRadius: '0.75rem',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                border: '2px solid #e2e8f0',
                                cursor: 'pointer'
                            }}>
                                Request Inspection
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
