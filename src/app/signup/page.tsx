"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function SignUpPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            router.push('/agent');
        }, 1500);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            fontFamily: 'sans-serif',
            padding: '2rem'
        }}>

            {/* Decorative Background Elements */}
            <div style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'rgba(94, 197, 207, 0.15)', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }}></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ width: '100%', maxWidth: '520px', position: 'relative', zIndex: 10 }}
            >
                {/* Logo */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                        <div style={{ width: '48px', height: '48px', background: '#5ec5cf', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 10px 15px -3px rgba(94, 197, 207, 0.3)' }}>
                            <Home size={26} fill="currentColor" />
                        </div>
                        <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1e293b', letterSpacing: '-0.025em' }}>Collings</span>
                    </Link>
                </div>

                <div style={{
                    background: 'white',
                    borderRadius: '2rem',
                    padding: '2.5rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255,255,255,0.8)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.75rem' }}>
                            Create an account
                        </h1>
                        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                            Join the world's most advanced property platform.
                        </p>
                    </div>

                    <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: '#334155', fontSize: '0.875rem' }}>First Name</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                    <input
                                        type="text"
                                        placeholder="James"
                                        style={{
                                            width: '100%',
                                            padding: '1rem 1rem 1rem 3.25rem',
                                            borderRadius: '1rem',
                                            border: '2px solid #f1f5f9',
                                            background: '#f8fafc',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            transition: 'all 0.2s',
                                            color: '#1e293b',
                                            fontWeight: '500'
                                        }}
                                        onFocus={(e) => { e.target.style.borderColor = '#5ec5cf'; e.target.style.background = 'white'; }}
                                        onBlur={(e) => { e.target.style.borderColor = '#f1f5f9'; e.target.style.background = '#f8fafc'; }}
                                    />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: '#334155', fontSize: '0.875rem' }}>First Name</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                    <input
                                        type="text"
                                        placeholder="Collings"
                                        style={{
                                            width: '100%',
                                            padding: '1rem 1rem 1rem 3.25rem',
                                            borderRadius: '1rem',
                                            border: '2px solid #f1f5f9',
                                            background: '#f8fafc',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            transition: 'all 0.2s',
                                            color: '#1e293b',
                                            fontWeight: '500'
                                        }}
                                        onFocus={(e) => { e.target.style.borderColor = '#5ec5cf'; e.target.style.background = 'white'; }}
                                        onBlur={(e) => { e.target.style.borderColor = '#f1f5f9'; e.target.style.background = '#f8fafc'; }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: '#334155', fontSize: '0.875rem' }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                <input
                                    type="email"
                                    placeholder="agent@company.com"
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1rem 1rem 3.25rem',
                                        borderRadius: '1rem',
                                        border: '2px solid #f1f5f9',
                                        background: '#f8fafc',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        transition: 'all 0.2s',
                                        color: '#1e293b',
                                        fontWeight: '500'
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = '#5ec5cf'; e.target.style.background = 'white'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#f1f5f9'; e.target.style.background = '#f8fafc'; }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: '#334155', fontSize: '0.875rem' }}>Password</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                <input
                                    type="password"
                                    placeholder="Create a strong password"
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1rem 1rem 3.25rem',
                                        borderRadius: '1rem',
                                        border: '2px solid #f1f5f9',
                                        background: '#f8fafc',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        transition: 'all 0.2s',
                                        color: '#1e293b',
                                        fontWeight: '500'
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = '#5ec5cf'; e.target.style.background = 'white'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#f1f5f9'; e.target.style.background = '#f8fafc'; }}
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: '0.5rem' }}>
                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: '#5ec5cf',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 15px -3px rgba(94, 197, 207, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    opacity: loading ? 0.8 : 1,
                                    transition: 'transform 0.1s'
                                }}
                            >
                                {loading ? 'Creating Account...' : 'Get Started'}
                                {!loading && <ArrowRight size={20} />}
                            </button>
                        </div>

                    </form>

                    <div style={{ marginTop: '2rem', textAlign: 'center', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9', color: '#64748b', fontSize: '0.9rem' }}>
                        Already have an account? <Link href="/signin" style={{ color: '#5ec5cf', fontWeight: '700', textDecoration: 'none' }}>Sign In</Link>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
