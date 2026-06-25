// components/CorporateViewpoint.jsx
import React, { useState, useEffect } from 'react';

import { Box } from '@mui/material';

const CorporateViewpoint = () => {
  

  // Background images for carousel
  const backgroundImages = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=400&fit=crop'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Team members data with real avatar images
  const teamMembers = [
    { 
      id: 1, 
      name: 'Nigher Sultana', 
      role: 'Chairman', 
      image: 'https://i.pinimg.com/236x/cf/30/8b/cf308b77f0f6bf330240b9f62824acb1.jpg',
      bio: 'Leading W. Apparels Ltd. with vision and dedication since 1992. Over 30 years of experience in garment industry.',
      experience: '30+ Years',
      expertise: 'Strategic Leadership'
    },
    { 
      id: 2, 
      name: 'Md. Rahman', 
      role: 'Managing Director', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1ixO_hNRE0Rr3MGXWN-fTNBUkpX-7CCOjQ&s',
      bio: 'Overseeing operations and strategic growth initiatives. Expert in supply chain management.',
      experience: '25+ Years',
      expertise: 'Operations Management'
    },
    { 
      id: 3, 
      name: 'Sadia Khan', 
      role: 'Head of Quality Control', 
      image: 'https://ui-avatars.com/api/?name=Sadia+Khan&size=150&background=7b2cbf&color=fff&bold=true',
      bio: 'Ensuring international quality standards across all products. ISO certified professional.',
      experience: '18+ Years',
      expertise: 'Quality Assurance'
    },
    { 
      id: 4, 
      name: 'Kamal Hossain', 
      role: 'Production Manager', 
      image: 'https://ui-avatars.com/api/?name=Kamal+Hossain&size=150&background=c77d00&color=fff&bold=true',
      bio: 'Managing production efficiency and workforce optimization. 20+ years in garment manufacturing.',
      experience: '20+ Years',
      expertise: 'Production Planning'
    },
    { 
      id: 5, 
      name: 'Taslima Akhter', 
      role: 'Commercial Supervisor', 
      image: 'https://ui-avatars.com/api/?name=Taslima+Akhter&size=150&background=006d77&color=fff&bold=true',
      bio: 'Handling export documentation and international trade compliance. Expert in customs regulations.',
      experience: '15+ Years',
      expertise: 'Export Documentation'
    },
    { 
      id: 6, 
      name: 'Rafiqul Islam', 
      role: 'Head of Sustainability', 
      image: 'https://ui-avatars.com/api/?name=Rafiqul+Islam&size=150&background=2d6a4f&color=fff&bold=true',
      bio: 'Driving sustainable practices and environmental initiatives. Leading green manufacturing.',
      experience: '12+ Years',
      expertise: 'Sustainability'
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    try {
      setSelectedMember(selectedMember?.id === member.id ? null : member);
    } catch (error) {
      console.error('Error selecting member:', error);
    }
  };

  // Responsive styles
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

  return (
    <Box id="team" sx={{ overflow: 'hidden' }}>
    <div style={{
      maxWidth: '1300px',
      margin: '0 auto',
      padding: isMobile ? '0.5rem' : '2rem',
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
      background: 'linear-gradient(135deg, #f8fafc 0%, #eef3f8 100%)',
      minHeight: '100vh'
    }}>
      {/* Header with Background Image Carousel */}
      <header style={{
        borderRadius: isMobile ? '1rem' : '2rem',
        padding: isMobile ? '1.5rem 1rem' : isTablet ? '2.5rem 2rem' : '3.5rem 3rem',
        marginBottom: isMobile ? '1.5rem' : '2.5rem',
        color: 'white',
        boxShadow: '0 20px 60px rgba(11, 43, 63, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: isMobile ? '250px' : isTablet ? '300px' : '320px',
        animation: 'fadeInDown 0.8s ease',
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out'
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(11, 43, 63, 0.85) 0%, rgba(26, 75, 109, 0.75) 50%, rgba(45, 106, 143, 0.7) 100%)',
          zIndex: 1
        }} />
        
        {/* Decorative Circles - Hidden on mobile */}
        {!isMobile && (
          <>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '400px',
              height: '400px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-5%',
              width: '300px',
              height: '300px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 1
            }} />
          </>
        )}
        
        {/* Image Counter/Dots */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '10px' : '20px',
          right: isMobile ? '10px' : '30px',
          display: 'flex',
          gap: isMobile ? '4px' : '8px',
          zIndex: 2
        }}>
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              style={{
                width: isMobile ? '6px' : '10px',
                height: isMobile ? '6px' : '10px',
                borderRadius: '50%',
                background: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: isMobile ? '0.5rem' : '1rem', 
            marginBottom: isMobile ? '0.3rem' : '0.5rem',
            flexWrap: isMobile ? 'wrap' : 'nowrap'
          }}>
            <span style={{ 
              fontSize: isMobile ? '2rem' : isTablet ? '2.8rem' : '3.5rem' 
            }}>🏢</span>
            <h1 style={{
              fontSize: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '3.5rem',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
              wordBreak: 'break-word'
            }}>Corporate Viewpoint</h1>
          </div>
          <p style={{
            fontSize: isMobile ? '0.9rem' : isTablet ? '1.1rem' : '1.3rem',
            opacity: 0.95,
            fontWeight: 300,
            marginBottom: isMobile ? '0.8rem' : '1.5rem',
            marginLeft: isMobile ? '0' : '0.5rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            wordBreak: 'break-word'
          }}>
            W. Apparels Ltd. — 32+ Years of Excellence in Garment Manufacturing
          </p>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '0.5rem' : '1rem', 
            flexWrap: 'wrap', 
            marginLeft: isMobile ? '0' : '0.5rem' 
          }}>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: isMobile ? '0.3rem 0.8rem' : '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: isMobile ? '0.7rem' : '0.9rem',
              fontWeight: 500,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <span>🇧🇩</span> {!isMobile && 'Bangladesh'}
              {isMobile && 'BD'}
            </span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: isMobile ? '0.3rem 0.8rem' : '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: isMobile ? '0.7rem' : '0.9rem',
              fontWeight: 500,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <span>🏆</span> {isMobile ? '1992' : 'Founded 1992'}
            </span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: isMobile ? '0.3rem 0.8rem' : '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: isMobile ? '0.7rem' : '0.9rem',
              fontWeight: 500,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <span>⭐</span> {isMobile ? 'BGMEA' : 'BGMEA Member'}
            </span>
          </div>
        </div>
      </header>

      {/* Company Overview */}
      <section style={{ marginBottom: isMobile ? '1.5rem' : '3rem', animation: 'fadeInUp 0.8s ease 0.2s both' }}>
        <div style={{
          background: 'white',
          padding: isMobile ? '1.2rem' : isTablet ? '2rem' : '2.5rem',
          borderRadius: isMobile ? '1rem' : '1.5rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
          borderLeft: isMobile ? '4px solid #1a4b6d' : '6px solid #1a4b6d',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '0.5rem' : '2rem',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.06)';
          }
        }}>
          <div style={{ 
            fontSize: isMobile ? '2.5rem' : '3.5rem', 
            flexShrink: 0,
            animation: 'pulse 2s infinite',
            textAlign: isMobile ? 'center' : 'left'
          }}>🏭</div>
          <div style={{ 
            lineHeight: isMobile ? '1.6' : '1.9', 
            color: '#1a3a4a', 
            fontSize: isMobile ? '0.9rem' : isTablet ? '1rem' : '1.05rem' 
          }}>
            <p style={{ marginBottom: '0.8rem' }}>
              <strong style={{ color: '#1a4b6d', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>W. Apparels Ltd.</strong> is among one of the most successful garment manufacturers 
              in Bangladesh; a country with great potential in the field of garment-manufacturing. 
              It started its journey in the year <strong style={{ color: '#1a4b6d' }}>1992</strong>. W. Apparels Ltd. has passed over 
              <strong style={{ color: '#1a4b6d' }}> 32 successful years</strong> of accomplishment, aiming to lead the competitive 
              knit/Woven/Non-Woven wear-organizations of Bangladesh.
            </p>
            <p>
              It has arduously reengineered each step of its value-chain to match the dynamism of 
              the fashion market. W. Apparels Ltd. has expanded its capacity, developed a skilled 
              workforce and introduced integrated technologies, to remain globally up-to-date. 
              It is truly an organization with a <strong style={{ color: '#1a4b6d' }}>glorious past</strong> and a <strong style={{ color: '#1a4b6d' }}>bright future</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: isMobile ? '1.5rem' : '3rem', animation: 'fadeInUp 0.8s ease 0.4s both' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '1.5rem' : '3rem' }}>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : isTablet ? '2.2rem' : '2.8rem',
            fontWeight: 700,
            color: '#0b2b3f',
            letterSpacing: '1px',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #0b2b3f, #1a4b6d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>👥 MEET OUR TEAM</h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(135deg, #1a4b6d, #3b6e8f)',
            margin: '0 auto 0.8rem',
            borderRadius: '2px'
          }} />
          <p style={{
            color: '#3b6e8f',
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: isMobile ? '0.85rem' : isTablet ? '0.95rem' : '1.05rem',
            lineHeight: '1.6',
            padding: isMobile ? '0 0.5rem' : '0'
          }}>
            Our team comprises of well experienced promoters, quality control agents, 
            machinists, commercial supervisors and production operators.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? 'repeat(2, 1fr)' 
            : isTablet 
              ? 'repeat(3, 1fr)' 
              : 'repeat(3, 1fr)',
          gap: isMobile ? '0.8rem' : isTablet ? '1.5rem' : '2rem'
        }}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              onClick={() => handleMemberClick(member)}
              style={{
                background: selectedMember?.id === member.id 
                  ? 'linear-gradient(145deg, #ffffff, #f0f7fe)'
                  : 'white',
                padding: isMobile ? '1rem 0.8rem' : isTablet ? '1.5rem 1rem' : '2rem 1.5rem',
                borderRadius: isMobile ? '0.8rem' : '1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: selectedMember?.id === member.id 
                  ? '2px solid #1a4b6d'
                  : '2px solid transparent',
                boxShadow: selectedMember?.id === member.id
                  ? '0 20px 50px rgba(26, 75, 109, 0.2)'
                  : '0 4px 20px rgba(0, 0, 0, 0.04)',
                transform: selectedMember?.id === member.id && !isMobile ? 'translateY(-10px)' : 'none',
                animation: `fadeInUp 0.6s ease ${index * 0.1}s both`
              }}
              onMouseEnter={(e) => {
                if (selectedMember?.id !== member.id && !isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedMember?.id !== member.id && !isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                }
              }}
            >
              <div style={{
                width: isMobile ? '60px' : isTablet ? '80px' : '100px',
                height: isMobile ? '60px' : isTablet ? '80px' : '100px',
                borderRadius: '50%',
                margin: '0 auto 0.5rem',
                overflow: 'hidden',
                border: selectedMember?.id === member.id 
                  ? '3px solid #1a4b6d'
                  : '3px solid #e0eaf3',
                transition: 'all 0.3s ease',
                boxShadow: selectedMember?.id === member.id
                  ? '0 0 0 4px rgba(26, 75, 109, 0.1)'
                  : 'none'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h4 style={{
                fontSize: isMobile ? '0.8rem' : isTablet ? '0.95rem' : '1.15rem',
                fontWeight: 600,
                color: '#0b2b3f',
                marginBottom: '0.2rem',
                wordBreak: 'break-word'
              }}>{member.name}</h4>
              <p style={{
                fontSize: isMobile ? '0.65rem' : isTablet ? '0.75rem' : '0.85rem',
                color: '#3b6e8f',
                fontWeight: 500,
                marginBottom: '0.3rem'
              }}>{member.role}</p>
              
              {selectedMember?.id === member.id && (
                <div style={{
                  marginTop: isMobile ? '0.5rem' : '1rem',
                  paddingTop: isMobile ? '0.5rem' : '1rem',
                  borderTop: '2px solid #e0eaf3',
                  animation: 'slideDown 0.3s ease'
                }}>
                  <p style={{
                    fontSize: isMobile ? '0.7rem' : isTablet ? '0.8rem' : '0.9rem',
                    color: '#1a3a4a',
                    lineHeight: '1.5',
                    marginBottom: '0.5rem'
                  }}>{member.bio}</p>
                  <div style={{
                    display: 'flex',
                    gap: '0.3rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      background: '#e0eaf3',
                      padding: '0.15rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: isMobile ? '0.6rem' : '0.75rem',
                      color: '#1a4b6d',
                      fontWeight: 500
                    }}>⏱ {member.experience}</span>
                    <span style={{
                      background: '#e0eaf3',
                      padding: '0.15rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: isMobile ? '0.6rem' : '0.75rem',
                      color: '#1a4b6d',
                      fontWeight: 500
                    }}>🎯 {member.expertise}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Chairman's Message */}
      <section style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem', animation: 'fadeInUp 0.8s ease 0.6s both' }}>
        <div style={{
          background: 'white',
          padding: isMobile ? '1.2rem' : isTablet ? '2rem' : '3rem',
          borderRadius: isMobile ? '1rem' : '1.5rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e8f0f8',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, transparent, rgba(26, 75, 109, 0.03))',
            borderRadius: '50%',
            transform: 'translate(30%, -50%)'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: isMobile ? '0.5rem' : '1rem', 
              marginBottom: isMobile ? '0.8rem' : '1.5rem',
              flexWrap: isMobile ? 'wrap' : 'nowrap'
            }}>
              <div style={{
                fontSize: isMobile ? '2rem' : '3rem',
                background: 'linear-gradient(135deg, #f0f7fe, #e0eaf3)',
                width: isMobile ? '50px' : '70px',
                height: isMobile ? '50px' : '70px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>📜</div>
              <div>
                <h2 style={{
                  fontSize: isMobile ? '1.3rem' : isTablet ? '1.8rem' : '2.2rem',
                  fontWeight: 700,
                  color: '#0b2b3f'
                }}>Message from the Chairman</h2>
                <p style={{ 
                  color: '#3b6e8f', 
                  fontSize: isMobile ? '0.7rem' : '0.9rem' 
                }}>A word from our leadership</p>
              </div>
            </div>
            
            <div>
              <blockquote style={{
                background: 'linear-gradient(135deg, #f0f7fe 0%, #f8fafc 100%)',
                padding: isMobile ? '0.8rem 1rem' : '1.5rem 2rem',
                borderRadius: '0.8rem',
                borderLeft: '4px solid #1a4b6d',
                marginBottom: isMobile ? '0.8rem' : '1.5rem',
                fontSize: isMobile ? '0.85rem' : isTablet ? '1rem' : '1.1rem',
                color: '#1a4b6d',
                fontStyle: 'italic'
              }}>
                "Starting as W. Apparels Ltd. in 1992 and further expanding into 
                W. Apparels Ltd. in 2019, we are a garments industry maintaining a 
                consistent contribution in readymade garments export."
              </blockquote>
              <p style={{
                lineHeight: isMobile ? '1.6' : '1.9',
                color: '#1a3a4a',
                fontSize: isMobile ? '0.85rem' : isTablet ? '0.95rem' : '1.05rem',
                marginBottom: '0.8rem'
              }}>
                Our team comprises of well experienced promoters, quality control agents, 
                machinists, commercial supervisors and production operators. Our goals are 
                to maintain better foreign relations and establish a research intensive 
                environment for garments products, maintaining consistent customer 
                satisfaction and using updated machinery.
              </p>
              <p style={{
                lineHeight: isMobile ? '1.6' : '1.9',
                color: '#1a3a4a',
                fontSize: isMobile ? '0.85rem' : isTablet ? '0.95rem' : '1.05rem',
                marginBottom: isMobile ? '0.8rem' : '1.5rem'
              }}>
                Under the alliance of <strong style={{ color: '#1a4b6d' }}>Bangladesh Garments Manufacturers and 
                Exporters' Association (BGMEA)</strong>, we envision a sustainable future 
                of RMG products using technology and a smooth international market.
              </p>
              <div style={{
                marginTop: isMobile ? '0.8rem' : '1.5rem',
                paddingTop: isMobile ? '0.8rem' : '1.5rem',
                borderTop: '2px solid #e0eaf3',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.8rem'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: isMobile ? '0.5rem' : '1rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <img 
                    src="https://ui-avatars.com/api/?name=Nigher+Sultana&size=80&background=1a4b6d&color=fff&bold=true"
                    alt="Nigher Sultana"
                    style={{
                      width: isMobile ? '50px' : '60px',
                      height: isMobile ? '50px' : '60px',
                      borderRadius: '50%',
                      border: '3px solid #1a4b6d'
                    }}
                  />
                  <div>
                    <p style={{
                      fontSize: isMobile ? '1rem' : '1.3rem',
                      fontWeight: 600,
                      color: '#0b2b3f'
                    }}>Nigher Sultana</p>
                    <p style={{
                      fontSize: isMobile ? '0.8rem' : '1rem',
                      color: '#3b6e8f'
                    }}>Chairman, W. Apparels Ltd.</p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>
                  <span style={{
                    background: '#e0eaf3',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    color: '#1a4b6d'
                  }}>🏆 32+ Years</span>
                  <span style={{
                    background: '#e0eaf3',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    color: '#1a4b6d'
                  }}>⭐ Visionary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Stats */}
      <footer style={{
        display: 'grid',
        gridTemplateColumns: isMobile 
          ? 'repeat(2, 1fr)' 
          : isTablet 
            ? 'repeat(3, 1fr)' 
            : 'repeat(5, 1fr)',
        gap: isMobile ? '0.8rem' : '1.5rem',
        background: 'white',
        padding: isMobile ? '1.2rem' : isTablet ? '2rem' : '2.5rem',
        borderRadius: isMobile ? '1rem' : '1.5rem',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e8f0f8',
        marginTop: '1rem',
        animation: 'fadeInUp 0.8s ease 0.8s both'
      }}>
        <div style={{ 
          textAlign: 'center', 
          padding: isMobile ? '0.3rem' : '0.5rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '0.2rem'
          }}>📅</span>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.2rem' : '1.8rem',
            fontWeight: 700,
            color: '#1a4b6d',
            marginBottom: '0.2rem'
          }}>1992</span>
          <span style={{
            fontSize: isMobile ? '0.65rem' : '0.9rem',
            color: '#3b6e8f',
            fontWeight: 500
          }}>Year Founded</span>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: isMobile ? '0.3rem' : '0.5rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '0.2rem'
          }}>🏆</span>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.2rem' : '1.8rem',
            fontWeight: 700,
            color: '#1a4b6d',
            marginBottom: '0.2rem'
          }}>32+</span>
          <span style={{
            fontSize: isMobile ? '0.65rem' : '0.9rem',
            color: '#3b6e8f',
            fontWeight: 500
          }}>Years of Excellence</span>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: isMobile ? '0.3rem' : '0.5rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '0.2rem'
          }}>🌍</span>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.2rem' : '1.8rem',
            fontWeight: 700,
            color: '#1a4b6d',
            marginBottom: '0.2rem'
          }}>Global</span>
          <span style={{
            fontSize: isMobile ? '0.65rem' : '0.9rem',
            color: '#3b6e8f',
            fontWeight: 500
          }}>Export Worldwide</span>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: isMobile ? '0.3rem' : '0.5rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '0.2rem'
          }}>🏅</span>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.2rem' : '1.8rem',
            fontWeight: 700,
            color: '#1a4b6d',
            marginBottom: '0.2rem'
          }}>BGMEA</span>
          <span style={{
            fontSize: isMobile ? '0.65rem' : '0.9rem',
            color: '#3b6e8f',
            fontWeight: 500
          }}>Member Alliance</span>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: isMobile ? '0.3rem' : '0.5rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
          gridColumn: isMobile ? 'span 2' : 'auto'
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '0.2rem'
          }}>👥</span>
          <span style={{
            display: 'block',
            fontSize: isMobile ? '1.2rem' : '1.8rem',
            fontWeight: 700,
            color: '#1a4b6d',
            marginBottom: '0.2rem'
          }}>1000+</span>
          <span style={{
            fontSize: isMobile ? '0.65rem' : '0.9rem',
            color: '#3b6e8f',
            fontWeight: 500
          }}>Employees</span>
        </div>
      </footer>

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
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Mobile Responsive Fixes */
        @media (max-width: 480px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </div>
    </Box>
  );
};

export default CorporateViewpoint;