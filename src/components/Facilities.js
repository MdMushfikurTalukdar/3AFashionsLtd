// components/Facilities.jsx
import React from 'react';
import { Box } from '@mui/material';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Safety Measures",
      icon: "🛡️",
      description: "Comprehensive safety protocols and measures to ensure a secure environment for all.",
      link: "/safety-measures",
      color: "#1a4b6d"
    },
    {
      id: 2,
      title: "Medical Facilities",
      icon: "🏥",
      description: "State-of-the-art medical facilities with trained professionals available 24/7.",
      link: "/medical-facilities",
      color: "#2d6a8f"
    },
    {
      id: 3,
      title: "Child Care",
      icon: "👶",
      description: "Professional child care services with experienced staff in a safe environment.",
      link: "/child-care",
      color: "#3b8b6d"
    },
    {
      id: 4,
      title: "First Aid",
      icon: "🚑",
      description: "Immediate first aid response with well-equipped stations throughout the facility.",
      link: "/first-aid",
      color: "#c0392b"
    }
  ];

  const handleFacilityClick = (link, e) => {
    e.preventDefault();
    window.open(link, '_blank');
  };

  // ✅ FIXED: Added proper return statement with Box wrapper
  return (
    <Box id="facilities" sx={{ overflow: 'hidden' }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
        background: 'linear-gradient(135deg, #f8fafc 0%, #eef3f8 100%)',
        minHeight: '100vh'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          animation: 'fadeInDown 0.8s ease'
        }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 700,
            color: '#0b2b3f',
            letterSpacing: '1px',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #0b2b3f, #1a4b6d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Facilities
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #1a4b6d, #3b6e8f)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
          <p style={{
            color: '#3b6e8f',
            marginTop: '0.5rem',
            fontSize: '1.1rem'
          }}>
            Discover our world-class facilities designed for your comfort and safety
          </p>
        </div>

        {/* Facilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '1rem 0'
        }}>
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              onClick={(e) => handleFacilityClick(facility.link, e)}
              style={{
                background: 'white',
                borderRadius: '1.5rem',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'scale(1)',
                position: 'relative',
                overflow: 'hidden',
                animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = facility.color;
                // Zoom icon
                const icon = e.currentTarget.querySelector('.facility-icon');
                if (icon) {
                  icon.style.transform = 'scale(1.3) rotate(10deg)';
                }
                // Zoom title
                const title = e.currentTarget.querySelector('.facility-title');
                if (title) {
                  title.style.transform = 'scale(1.05)';
                  title.style.color = facility.color;
                }
                // Slide description
                const desc = e.currentTarget.querySelector('.facility-desc');
                if (desc) {
                  desc.style.maxHeight = '100px';
                  desc.style.opacity = '1';
                }
                // Animate overlay
                const overlay = e.currentTarget.querySelector('.facility-overlay');
                if (overlay) {
                  overlay.style.opacity = '1';
                  overlay.style.transform = 'translateX(0)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = 'transparent';
                const icon = e.currentTarget.querySelector('.facility-icon');
                if (icon) {
                  icon.style.transform = 'scale(1) rotate(0deg)';
                }
                const title = e.currentTarget.querySelector('.facility-title');
                if (title) {
                  title.style.transform = 'scale(1)';
                  title.style.color = '#0b2b3f';
                }
                const desc = e.currentTarget.querySelector('.facility-desc');
                if (desc) {
                  desc.style.maxHeight = '0';
                  desc.style.opacity = '0';
                }
                const overlay = e.currentTarget.querySelector('.facility-overlay');
                if (overlay) {
                  overlay.style.opacity = '0';
                  overlay.style.transform = 'translateX(-100%)';
                }
              }}
            >
              {/* Decorative Background Circle */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${facility.color}10, transparent)`,
                transition: 'all 0.6s ease',
                pointerEvents: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.5)';
                e.currentTarget.style.background = `radial-gradient(circle, ${facility.color}20, transparent)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = `radial-gradient(circle, ${facility.color}10, transparent)`;
              }} />

              {/* Icon with Zoom Effect */}
              <div
                className="facility-icon"
                style={{
                  fontSize: '4rem',
                  marginBottom: '1rem',
                  display: 'inline-block',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'scale(1)'
                }}
              >
                {facility.icon}
              </div>

              {/* Title with Color Change */}
              <h3
                className="facility-title"
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#0b2b3f',
                  marginBottom: '0.5rem',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)'
                }}
              >
                {facility.title}
              </h3>

              {/* Description with Slide Animation */}
              <div
                className="facility-desc"
                style={{
                  maxHeight: '0',
                  opacity: '0',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  color: '#3b6e8f',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}
              >
                {facility.description}
              </div>

              {/* Click for more info indicator */}
              <div
                className="facility-overlay"
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1.5rem',
                  opacity: '0',
                  transform: 'translateX(-100%)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '0.85rem',
                  color: facility.color,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Learn More</span>
                <span style={{
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bengali Text Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          background: 'white',
          borderRadius: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
          animation: 'fadeInUp 0.8s ease 0.6s both'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                fontSize: '2.5rem',
                animation: 'pulse 2s infinite'
              }}>
                🏥
              </span>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#0b2b3f',
                background: 'linear-gradient(135deg, #1a4b6d, #2d6a8f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                FIRST AID
              </span>
            </div>
            <div style={{
              width: '2px',
              height: '40px',
              background: '#d0dde8'
            }} />
            <div style={{
              fontSize: '1.3rem',
              fontWeight: 500,
              color: '#0b2b3f',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', sans-serif"
            }}>
              আমার হোক
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
          
          @media (max-width: 768px) {
            .facility-grid {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 1.5rem;
            }
            
            h2 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 480px) {
            .facility-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
            
            .facilities-container {
              padding: 1.5rem 1rem;
            }
          }
        `}</style>
      </div>
    </Box>
  );
};

export default Facilities;