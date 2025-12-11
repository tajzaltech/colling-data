"use client";

import { Search, MapPin, Home, Bed, Bath, DollarSign, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [searchData, setSearchData] = useState({
        location: '',
        propertyType: '',
        minBeds: '',
        maxBeds: '',
        minBaths: '',
        maxBaths: '',
        minPrice: '',
        maxPrice: '',
        minCars: '',
        features: [] as string[]
    });

    const handleSearch = () => {
        console.log('Search criteria:', searchData);
        // Here you would implement the actual search logic
        alert('Search functionality - Client requirements captured:\n' + JSON.stringify(searchData, null, 2));
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Main Search Bar */}
            <div style={{
                background: 'white',
                border: '3px solid #66cbd5',
                boxShadow: '0 16px 48px rgba(102, 203, 213, 0.2)',
                borderRadius: '1.5rem',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
            }}>
                <div style={{ paddingLeft: '0.75rem' }}>
                    <Search size={24} style={{ color: '#66cbd5' }} />
                </div>

                <input
                    type="text"
                    placeholder="Search by suburb, address, or postcode..."
                    value={searchData.location}
                    onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                    style={{
                        flex: 1,
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        color: '#0f172a',
                        padding: '0.75rem 0'
                    }}
                />

                <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    style={{
                        background: showAdvanced ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(102, 203, 213, 0.1)',
                        color: showAdvanced ? 'white' : '#66cbd5',
                        border: 'none',
                        borderRadius: '1rem',
                        padding: '1rem 1.5rem',
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s'
                    }}
                >
                    <SlidersHorizontal size={18} />
                    Filters
                </button>

                <button
                    onClick={handleSearch}
                    style={{
                        background: 'linear-gradient(135deg, #66cbd5 0%, #4db8c4 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '1rem',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 8px 24px rgba(102, 203, 213, 0.4)',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(102, 203, 213, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 203, 213, 0.4)';
                    }}
                >
                    <MapPin size={20} />
                    Search
                </button>
            </div>

            {/* Advanced Filters */}
            {showAdvanced && (
                <div style={{
                    background: 'white',
                    border: '2px solid #e2e8f0',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    animation: 'slideDown 0.3s ease-out'
                }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
                        Advanced Search Filters
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {/* Property Type */}
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                <Home size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Property Type
                            </label>
                            <select
                                value={searchData.propertyType}
                                onChange={(e) => setSearchData({ ...searchData, propertyType: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '2px solid #e2e8f0',
                                    fontSize: '0.875rem',
                                    outline: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <option value="">All Types</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="villa">Villa</option>
                                <option value="land">Land</option>
                            </select>
                        </div>

                        {/* Bedrooms */}
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                <Bed size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Bedrooms
                            </label>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <select
                                    value={searchData.minBeds}
                                    onChange={(e) => setSearchData({ ...searchData, minBeds: e.target.value })}
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid #e2e8f0',
                                        fontSize: '0.875rem',
                                        outline: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="">Min</option>
                                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                                <span style={{ padding: '0.75rem 0', color: '#94a3b8' }}>-</span>
                                <select
                                    value={searchData.maxBeds}
                                    onChange={(e) => setSearchData({ ...searchData, maxBeds: e.target.value })}
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid #e2e8f0',
                                        fontSize: '0.875rem',
                                        outline: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="">Max</option>
                                    {[1, 2, 3, 4, 5, 6, '6+'].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Bathrooms */}
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                <Bath size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Bathrooms
                            </label>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <select
                                    value={searchData.minBaths}
                                    onChange={(e) => setSearchData({ ...searchData, minBaths: e.target.value })}
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid #e2e8f0',
                                        fontSize: '0.875rem',
                                        outline: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="">Min</option>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                                <span style={{ padding: '0.75rem 0', color: '#94a3b8' }}>-</span>
                                <select
                                    value={searchData.maxBaths}
                                    onChange={(e) => setSearchData({ ...searchData, maxBaths: e.target.value })}
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid #e2e8f0',
                                        fontSize: '0.875rem',
                                        outline: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="">Max</option>
                                    {[1, 2, 3, 4, 5, '5+'].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                <DollarSign size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Price Range
                            </label>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="text"
                                    placeholder="Min"
                                    value={searchData.minPrice}
                                    onChange={(e) => setSearchData({ ...searchData, minPrice: e.target.value })}
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid #e2e8f0',
                                        fontSize: '0.875rem',
                                        outline: 'none'
                                    }}
                                />
                                <span style={{ padding: '0.75rem 0', color: '#94a3b8' }}>-</span>
                                <input
                                    type="text"
                                    placeholder="Max"
                                    value={searchData.maxPrice}
                                    onChange={(e) => setSearchData({ ...searchData, maxPrice: e.target.value })}
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '2px solid #e2e8f0',
                                        fontSize: '0.875rem',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Parking */}
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem' }}>
                                🚗 Parking Spaces
                            </label>
                            <select
                                value={searchData.minCars}
                                onChange={(e) => setSearchData({ ...searchData, minCars: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '2px solid #e2e8f0',
                                    fontSize: '0.875rem',
                                    outline: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <option value="">Any</option>
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                            </select>
                        </div>
                    </div>

                    {/* Additional Features */}
                    <div style={{ marginTop: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.75rem' }}>
                            Additional Requirements
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {['Pool', 'Garden', 'Garage', 'Balcony', 'Air Conditioning', 'Heating', 'Pet Friendly', 'Near Schools'].map(feature => (
                                <label key={feature} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '9999px',
                                    border: '2px solid #e2e8f0',
                                    background: searchData.features.includes(feature) ? 'rgba(102, 203, 213, 0.1)' : 'white',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                    color: searchData.features.includes(feature) ? '#66cbd5' : '#64748b',
                                    transition: 'all 0.2s'
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={searchData.features.includes(feature)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSearchData({ ...searchData, features: [...searchData.features, feature] });
                                            } else {
                                                setSearchData({ ...searchData, features: searchData.features.filter(f => f !== feature) });
                                            }
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    {feature}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                        <button
                            onClick={() => setSearchData({
                                location: '',
                                propertyType: '',
                                minBeds: '',
                                maxBeds: '',
                                minBaths: '',
                                maxBaths: '',
                                minPrice: '',
                                maxPrice: '',
                                minCars: '',
                                features: []
                            })}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.75rem',
                                border: '2px solid #e2e8f0',
                                background: 'white',
                                color: '#64748b',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontSize: '0.875rem'
                            }}
                        >
                            Clear All
                        </button>
                        <button
                            onClick={handleSearch}
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '0.75rem',
                                border: 'none',
                                background: 'linear-gradient(135deg, #66cbd5, #4db8c4)',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                boxShadow: '0 4px 12px rgba(102, 203, 213, 0.3)'
                            }}
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
