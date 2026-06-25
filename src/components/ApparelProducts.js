// components/ApparelProducts.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const ApparelProducts = () => {
  const products = [
    {
      id: 1,
      name: "Kid's Tracksuit Jackets",
      category: "Kids Wear",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=500&fit=crop",
      price: "$25.99",
      description: "Comfortable and stylish tracksuit jackets for kids. Made with premium quality fabric.",
      link: "/product/kids-tracksuit-jackets"
    },
    {
      id: 2,
      name: "Kid's Trouser",
      category: "Kids Wear",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=500&fit=crop",
      price: "$19.99",
      description: "Durable and comfortable trousers for active kids. Perfect for everyday wear.",
      link: "/product/kids-trouser"
    },
    {
      id: 3,
      name: "Ladies Blouse",
      category: "Women's Wear",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=500&fit=crop",
      price: "$29.99",
      description: "Elegant and stylish blouses for ladies. Available in various designs and colors.",
      link: "/product/ladies-blouse"
    },
    {
      id: 4,
      name: "Men's Shirt",
      category: "Men's Wear",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
      price: "$34.99",
      description: "Premium quality formal shirts for men. Perfect for office and special occasions.",
      link: "/product/mens-shirt"
    },
    {
      id: 5,
      name: "Kids Dress",
      category: "Kids Wear",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=500&fit=crop",
      price: "$27.99",
      description: "Beautiful and comfortable dresses for little girls. Available in multiple colors.",
      link: "/product/kids-dress"
    },
    {
      id: 6,
      name: "Ladies Skirt",
      category: "Women's Wear",
      image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?w=400&h=500&fit=crop",
      price: "$31.99",
      description: "Stylish and comfortable skirts for modern women. Perfect for any occasion.",
      link: "/product/ladies-skirt"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const intervalRef = useRef(null);

  // Number of items to show based on screen size
  const getItemsToShow = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());
  const totalItems = products.length;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 2000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleProductClick = (product) => {
    window.open(product.link, '_blank');
  };

  const handleInquireNow = (product, e) => {
    e.stopPropagation();
    alert(`Inquiry sent for: ${product.name}`);
  };

  const handleViewGallery = () => {
    window.open('/gallery', '_blank');
  };

  // Get visible products
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % totalItems;
      visible.push({ ...products[index], originalIndex: index });
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();

  // ✅ FIXED: Added proper return statement and removed the Box that was breaking the code
  return (
    <Box id="product" sx={{ overflow: 'hidden' }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '2rem 1rem',
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
        background: 'linear-gradient(135deg, #f8fafc 0%, #eef3f8 100%)',
        minHeight: '100vh'
      }}>
        {/* Header with Animation */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          animation: 'fadeInDown 0.8s ease'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#0b2b3f',
            letterSpacing: '1px',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #0b2b3f, #1a4b6d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s ease infinite'
          }}>
            Apparel Products
          </h1>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #1a4b6d, #3b6e8f)',
            margin: '0 auto',
            borderRadius: '2px',
            animation: 'expandWidth 1s ease'
          }} />
          <p style={{
            color: '#3b6e8f',
            marginTop: '0.5rem',
            fontSize: '1rem',
            animation: 'fadeInUp 0.8s ease 0.2s both'
          }}>
            Discover our premium collection of apparel products
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '1.5rem',
          padding: '0.5rem',
          background: 'white',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
          animation: 'fadeInUp 0.8s ease 0.2s both'
        }}>
          {/* Products Grid with Slide Animation */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${itemsToShow}, 1fr)`,
            gap: '1.5rem',
            padding: '1rem',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {visibleProducts.map((product, index) => (
              <div
                key={`${product.id}-${currentIndex}-${index}`}
                style={{
                  background: 'white',
                  borderRadius: '1.2rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  animation: `
                    ${direction === 'next' ? 'slideInRight' : 'slideInLeft'} 
                    0.6s cubic-bezier(0.4, 0, 0.2, 1) 
                    ${index * 0.1}s both
                  `,
                  transform: 'scale(1)',
                  opacity: 1
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                }}
                onClick={() => handleProductClick(product)}
              >
                {/* Product Image with Zoom Animation */}
                <div style={{
                  position: 'relative',
                  height: '300px',
                  overflow: 'hidden',
                  background: '#f0f4f8'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  {/* Animated Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(26, 75, 109, 0.9)',
                    color: 'white',
                    padding: '0.3rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)',
                    animation: 'bounceIn 0.6s ease',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.background = 'rgba(26, 75, 109, 1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'rgba(26, 75, 109, 0.9)';
                  }}>
                    {product.category}
                  </div>
                  {/* Animated Price Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#1a4b6d',
                    padding: '0.3rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    animation: 'bounceIn 0.6s ease 0.1s both',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.background = '#1a4b6d';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                    e.currentTarget.style.color = '#1a4b6d';
                  }}>
                    {product.price}
                  </div>
                  {/* Animated Overlay on Hover */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(26, 75, 109, 0.4), rgba(45, 106, 143, 0.2))',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }} />
                </div>

                {/* Product Info with Stagger Animation */}
                <div style={{
                  padding: '1.2rem 1.5rem 1.5rem',
                  animation: `fadeInUp 0.5s ease ${index * 0.1 + 0.2}s both`
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#0b2b3f',
                    marginBottom: '0.5rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1a4b6d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#0b2b3f';
                  }}>
                    {product.name}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#3b6e8f',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {product.description}
                  </p>

                  {/* Animated Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <button
                      onClick={(e) => handleInquireNow(product, e)}
                      style={{
                        flex: 1,
                        padding: '0.6rem 1rem',
                        background: 'linear-gradient(135deg, #1a4b6d, #2d6a8f)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        minWidth: '100px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(26, 75, 109, 0.3)';
                        e.currentTarget.style.letterSpacing = '0.5px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.letterSpacing = '0px';
                      }}
                    >
                      <span style={{
                        position: 'relative',
                        zIndex: 1
                      }}>
                        INQUIRE NOW
                      </span>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '0',
                        height: '0',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        transition: 'width 0.6s ease, height 0.6s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.width = '300px';
                        e.currentTarget.style.height = '300px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.width = '0';
                        e.currentTarget.style.height = '0';
                      }} />
                    </button>
                    <button
                      onClick={() => handleProductClick(product)}
                      style={{
                        flex: 1,
                        padding: '0.6rem 1rem',
                        background: 'transparent',
                        color: '#1a4b6d',
                        border: '2px solid #1a4b6d',
                        borderRadius: '0.5rem',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        minWidth: '100px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1a4b6d';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(26, 75, 109, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#1a4b6d';
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Navigation Buttons */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            transform: 'translateY(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 0.5rem',
            pointerEvents: 'none'
          }}>
            <button
              onClick={handlePrev}
              style={{
                pointerEvents: 'auto',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: '#1a4b6d',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                zIndex: 10,
                animation: 'pulse 2s infinite'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1a4b6d';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.15) rotate(-5deg)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(26, 75, 109, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#1a4b6d';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
              }}
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              style={{
                pointerEvents: 'auto',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: '#1a4b6d',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                zIndex: 10,
                animation: 'pulse 2s infinite 1s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1a4b6d';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(26, 75, 109, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#1a4b6d';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
              }}
            >
              ❯
            </button>
          </div>

          {/* Animated Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1.5rem 0 0.5rem',
            marginTop: '0.5rem'
          }}>
            {Array.from({ length: totalItems }).map((_, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  style={{
                    width: isActive ? '35px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: isActive 
                      ? 'linear-gradient(135deg, #1a4b6d, #2d6a8f)'
                      : '#d0dde8',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isActive ? '0 2px 10px rgba(26, 75, 109, 0.3)' : 'none',
                    animation: isActive ? 'pulse 1.5s infinite' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#8aaec9';
                      e.currentTarget.style.transform = 'scale(1.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#d0dde8';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Animated View Gallery Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          animation: 'fadeInUp 0.8s ease 0.6s both'
        }}>
          <button
            onClick={handleViewGallery}
            style={{
              padding: '1rem 3rem',
              background: 'linear-gradient(135deg, #1a4b6d, #2d6a8f)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 20px rgba(26, 75, 109, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              animation: 'pulse 2s infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 75, 109, 0.4)';
              e.currentTarget.style.letterSpacing = '2px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(26, 75, 109, 0.3)';
              e.currentTarget.style.letterSpacing = '0px';
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>
              VIEW PRODUCT GALLERY →
            </span>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              transition: 'left 0.6s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.left = '100%';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.left = '-100%';
            }} />
          </button>
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
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
          
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
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
          
          @keyframes expandWidth {
            from {
              width: 0;
            }
            to {
              width: 80px;
            }
          }
          
          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          @media (max-width: 768px) {
            .carousel-container {
              padding: 0.5rem;
            }
          }

          /* Smooth scrolling for all elements */
          * {
            scroll-behavior: smooth;
          }
        `}</style>
      </div>
    </Box>
  );
};

export default ApparelProducts;