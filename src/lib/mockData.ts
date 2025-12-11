// Mock Property Data with Source Separation
// RP- prefix = RP Data Licensed Record
// REIP- prefix = REIP Listing Feed

export const mockProperties = [
  // --- REIP LISTINGS (Rich Media, Active) ---
  {
    id: 'REIP-1001',
    address: '12 Osborne Street',
    suburb: 'South Yarra',
    state: 'VIC',
    price: 2450000,
    beds: 3,
    baths: 2,
    cars: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    status: 'active' as const,
    type: 'House',
    source: 'REIP'
  },
  {
    id: 'REIP-1002',
    address: '4/22 Chapel Street',
    suburb: 'Windsor',
    state: 'VIC',
    price: 850000,
    beds: 2,
    baths: 1,
    cars: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    status: 'active' as const,
    type: 'Apartment',
    source: 'REIP'
  },
  {
    id: 'REIP-1003',
    address: '88 Toorak Road',
    suburb: 'South Yarra',
    state: 'VIC',
    price: 5200000,
    beds: 5,
    baths: 4,
    cars: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    status: 'active' as const,
    type: 'House',
    source: 'REIP'
  },
  {
    id: 'REIP-1004',
    address: 'Level 3, 500 Chapel St',
    suburb: 'South Yarra',
    state: 'VIC',
    price: 1800000,
    beds: 0,
    baths: 0,
    cars: 2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    status: 'active' as const,
    type: 'Commercial',
    source: 'REIP'
  },
  {
    id: 'REIP-1005',
    address: 'Lot 45, Valley Views',
    suburb: 'Lilydale',
    state: 'VIC',
    price: 650000,
    beds: 0,
    baths: 0,
    cars: 0,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    status: 'active' as const,
    type: 'Land',
    source: 'REIP'
  // --- RENTAL LISTINGS ---
  {
    id: 'RENT-7001',
    address: '5/102 St Kilda Rd',
    suburb: 'St Kilda',
    state: 'VIC',
    price: 650, // Per week
    beds: 2,
    baths: 1,
    cars: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    status: 'rent' as const,
    type: 'Apartment',
    source: 'Rental Feed'
  },
  {
    id: 'RENT-7002',
    address: '15 Queens Lane',
    suburb: 'Melbourne',
    state: 'VIC',
    price: 850,
    beds: 3,
    baths: 2,
    cars: 1,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    status: 'rent' as const,
    type: 'Apartment',
    source: 'Rental Feed'
  },
  {
    id: 'RENT-7003',
    address: '28 Victoria St',
    suburb: 'Windsor',
    state: 'VIC',
    price: 1200,
    beds: 3,
    baths: 2,
    cars: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    status: 'rent' as const,
    type: 'House',
    source: 'Rental Feed'
  },
  // --- RP DATA RECORDS (Historical, Sold, Off-Market) ---
  {
    id: 'RP-5001',
    address: '15 Cromwell Road',
    suburb: 'South Yarra',
    state: 'VIC',
    price: 1950000,
    beds: 3,
    baths: 1,
    cars: 1,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    status: 'sold' as const,
    type: 'House',
    source: 'RP Data'
  },
  {
    id: 'RP-5002',
    address: '7a Garden Lane',
    suburb: 'Toorak',
    state: 'VIC',
    price: 4100000,
    beds: 4,
    baths: 3,
    cars: 2,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    status: 'sold' as const,
    type: 'House',
    source: 'RP Data'
  },
  {
    id: 'RP-5003',
    address: '99 Commercial Rd',
    suburb: 'Prahran',
    state: 'VIC',
    price: 1200000,
    beds: 2,
    baths: 2,
    cars: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    status: 'sold' as const,
    type: 'Apartment',
    source: 'RP Data'
  },

  // --- MORE DIVERSITY ---
  {
    id: 'REIP-1006',
    address: 'The Penthouse, 1 St Kilda Rd',
    suburb: 'St Kilda',
    state: 'VIC',
    price: 8500000,
    beds: 4,
    baths: 4,
    cars: 4,
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=800',
    status: 'active' as const,
    type: 'Apartment',
    source: 'REIP'
  },
  {
    id: 'RP-5004',
    address: 'Warehouse 5',
    suburb: 'Collingwood',
    state: 'VIC',
    price: 2200000,
    beds: 1,
    baths: 1,
    cars: 2,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    status: 'off-market' as const,
    type: 'Commercial',
    source: 'RP Data'
  }
];

// Mock Market Stats
export const mockMarketStats = [
  {
    label: 'Median Price',
    value: '$2.4M',
    trend: '+12%',
    isPositive: true
  },
  {
    label: 'Active Listings',
    value: '1,247',
    trend: '+8%',
    isPositive: true
  },
  {
    label: 'Avg. Days on Market',
    value: '28',
    trend: '-5%',
    isPositive: true
  }
];

// Mock Agent Data
export const mockLeads = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah@email.com', phone: '0412 345 678', status: 'new' as const, property: '123 Collins St', date: '2024-01-15' },
  { id: '2', name: 'Michael Chen', email: 'michael@email.com', phone: '0423 456 789', status: 'contacted' as const, property: '45 Smith Rd', date: '2024-01-14' },
  { id: '3', name: 'Emma Wilson', email: 'emma@email.com', phone: '0434 567 890', status: 'qualified' as const, property: '88 James St', date: '2024-01-13' },
  { id: '4', name: 'David Brown', email: 'david@email.com', phone: '0445 678 901', status: 'new' as const, property: '12 Park Ave', date: '2024-01-12' },
];

export const mockAgentListings = [
  { id: '1', address: '12 Osborne Street', status: 'active' as const, views: 1247, enquiries: 23, price: 2450000 },
  { id: '2', address: '4/22 Chapel Street', status: 'active' as const, views: 892, enquiries: 15, price: 850000 },
  { id: '3', address: '88 Toorak Road', status: 'active' as const, views: 2341, enquiries: 45, price: 5200000 },
  { id: '4', address: '12 Park Avenue (Sold)', status: 'sold' as const, views: 156, enquiries: 4, price: 2100000 },
];

export const mockBuyers = [
  { id: '1', name: 'Jessica Lee', budget: '2M-3M', suburbs: ['Toorak', 'South Yarra'], engagement: 85 },
  { id: '2', name: 'Tom Anderson', budget: '1.5M-2M', suburbs: ['Richmond', 'Windsor'], engagement: 72 },
  { id: '3', name: 'Rachel Green', budget: '3M-4M', suburbs: ['Brighton', 'Toorak'], engagement: 91 },
];
