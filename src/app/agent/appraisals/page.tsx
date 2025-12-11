"use client";

import { ClipboardCheck, Calendar, MapPin, CheckCircle, Clock } from "lucide-react";

export default function AppraisalsPage() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', background: '#ffffff', minHeight: 'calc(100vh - 80px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '0.5rem' }}>
                        Appraisals
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b' }}>
                        Manage property valuations and presentation requests
                    </p>
                </div>
                <button style={{
                    padding: '0.75rem 1.5rem',
                    background: '#5ec5cf',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                }}>
                    <ClipboardCheck size={18} />
                    New Appraisal
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {/* Active Appraisals */}
                {[
                    { address: "88 Toorak Road, South Yarra", client: "Michael Chen", date: "Today, 2:00 PM", status: "Scheduled", value: "$2.4M - $2.6M" },
                    { address: "15 Osborne Street, South Yarra", client: "Sarah Jessica", date: "Tomorrow, 10:00 AM", status: "Scheduled", value: "TBD" },
                    { address: "4/22 Chapel Street, Windsor", client: "Tom Wilson", date: "Yesterday", status: "Completed", value: "$850k - $920k" },
                ].map((item, i) => (
                    <div key={i} style={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        transition: 'transform 0.2s',
                        cursor: 'pointer'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{
                                padding: '0.5rem',
                                borderRadius: '0.5rem',
                                background: item.status === 'Completed' ? '#dcfce7' : '#e0f2fe',
                                color: item.status === 'Completed' ? '#16a34a' : '#0284c7'
                            }}>
                                {item.status === 'Completed' ? <CheckCircle size={20} /> : <Calendar size={20} />}
                            </div>
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: item.status === 'Completed' ? '#16a34a' : '#0284c7',
                                background: item.status === 'Completed' ? '#dcfce7' : '#e0f2fe',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '99px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {item.status}
                            </span>
                        </div>

                        <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#5ec5cf', marginBottom: '0.25rem' }}>
                            {item.address}
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                            Client: {item.client}
                        </p>

                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
                                <Clock size={16} />
                                {item.date}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#5ec5cf', fontWeight: '600' }}>
                                <MapPin size={16} style={{ color: '#5ec5cf' }} />
                                Est. {item.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
