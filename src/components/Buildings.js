import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Box,
  Chip,
  useTheme,
  useMediaQuery,
  CardMedia,
  IconButton,
  Button,
  Divider,
  Fade,
  Zoom,
  Stack,
  LinearProgress,
  Tooltip,
  Paper,
} from '@mui/material';
import {
  Business,
  CheckCircle,
  PeopleAlt,
  LocationOn,
  TrendingUp,
  Share,
  BookmarkBorder,
  Bookmark,
  ArrowForward,
  Email,
  Phone,
  Apartment,
  Bathtub,
  SquareFoot,
  AccessTime,
  Verified,
  CalendarToday,
  Build,
  MeetingRoom,
  Elevator,
  LocalParking,
  Security,
  Wifi,
  Coffee,
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)',
  border: '1px solid rgba(255,255,255,0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-12px) scale(1.01)',
    boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)',
    '& .card-image': {
      transform: 'scale(1.08)',
    },
    '& .card-overlay': {
      opacity: 0.7,
    },
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
  },
}));

const FloatingBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  zIndex: 2,
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
}));

const GradientAvatar = styled(Avatar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  width: 44,
  height: 44,
  fontSize: '1rem',
  fontWeight: 700,
  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1) rotate(-5deg)',
  },
}));

const AnimatedIconWrapper = styled(Box)({
  animation: `${float} 3s ease-in-out infinite`,
});

const GlassCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.8)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
  },
}));

const DepartmentBadge = styled(Chip)(({ theme }) => ({
  borderRadius: '8px',
  fontWeight: 600,
  '& .MuiChip-icon': {
    fontSize: '1rem',
  },
}));

// Office Building Data
const buildingData = [
  {
    id: 1,
    name: 'W. Apparels Ltd. - Head Office',
    image: 'https://picsum.photos/seed/office1/800/400',
    department: 'Corporate',
    floor: '3rd Floor',
    address: '123 Fashion Street, NY',
    established: '2010',
    totalEmployees: 45,
    meetingRooms: 4,
    cabins: 8,
    workstations: 35,
    amenities: ['WiFi', 'Parking', 'Security', 'Cafeteria', 'Conference Room', 'Elevator'],
    occupancyRate: 92,
    verified: true,
    departments: ['Executive', 'Design', 'Production', 'HR', 'Finance'],
    headOfDepartment: 'John Doe',
    occupants: [
      { name: 'John Doe', role: 'CEO', email: 'john@wapparels.com', phone: '+1 234 567 890', department: 'Executive' },
      { name: 'Jane Smith', role: 'Design Director', email: 'jane@wapparels.com', phone: '+1 234 567 891', department: 'Design' },
      { name: 'Robert Johnson', role: 'Production Head', email: 'robert@wapparels.com', phone: '+1 234 567 892', department: 'Production' },
      { name: 'Sarah Wilson', role: 'HR Manager', email: 'sarah@wapparels.com', phone: '+1 234 567 893', department: 'HR' },
      { name: 'Emily Davis', role: 'Finance Controller', email: 'emily@wapparels.com', phone: '+1 234 567 894', department: 'Finance' },
    ],
    status: 'Active',
    buildingType: 'Corporate Office',
  },
  {
    id: 2,
    name: 'Quality Apparels - Production Unit',
    image: 'https://picsum.photos/seed/office2/800/400',
    department: 'Production',
    floor: '5th Floor',
    address: '456 Garment Avenue, LA',
    established: '2012',
    totalEmployees: 78,
    meetingRooms: 2,
    cabins: 6,
    workstations: 70,
    amenities: ['WiFi', 'Parking', 'Security', 'Cafeteria', 'Elevator', 'Loading Dock'],
    occupancyRate: 85,
    verified: true,
    departments: ['Production', 'Quality Control', 'Supply Chain', 'Maintenance'],
    headOfDepartment: 'Michael Brown',
    occupants: [
      { name: 'Michael Brown', role: 'Production Manager', email: 'michael@qualityapparels.com', phone: '+1 234 567 895', department: 'Production' },
      { name: 'Anna Martinez', role: 'Quality Control Head', email: 'anna@qualityapparels.com', phone: '+1 234 567 896', department: 'Quality Control' },
      { name: 'Chris Taylor', role: 'Supply Chain Lead', email: 'chris@qualityapparels.com', phone: '+1 234 567 897', department: 'Supply Chain' },
      { name: 'David Lee', role: 'Maintenance Supervisor', email: 'david@qualityapparels.com', phone: '+1 234 567 898', department: 'Maintenance' },
    ],
    status: 'Active',
    buildingType: 'Production Facility',
  },
  {
    id: 3,
    name: '3NA Fashion - Design Studio',
    image: 'https://picsum.photos/seed/office3/800/400',
    department: 'Design',
    floor: '2nd Floor',
    address: '789 Design Boulevard, SF',
    established: '2015',
    totalEmployees: 32,
    meetingRooms: 3,
    cabins: 5,
    workstations: 24,
    amenities: ['WiFi', 'Parking', 'Security', 'Conference Room', 'Creative Studio'],
    occupancyRate: 78,
    verified: false,
    departments: ['Creative', 'Design', 'Marketing', 'Admin'],
    headOfDepartment: 'Emma Wilson',
    occupants: [
      { name: 'Emma Wilson', role: 'Creative Director', email: 'emma@3nafashion.com', phone: '+1 234 567 899', department: 'Creative' },
      { name: 'Oliver Brown', role: 'Senior Designer', email: 'oliver@3nafashion.com', phone: '+1 234 567 900', department: 'Design' },
      { name: 'Sophia Martinez', role: 'Marketing Head', email: 'sophia@3nafashion.com', phone: '+1 234 567 901', department: 'Marketing' },
    ],
    status: 'Active',
    buildingType: 'Design Studio',
  },
  {
    id: 4,
    name: 'Fashion Hub - Showroom',
    image: 'https://picsum.photos/seed/office4/800/400',
    department: 'Sales',
    floor: '1st Floor',
    address: '321 Retail Avenue, NY',
    established: '2018',
    totalEmployees: 25,
    meetingRooms: 2,
    cabins: 4,
    workstations: 19,
    amenities: ['WiFi', 'Parking', 'Security', 'Showroom', 'Customer Lounge'],
    occupancyRate: 70,
    verified: true,
    departments: ['Sales', 'Customer Service', 'Visual Merchandising'],
    headOfDepartment: 'Lisa Chen',
    occupants: [
      { name: 'Lisa Chen', role: 'Sales Manager', email: 'lisa@fashionhub.com', phone: '+1 234 567 902', department: 'Sales' },
      { name: 'Mark Wilson', role: 'Customer Service Lead', email: 'mark@fashionhub.com', phone: '+1 234 567 903', department: 'Customer Service' },
    ],
    status: 'Active',
    buildingType: 'Showroom',
  },
  {
    id: 5,
    name: 'Tech Textiles - R&D Center',
    image: 'https://picsum.photos/seed/office5/800/400',
    department: 'R&D',
    floor: '4th Floor',
    address: '555 Innovation Drive, SF',
    established: '2020',
    totalEmployees: 40,
    meetingRooms: 5,
    cabins: 7,
    workstations: 28,
    amenities: ['WiFi', 'Parking', 'Security', 'Lab', 'Library', 'Conference Room'],
    occupancyRate: 88,
    verified: true,
    departments: ['Research', 'Development', 'Testing', 'Innovation'],
    headOfDepartment: 'Dr. Alan Turing',
    occupants: [
      { name: 'Dr. Alan Turing', role: 'Head of R&D', email: 'alan@techtextiles.com', phone: '+1 234 567 904', department: 'Research' },
      { name: 'Grace Hopper', role: 'Senior Developer', email: 'grace@techtextiles.com', phone: '+1 234 567 905', department: 'Development' },
      { name: 'Ada Lovelace', role: 'Testing Lead', email: 'ada@techtextiles.com', phone: '+1 234 567 906', department: 'Testing' },
    ],
    status: 'Active',
    buildingType: 'R&D Center',
  },
  {
    id: 6,
    name: 'Global Logistics - Warehouse',
    image: 'https://picsum.photos/seed/office6/800/400',
    department: 'Logistics',
    floor: 'Ground Floor',
    address: '777 Distribution Road, LA',
    established: '2016',
    totalEmployees: 65,
    meetingRooms: 1,
    cabins: 3,
    workstations: 61,
    amenities: ['WiFi', 'Parking', 'Security', 'Loading Dock', 'Fleet Management'],
    occupancyRate: 95,
    verified: true,
    departments: ['Logistics', 'Inventory', 'Shipping', 'Receiving'],
    headOfDepartment: 'Sam Richards',
    occupants: [
      { name: 'Sam Richards', role: 'Logistics Manager', email: 'sam@globallogistics.com', phone: '+1 234 567 907', department: 'Logistics' },
      { name: 'Patricia Green', role: 'Inventory Head', email: 'patricia@globallogistics.com', phone: '+1 234 567 908', department: 'Inventory' },
      { name: 'Tom Harris', role: 'Shipping Supervisor', email: 'tom@globallogistics.com', phone: '+1 234 567 909', department: 'Shipping' },
      { name: 'Maria Santos', role: 'Receiving Lead', email: 'maria@globallogistics.com', phone: '+1 234 567 910', department: 'Receiving' },
    ],
    status: 'Active',
    buildingType: 'Warehouse',
  },
];

// Main Component
const BuildingsAndOccupants = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [bookmarked, setBookmarked] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleBookmark = (id) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getDepartmentColor = (dept) => {
    const colors = {
      'Executive': '#6366f1',
      'Design': '#ec4899',
      'Production': '#f59e0b',
      'HR': '#10b981',
      'Finance': '#3b82f6',
      'Quality Control': '#8b5cf6',
      'Supply Chain': '#14b8a6',
      'Maintenance': '#f97316',
      'Creative': '#8b5cf6',
      'Marketing': '#ef4444',
      'Admin': '#6b7280',
      'Sales': '#f43f5e',
      'Customer Service': '#06b6d4',
      'Visual Merchandising': '#8b5cf6',
      'Research': '#0ea5e9',
      'Development': '#22c55e',
      'Testing': '#eab308',
      'Innovation': '#a855f7',
      'Logistics': '#f97316',
      'Inventory': '#14b8a6',
      'Shipping': '#3b82f6',
      'Receiving': '#8b5cf6',
    };
    return colors[dept] || '#6366f1';
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 6 } }}>
      {/* Enhanced Header */}
      <Box sx={{ mb: { xs: 3, sm: 4, md: 6 }, position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 2, sm: 3 },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: { xs: 1, sm: 2 },
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
              }}
            >
              <AnimatedIconWrapper>
                <Business sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }, color: '#6366f1' }} />
              </AnimatedIconWrapper>
              Office Buildings & Teams
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: { xs: '100%', md: 700 },
                fontWeight: 400,
                mt: 1,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Manage and view all office buildings, departments, and team members across our organization
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <Button
              variant="contained"
              startIcon={<PeopleAlt />}
              sx={{
                borderRadius: '50px',
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 1.5 },
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(99, 102, 241, 0.4)',
                },
              }}
            >
              View All Teams
            </Button>
          </Box>
        </Box>

        {/* Statistics Banner */}
        <Box
          sx={{
            mt: { xs: 3, sm: 4, md: 5 },
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr 1fr', 
              sm: 'repeat(3, 1fr)',
              md: 'repeat(5, 1fr)' 
            },
            gap: { xs: 1.5, sm: 2 },
          }}
        >
          {[
            { label: 'Office Buildings', value: '6', icon: Business },
            { label: 'Total Employees', value: '285', icon: PeopleAlt },
            { label: 'Departments', value: '24', icon: Apartment },
            { label: 'Meeting Rooms', value: '17', icon: MeetingRoom },
            { label: 'Avg. Occupancy', value: '85%', icon: TrendingUp },
          ].map((stat, index) => (
            <GlassCard
              key={index}
              sx={{
                textAlign: 'center',
                p: { xs: 1.5, sm: 2, md: 3 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                },
              }}
            >
              <stat.icon sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, color: '#6366f1', mb: { xs: 0.5, sm: 1 } }} />
              <Typography variant="h4" fontWeight={700} color="primary" sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.875rem' } }}>
                {stat.label}
              </Typography>
            </GlassCard>
          ))}
        </Box>
      </Box>

      {/* Cards Grid - 3 per row with responsive breakpoints */}
      <Grid container spacing={{ xs: 2, sm: 2, md: 3, lg: 4 }}>
        {buildingData.map((building, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            key={building.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
              <StyledCard
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '100%', md: 420 },
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  height: '100%',
                }}
                onClick={() => setExpandedCard(expandedCard === building.id ? null : building.id)}
              >
                {/* Image Section */}
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <StyledCardMedia
                    className="card-image"
                    image={building.image}
                    title={building.name}
                  />
                  <Box 
                    className="card-overlay" 
                    sx={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)', 
                      opacity: 0, 
                      transition: 'opacity 0.6s ease' 
                    }} 
                  />
                  
                  {/* Floating Badges */}
                  <FloatingBadge>
                    {building.verified && (
                      <Tooltip title="Verified Office">
                        <Chip
                          icon={<Verified sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }} />}
                          label="Verified"
                          sx={{
                            backgroundColor: 'rgba(34, 197, 94, 0.9)',
                            color: 'white',
                            fontWeight: 700,
                            backdropFilter: 'blur(10px)',
                            height: { xs: 20, sm: 24, md: 28 },
                            fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' },
                          }}
                        />
                      </Tooltip>
                    )}
                    <Chip
                      icon={<Business sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }} />}
                      label={building.buildingType}
                      sx={{
                        backgroundColor: 'rgba(99, 102, 241, 0.9)',
                        color: 'white',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                        height: { xs: 20, sm: 24, md: 28 },
                        fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' },
                      }}
                    />
                  </FloatingBadge>

                  {/* Building Info Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: { xs: 12, sm: 16, md: 20 },
                      left: { xs: 12, sm: 16, md: 20 },
                      right: { xs: 12, sm: 16, md: 20 },
                      zIndex: 1,
                      color: 'white',
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      fontWeight={700} 
                      sx={{ 
                        textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' }
                      }}
                    >
                      {building.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                      <LocationOn sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }, opacity: 0.8 }} />
                      <Typography variant="body2" sx={{ opacity: 0.9, fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.875rem' } }}>
                        {building.address}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5, mt: { xs: 0.5, sm: 1 }, flexWrap: 'wrap' }}>
                      <Chip
                        label={building.floor}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          backdropFilter: 'blur(5px)',
                          height: { xs: 18, sm: 20, md: 24 },
                          fontSize: { xs: '0.45rem', sm: '0.55rem', md: '0.7rem' },
                        }}
                      />
                      <Chip
                        label={`${building.totalEmployees} Employees`}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(99,102,241,0.3)',
                          color: 'white',
                          backdropFilter: 'blur(5px)',
                          height: { xs: 18, sm: 20, md: 24 },
                          fontSize: { xs: '0.45rem', sm: '0.55rem', md: '0.7rem' },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 }, flex: 1 }}>
                  {/* Header with actions */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 1.5, sm: 2 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
                      <Chip
                        icon={<CheckCircle sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }} />}
                        label="Active"
                        size="small"
                        color="success"
                        sx={{ fontWeight: 600, height: { xs: 20, sm: 24, md: 28 }, fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}
                      />
                      <Chip
                        label={`${building.occupancyRate}% Occupied`}
                        size="small"
                        variant="outlined"
                        sx={{ height: { xs: 20, sm: 24, md: 28 }, fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}
                      />
                    </Box>
                    <Box>
                      <Tooltip title={bookmarked.includes(building.id) ? 'Remove bookmark' : 'Bookmark'}>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(building.id);
                          }}
                          sx={{ color: bookmarked.includes(building.id) ? '#6366f1' : 'text.secondary', padding: { xs: 0.5, sm: 0.75 } }}
                        >
                          {bookmarked.includes(building.id) ? <Bookmark sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }} /> : <BookmarkBorder sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }} />}
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Share">
                        <IconButton size="small" onClick={(e) => e.stopPropagation()} sx={{ padding: { xs: 0.5, sm: 0.75 } }}>
                          <Share sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>

                  {/* Office Details */}
                  <Box sx={{ mb: { xs: 1, sm: 1.5, md: 2 } }}>
                    <Grid container spacing={0.5}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                          <CalendarToday sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}>
                            Est. {building.established}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                          <MeetingRoom sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}>
                            {building.meetingRooms} Rooms
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  {/* Department Chips */}
                  <Box sx={{ display: 'flex', gap: 0.3, flexWrap: 'wrap', mb: { xs: 1, sm: 1.5, md: 2 } }}>
                    {building.departments.slice(0, isMobile ? 2 : 3).map((dept, idx) => (
                      <DepartmentBadge
                        key={idx}
                        label={dept}
                        size="small"
                        sx={{
                          backgroundColor: `${getDepartmentColor(dept)}20`,
                          color: getDepartmentColor(dept),
                          borderColor: getDepartmentColor(dept),
                          height: { xs: 18, sm: 20, md: 24 },
                          fontSize: { xs: '0.45rem', sm: '0.55rem', md: '0.65rem' },
                        }}
                      />
                    ))}
                    {building.departments.length > (isMobile ? 2 : 3) && (
                      <Chip
                        label={`+${building.departments.length - (isMobile ? 2 : 3)}`}
                        size="small"
                        variant="outlined"
                        sx={{ height: { xs: 18, sm: 20, md: 24 }, fontSize: { xs: '0.45rem', sm: '0.55rem', md: '0.65rem' } }}
                      />
                    )}
                  </Box>

                  {/* Amenities */}
                  <Box sx={{ display: 'flex', gap: 0.3, flexWrap: 'wrap', mb: { xs: 1, sm: 1.5, md: 2 } }}>
                    {building.amenities.slice(0, isMobile ? 3 : 4).map((amenity, idx) => (
                      <Chip
                        key={idx}
                        label={amenity}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          fontSize: { xs: '0.45rem', sm: '0.5rem', md: '0.6rem' }, 
                          height: { xs: 16, sm: 18, md: 20 } 
                        }}
                      />
                    ))}
                    {building.amenities.length > (isMobile ? 3 : 4) && (
                      <Chip
                        label={`+${building.amenities.length - (isMobile ? 3 : 4)}`}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: { xs: '0.45rem', sm: '0.5rem', md: '0.6rem' }, height: { xs: 16, sm: 18, md: 20 } }}
                      />
                    )}
                  </Box>

                  <Divider sx={{ my: { xs: 1, sm: 1.5, md: 2 } }} />

                  {/* Occupants Section */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 }, mb: { xs: 1, sm: 1.5 } }}>
                      <PeopleAlt color="primary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }} />
                      <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>
                        Team Members ({building.occupants.length})
                      </Typography>
                    </Box>

                    <Stack spacing={{ xs: 0.75, sm: 1, md: 1.5 }}>
                      {building.occupants.slice(0, isMobile ? 2 : 3).map((occupant, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1, sm: 1.5 },
                            p: { xs: 0.5, sm: 0.75, md: 1 },
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(99, 102, 241, 0.05)',
                            },
                          }}
                        >
                          <GradientAvatar sx={{ width: { xs: 28, sm: 32, md: 44 }, height: { xs: 28, sm: 32, md: 44 }, fontSize: { xs: '0.6rem', sm: '0.7rem', md: '1rem' } }}>
                            {occupant.name.split(' ').map(n => n[0]).join('')}
                          </GradientAvatar>
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="body2" fontWeight={600} noWrap sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.875rem' } }}>
                              {occupant.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" display="block" sx={{ fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.75rem' } }}>
                              {occupant.role}
                            </Typography>
                          </Box>
                          <Chip
                            label={occupant.department}
                            size="small"
                            sx={{
                              backgroundColor: `${getDepartmentColor(occupant.department)}20`,
                              color: getDepartmentColor(occupant.department),
                              fontSize: { xs: '0.4rem', sm: '0.5rem', md: '0.6rem' },
                              height: { xs: 14, sm: 16, md: 20 },
                              display: { xs: 'none', sm: 'flex' },
                            }}
                          />
                        </Box>
                      ))}
                      {building.occupants.length > (isMobile ? 2 : 3) && (
                        <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}>
                          + {building.occupants.length - (isMobile ? 2 : 3)} more team members
                        </Typography>
                      )}
                    </Stack>
                  </Box>

                  {/* Expandable Details */}
                  {expandedCard === building.id && (
                    <Fade in={true}>
                      <Box sx={{ mt: { xs: 1, sm: 1.5, md: 2 }, p: { xs: 1, sm: 1.5, md: 2 }, bgcolor: 'rgba(99, 102, 241, 0.04)', borderRadius: 2 }}>
                        <Typography variant="subtitle2" fontWeight={600} gutterBottom sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.875rem' } }}>
                          Office Details
                        </Typography>
                        <Grid container spacing={0.5}>
                          <Grid item xs={6}>
                            <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}>
                              <Apartment sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, mr: 0.3 }} />
                              Head: {building.headOfDepartment}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}>
                              <Build sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, mr: 0.3 }} />
                              Cabins: {building.cabins}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}>
                              <MeetingRoom sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, mr: 0.3 }} />
                              Workstations: {building.workstations}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' } }}>
                              <TrendingUp sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, mr: 0.3 }} />
                              Total: {building.totalEmployees}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Fade>
                  )}

                  {/* View More Button */}
                  <Button
                    fullWidth
                    variant="text"
                    size="small"
                    sx={{
                      mt: { xs: 1, sm: 1.5, md: 2 },
                      color: 'primary.main',
                      fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.875rem' },
                      '&:hover': {
                        backgroundColor: 'rgba(99, 102, 241, 0.05)',
                      },
                    }}
                    endIcon={<ArrowForward sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === building.id ? null : building.id);
                    }}
                  >
                    {expandedCard === building.id ? 'Show Less' : 'View More Details'}
                  </Button>
                </CardContent>
              </StyledCard>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BuildingsAndOccupants;