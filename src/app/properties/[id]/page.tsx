"use client";

import { useParams, useRouter } from "next/navigation";
import { mockProperties } from "@/lib/mockData";
import { ArrowLeft, Bed, Bath, Car, MapPin, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyDetailPage() {
    const params = useParams();
    const router = useRouter();
    const property = mockProperties.find(p => p.id === params.id);

    if (!property) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>Property Not Found</h1>
                <button
                    onClick={() => router.push('/')}
                    style={{
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        color: 'white',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '600'
                    }}
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: '#ffffff' }}>
            {/* Header */}
            <div style={{ background: 'linear-gradient(180deg, #f0fdff 0%, #ffffff 100%)', padding: '2rem' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <button
                        onClick={() => router.back()}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.25rem',
                            background: 'white',
                            border: '2px solid #e2e8f0',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            fontWeight: '600',
                            color: '#475569',
                            marginBottom: '1.5rem'
                        }}
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
                                {property.address}
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '1.125rem' }}>
                                <MapPin size={20} />
                                {property.suburb}, {property.state}
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6' }}>
                                ${(property.price / 1000000).toFixed(2)}M
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <TrendingUp size={16} />
                                +8% vs last year
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* Left Column */}
                <div>
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            marginBottom: '2rem',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <img
                            src={property.image}
                            alt={property.address}
                            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                        />
                    </motion.div>

                    {/* Property Details */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '2px solid rgba(226, 232, 240, 0.5)',
                        borderRadius: '1rem',
                        padding: '2rem',
                        marginBottom: '2rem'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a' }}>
                            Property Features
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    padding: '0.75rem',
                                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                    borderRadius: '0.75rem',
                                    color: 'white'
                                }}>
                                    <Bed size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Bedrooms</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{property.beds}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    padding: '0.75rem',
                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                    borderRadius: '0.75rem',
                                    color: 'white'
                                }}>
                                    <Bath size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Bathrooms</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{property.baths}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    padding: '0.75rem',
                                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                                    borderRadius: '0.75rem',
                                    color: 'white'
                                }}>
                                    <Car size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Parking</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{property.cars}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div style={{
                        background: 'white',
                        border: '2px solid rgba(226, 232, 240, 0.5)',
                        borderRadius: '1rem',
                        padding: '2rem',
                        marginBottom: '2rem'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>
                            About This Property
                        </h2>
                        <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '1rem' }}>
                            This stunning {property.type.toLowerCase()} in {property.suburb} offers exceptional living in one of Melbourne's most sought-after locations.
                            Featuring {property.beds} bedrooms, {property.baths} bathrooms, and parking for {property.cars} vehicles, this property combines
                            modern luxury with practical design. Located in the heart of {property.suburb}, you'll enjoy easy access to premium dining,
                            shopping, and entertainment options.
                        </p>
                    </div>

                    {/* Location Map Placeholder */}
                    <div style={{
                        background: '#f1f5f9',
                        border: '2px solid rgba(226, 232, 240, 0.5)',
                        borderRadius: '1rem',
                        padding: '3rem',
                        textAlign: 'center'
                    }}>
                        <MapPin size={48} style={{ color: '#94a3b8', margin: '0 auto 1rem auto' }} />
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#475569', marginBottom: '0.5rem' }}>
                            Location Map
                        </h3>
                        <p style={{ color: '#94a3b8' }}>Interactive map would be displayed here</p>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
                        border: '2px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '1rem',
                        padding: '2rem',
                        position: 'sticky',
                        top: '2rem'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a' }}>
                            Contact Agent
                        </h2>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Smith"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid rgba(226, 232, 240, 0.8)',
                                        background: 'white',
                                        fontSize: '0.875rem',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid rgba(226, 232, 240, 0.8)',
                                        background: 'white',
                                        fontSize: '0.875rem',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="0412 345 678"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid rgba(226, 232, 240, 0.8)',
                                        background: 'white',
                                        fontSize: '0.875rem',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                    Message
                                </label>
                                <textarea
                                    placeholder="I'm interested in this property..."
                                    rows={4}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid rgba(226, 232, 240, 0.8)',
                                        background: 'white',
                                        fontSize: '0.875rem',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                    color: 'white',
                                    borderRadius: '0.75rem',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                                }}
                            >
                                Request Information
                            </button>

                            <button
                                type="button"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'white',
                                    color: '#3b82f6',
                                    borderRadius: '0.75rem',
                                    border: '2px solid #3b82f6',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Heart size={20} />
                                Save Property
                            </button>
                        </form>

                        <div style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Listed by</div>
                            <div style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '1.125rem' }}>Collings Property</div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Premium Real Estate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
