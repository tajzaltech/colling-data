"use client";

import { useState } from "react";
import { Search, MapPin, Filter, Bed, Bath, Car, ArrowRight, Home, Building2, Briefcase, Trees, SearchCheck, TrendingUp, Building, Heart } from "lucide-react";
import Link from "next/link";
import { mockProperties, mockMarketStats } from "@/lib/mockData";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsumerHome() {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  /* Simple state for demonstration - in real app would use strict filters */
  const filteredProperties = mockProperties.filter(p => {
    const matchesType = filterType === 'All' || p.type === filterType;
    const matchesSearch = p.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.suburb.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'sans-serif' }}>

      {/* Navbar Placeholder for "Loving" feel */}
      <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#5ec5cf', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <div style={{ width: '32px', height: '32px', background: '#5ec5cf', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Home size={18} fill="currentColor" />
          </div>
          Collings
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.925rem', color: '#64748b', fontWeight: '500' }}>
          <button onClick={() => setFilterType('All')} style={{ background: 'none', border: 'none', color: '#0f172a', fontWeight: '600', cursor: 'pointer', fontSize: 'inherit' }}>Buy</button>
          <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 'inherit' }}>Rent</button>
          <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 'inherit' }}>Sold</button>
          <Link href="/agent" style={{ textDecoration: 'none', color: '#64748b', cursor: 'pointer' }}>Agents</Link>
        </div>
        <Link href="/signin">
          <button style={{ padding: '0.6rem 1.25rem', background: '#5ec5cf', color: 'white', borderRadius: '99px', border: 'none', fontWeight: 'bold', fontSize: '0.875rem', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(94, 197, 207, 0.3)' }}>
            Sign In
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '6rem 2rem',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Soft Gradients */}
        <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translate(-50%, 0)', width: '80%', height: '800px', background: 'radial-gradient(circle, rgba(94, 197, 207, 0.08) 0%, rgba(255,255,255,0) 70%)', pointerEvents: 'none' }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.25rem',
            background: 'white',
            borderRadius: '99px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            marginBottom: '2rem',
            border: '1px solid #f1f5f9',
            color: '#5ec5cf',
            fontWeight: '600',
            fontSize: '0.875rem'
          }}>
            <span style={{ display: 'block', width: '8px', height: '8px', background: '#5ec5cf', borderRadius: '50%' }}></span>
            The #1 Property Data Platform
          </div>

          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: '800',
            color: '#1e293b',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            Discover a place <br />
            <span style={{ color: '#5ec5cf' }}>you'll love to live.</span>
          </h1>

          <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '3.5rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
            Explore Melbourne's most comprehensive property listings, powered by deep data intelligence and curated for you.
          </p>

          {/* Search Bar - "Most Loving" Design */}
          <div style={{
            background: 'white',
            padding: '0.75rem',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '700px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <Search size={24} style={{ marginLeft: '1rem', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search suburb, postcode, or street address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                padding: '1rem',
                fontSize: '1.125rem',
                color: '#1e293b',
                background: 'transparent'
              }}
            />
            <button style={{
              padding: '1rem 2.5rem',
              background: '#5ec5cf',
              color: 'white',
              border: 'none',
              borderRadius: '1rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.1s',
              boxShadow: '0 4px 6px -1px rgba(94, 197, 207, 0.4)'
            }}>
              Search
            </button>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.6 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>50k+</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Properties</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>120+</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Suburbs</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>24/7</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Updates</div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* Filter Section */}
      <section style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem 4rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {['All', 'House', 'Apartment', 'Commercial', 'Land'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '99px',
                border: filterType === type ? 'none' : '1px solid #e2e8f0',
                background: filterType === type ? '#5ec5cf' : 'white',
                color: filterType === type ? 'white' : '#64748b',
                fontWeight: '600',
                fontSize: '0.925rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: filterType === type ? '0 4px 12px rgba(94, 197, 207, 0.3)' : '0 1px 2px rgba(0,0,0,0.02)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {type === 'All' && <SearchCheck size={16} />}
              {type === 'House' && <Home size={16} />}
              {type === 'Apartment' && <Building2 size={16} />}
              {type === 'Commercial' && <Briefcase size={16} />}
              {type === 'Land' && <Trees size={16} />}
              {type}
            </button>
          ))}
        </div>

        {/* Results Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem' }}>Features Listings</h2>
            <div style={{ color: '#64748b', fontSize: '1rem' }}>Hand-picked properties for you in Melbourne</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#5ec5cf', cursor: 'pointer' }}>
            View All <ArrowRight size={16} />
          </div>
        </div>

        {/* Property Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/property/${encodeURIComponent(property.id)}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <div style={{
                    height: '100%',
                    background: 'white',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    position: 'relative'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.02)';
                    }}
                  >
                    {/* Image */}
                    <div style={{ height: '260px', position: 'relative', overflow: 'hidden' }}>
                      <img src={property.image} alt={property.address} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                      {/* Like Button */}
                      <button style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ef4444'
                      }}>
                        <Heart size={20} />
                      </button>

                      {/* Badges */}
                      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                        <span style={{
                          background: 'rgba(255,255,255,0.95)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: '#1e293b'
                        }}>
                          {property.type}
                        </span>
                        {property.status === 'active' && (
                          <span style={{
                            background: '#10b981',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '0.5rem',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            color: 'white'
                          }}>
                            Active
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#5ec5cf' }}>
                          ${(property.price / 1000000).toFixed(2)}m
                        </div>
                      </div>

                      <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                        {property.address}
                      </h3>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                        <MapPin size={14} /> {property.suburb}, {property.state}
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid #f1f5f9',
                        color: '#475569',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Bed size={18} /> {property.beds}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Bath size={18} /> {property.baths}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Car size={18} /> {property.cars}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}
