"use client";

import { Search, Bell, HelpCircle, User } from "lucide-react";

export function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, padding: '2rem 2rem 1rem 2rem' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '2px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 2px 0 rgba(255, 255, 255, 1)',
        borderRadius: '1rem',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
          <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} size={20} />
          <input 
            type="text" 
            placeholder="Search properties, agents, compliance logs..." 
            style={{
              width: '100%',
              paddingLeft: '3rem',
              paddingRight: '1rem',
              paddingTop: '0.875rem',
              paddingBottom: '0.875rem',
              borderRadius: '0.75rem',
              background: 'rgba(255, 255, 255, 0.7)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              outline: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
            }}
            onFocus={(e) => {
              e.target.style.border = '2px solid #3b82f6';
              e.target.style.background = 'white';
              e.target.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.05)';
            }}
            onBlur={(e) => {
              e.target.style.border = '2px solid rgba(255, 255, 255, 0.8)';
              e.target.style.background = 'rgba(255, 255, 255, 0.7)';
              e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.05)';
            }}
          />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: '1rem' }}>
           {[
             { icon: Bell, hasNotif: true },
             { icon: HelpCircle, hasNotif: false },
             { icon: User, hasNotif: false }
           ].map((item, idx) => (
             <button 
               key={idx}
               style={{
                 position: 'relative',
                 padding: '0.75rem',
                 background: 'rgba(255, 255, 255, 0.6)',
                 border: 'none',
                 borderRadius: '0.75rem',
                 cursor: 'pointer',
                 color: '#64748b',
                 transition: 'all 0.2s',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = 'white';
                 e.currentTarget.style.color = '#3b82f6';
                 e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                 e.currentTarget.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                 e.currentTarget.style.color = '#64748b';
                 e.currentTarget.style.boxShadow = 'none';
                 e.currentTarget.style.transform = 'translateY(0)';
               }}
             >
               <item.icon size={22} />
               {item.hasNotif && (
                 <span style={{
                   position: 'absolute',
                   top: '0.5rem',
                   right: '0.5rem',
                   width: '0.625rem',
                   height: '0.625rem',
                   background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
                   borderRadius: '9999px',
                   border: '2px solid white',
                   boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)',
                   animation: 'pulse 2s ease-in-out infinite'
                 }} />
               )}
             </button>
           ))}
        </div>
      </div>
    </header>
  );
}
