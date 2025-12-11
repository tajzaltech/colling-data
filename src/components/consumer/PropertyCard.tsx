"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Car, MapPin } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";
import { useRouter } from "next/navigation";

interface PropertyCardProps {
    id: string;
    address: string;
    suburb: string;
    state: string;
    price: number;
    beds: number;
    baths: number;
    cars: number;
    image: string;
    status: 'active' | 'sold' | 'pending';
    type: string;
}

export function PropertyCard({ id, address, suburb, state, price, beds, baths, cars, image, status, type }: PropertyCardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/properties/${id}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            onClick={handleClick}
            style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative'
            }}
        >
            {/* Image */}
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                    src={image}
                    alt={address}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <StatusBadge status={status} />
                </div>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(8px)',
                        color: 'white',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                    }}>
                        {type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.25rem' }}>
                {/* Price */}
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem'
                }}>
                    ${(price / 1000000).toFixed(2)}M
                </div>

                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <MapPin size={16} style={{ color: '#64748b' }} />
                    <div>
                        <div style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.875rem' }}>{address}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{suburb}, {state}</div>
                    </div>
                </div>

                {/* Features */}
                <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(226, 232, 240, 0.5)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: '#475569' }}>
                        <Bed size={16} />
                        <span style={{ fontWeight: '600' }}>{beds}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: '#475569' }}>
                        <Bath size={16} />
                        <span style={{ fontWeight: '600' }}>{baths}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: '#475569' }}>
                        <Car size={16} />
                        <span style={{ fontWeight: '600' }}>{cars}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
