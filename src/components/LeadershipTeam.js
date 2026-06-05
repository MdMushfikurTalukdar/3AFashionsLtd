// LeadershipTeam.js
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  alpha,
  useTheme,
  Fade,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Divider
} from '@mui/material';
import {
  LinkedIn,
  Twitter,
  Email,
  Close,
  ArrowForward,
    BusinessCenter,
    DesignServices,
    Engineering,
} from '@mui/icons-material';

const LeadershipTeam = () => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  
  const teamMembers = [
    {
      name: 'Shahrish Shuvo',
      role: 'Managing Director',
      experience: '15 years in Construction and civil Engineering',
      bio: 'Shahrish Shuvo is the Founder  of Shahrish Shuvo Engineering P.C. (SSE), which he established in 2015. A licensed Professional Engineer in New York, Connecticut, Maryland, and Pennsylvania, he brings extensive experience in planning, design, construction inspection, and project management. His expertise includes preparing and reviewing project specifications, drawings, and comprehensive reports. Mr. Shuvo\'s academic background includes a Bachelor of Science in Civil Engineering from the Bangladesh University of Engineering and Technology (BUET) and a Master\'s degree in Civil Engineering from the City College of New York. He completed his higher secondary education at Notre Dame College, Dhaka, and his secondary education at Government Laboratory High School, Dhaka. As the leader of SSE, Shahrish is responsible for guiding the company\'s mission, vision, and strategic growth. He is dedicated to fostering a culture of "Engineering Excellence" through better design, and he believes in the core values of being innovative, responsive, and efficient. His leadership is marked by a deep appreciation for his team, recognizing that surrounding himself with knowledgeable, passionate, and driven professionals is key to the firm\'s success and financial stability.',
      expertise: [
  'Civil Engineering Planning & Design',
  'Construction Inspection & Supervision',
  'Project Management & Coordination',
  'Structural and Infrastructure Engineering',
  'Preparation & Review of Specifications, Drawings, and Reports',
  'Quality Assurance & Compliance',
  'Leadership & Strategic Growth',
  'Innovative, Responsive, and Efficient Engineering Solutions',
  'Team Building & Professional Development'
],
      image: 'https://i.ibb.co.com/x8zpRQJj/shahrish-shuvo.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/m-m-khalid-murshed-a51953120/?originalSubdomain=bd',
        twitter: '#',
        email: 'sarah@versabuild.com'
      },
      stats: { projects: 120, clients: 95 },
      icon: <DesignServices sx={{ fontSize: 24 }} />
    },
{
      name: 'Mehrav Hosssain Joarder',
      role: 'Chief Architect',
      experience: '15 years in Architect Field',
      bio: "Mehrav Hossain Joarder is an accomplished architect with over a decade of professional experience, specializing in large-scale architectural projects. A Bachelor of Architecture graduate from Khulna University (2011), Mehrav has spent 10 years at Inarch Solution BD, where he has contributed his expertise to various significant architectural and design initiatives. His portfolio includes serving as Project Architect for the Bangladesh Securities and Exchange Commission (BSEC), where he managed the internal layout design for the main building over a two-year period. Mehrav has also made valuable contributions to Bangladesh's infrastructure development through his work on MRT Line 1, where he participated in the land acquisition process, and MRT Line 5, where he was involved in designing the North elevated station.",
      expertise: ["Architectural Design", "Project Management", "Infrastructure Development", "Layout Planning", "Land Acquisition"],
      image: 'https://i.ibb.co.com/xk7Yxbk/Mehrav-Hossain-Joarder.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@versabuild.com'
      },
      stats: { projects: 250, clients: 180 },
      icon: <BusinessCenter sx={{ fontSize: 24 }} />
    },
//     {
//       name: 'Major M M Khalid Murshed (Retd)',
//       role: 'Project Engineer',
//       experience: '19 years of comprehensive experience in military operations',
//       bio: 'Major M M Khalid Murshed (Retd) is a seasoned Project Engineer with over 19 years of distinguished experience in military operations, strategic leadership, and project management. His career spans complex assignments in the Bangladesh Army, United Nations peacekeeping missions, and the private sector, where he has consistently demonstrated expertise in human resources, logistics, administration, and large-scale project execution. As Director of Administration at March Robotics & IT Solution Ltd., he oversees tender processes, stakeholder engagement, and organizational coordination to drive project success. Previously, he served as a Company Commander in the Bangladesh Army, where he led HR and operational functions for 250 personnel, managed budgets, and delivered engineering support for brigade-level operations. His international roles include service as Contingent Operations Officer in South Sudan with the UNMISS and as Base Engineer in Mali under MINUSMA, where he managed deployments, designed camps, implemented security systems, and coordinated with multinational stakeholders. Khalid’s portfolio also includes overseeing infrastructure development projects, such as leading a 15-kilometer embankment construction project, ensuring compliance, quality, and sustainability. Recognized for his ability to thrive in challenging environments, he brings a robust combination of strategic planning, risk management, and engineering acumen. Currently transitioning to the private sector, Khalid is applying his leadership and technical expertise to deliver modern business and technology solutions with a focus on efficiency, resilience, and impact.',
//       expertise: [
//   'Military Operations & Strategic Leadership',
//   'Project & Program Management',
//   'Human Resources & Administration',
//   'Logistics & Supply Chain Management',
//   'Stakeholder Engagement & Coordination',
//   'Combat & Peacekeeping Engineering',
//   'International Operations (UN Missions)',
//   'Security Planning & Risk Management',
//   'Budgeting, Financial Audits & Resource Allocation',
//   'Infrastructure Development & Construction Supervision',
//   'Change Management & Process Improvement',
//   'Team Leadership & Capacity Building'
// ],
//       image: 'https://i.ibb.co.com/0VmDp0Ms/M-M-Khalid-Murshed.jpg',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         email: 'emily@versabuild.com'
//       },
//       stats: { projects: 95, clients: 80 },
//       icon: <Psychology sx={{ fontSize: 24 }} />
//     },

    {
      name: 'MD Saifur Rahman',
      role: 'Chief Operating Officer',
      experience: '15 years in Construction',
      bio: 'MD Saifur Rahman is an accomplished civil engineering professional with over 15 years of experience spanning research, public, and private sector roles. He currently serves as the Managing Director of Octaon, where he leads strategic initiatives and applies his expertise to drive organizational growth and innovation. His earlier career includes serving as a Research Associate at the Centre for Environment and Geographic Information Services (CEGIS), where he contributed to projects focused on environmental sustainability and geographic information systems. Saifur holds a Bachelor of Science in Civil Engineering from Ahsanullah University of Science and Technology, building on a strong academic foundation from Notre Dame College and Government Laboratory High School in Dhaka. Recognized for his leadership, technical acumen, and dedication to engineering excellence, he continues to play a pivotal role in advancing impactful projects in the civil engineering sector.',
      expertise: [
  'Civil Engineering Design & Planning',
  'Strategic Leadership & Management',
  'Infrastructure Development',
  'Environmental & Geographic Information Systems (GIS)',
  'Research & Data Analysis',
  'Public and Private Sector Project Management',
  'Sustainable Engineering Solutions',
  'Team Leadership & Organizational Growth'
]
,
      image: 'https://i.ibb.co.com/hR7CghG3/Saifur-Rahman.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@versabuild.com'
      },
      stats: { projects: 180, clients: 140 },
      icon: <Engineering sx={{ fontSize: 24 }} />
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Calculate responsive grid values
  // const getGridSize = () => {
  //   if (isMobile) return 12;
  //   if (isTablet) return 6;
  //   return 4;
  // };

  return (
    <>
      <Box sx={{ 
        py: 10,
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: `radial-gradient(${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
            opacity: 0.3,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: `radial-gradient(${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
            opacity: 0.2,
          }}
        />
        
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="LEADERSHIP TEAM" 
              color="primary" 
              variant="outlined"
              sx={{ 
                mb: 2, 
                px: 2,
                fontWeight: 'bold',
                background: alpha(theme.palette.primary.main, 0.1),
                fontSize: '0.9rem'
              }} 
            />
            <Typography 
              variant="h3"
              fontWeight="bold" 
              gutterBottom
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Meet Our Leadership
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto', 
                mt: 2,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Our experienced leaders bring decades of expertise and a shared commitment to excellence in every project we undertake.
            </Typography>
          </Box>
          
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <Fade in={isVisible} timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      borderRadius: 4,
                      transition: 'all 0.4s ease',
                      boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                      background: theme.palette.background.paper,
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 16px 48px ${alpha(theme.palette.primary.main, 0.15)}`,
                        '& .member-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .view-profile-btn': {
                          opacity: 1,
                          transform: 'translateY(0)',
                        }
                      },
                    }}
                  >
                    {/* Image Container */}
                    <Box sx={{ 
                      height: 280, 
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <Box
                        className="member-image"
                        component="img"
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(to bottom, transparent 40%, ${theme.palette.background.paper} 100%)`,
                        }}
                      />
                      
                       {/* Stats overlay */}
                       {/*
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          display: 'flex',
                          gap: 2,
                        }}
                      >
                        <Box sx={{ 
                          background: alpha(theme.palette.primary.main, 0.8),
                          color: 'white',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}>
                          <Typography variant="caption" fontWeight="bold">
                            {member.stats.projects}+
                          </Typography>
                          <Typography variant="caption">
                            Projects
                          </Typography>
                        </Box>
                        <Box sx={{ 
                          background: alpha(theme.palette.secondary.main, 0.8),
                          color: 'white',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}>
                          <Typography variant="caption" fontWeight="bold">
                            {member.stats.clients}+
                          </Typography>
                          <Typography variant="caption">
                            Clients
                          </Typography>
                        </Box>
                      </Box> */}
                    </Box>
                    
                    <CardContent sx={{ p: 3, position: 'relative' }}>
                      
                      {/* Name and role */}
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="primary" fontWeight="medium" gutterBottom>
                        {member.role}
                      </Typography>
                      
                      {/* Experience */}
                      <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                        {member.experience}
                      </Typography>
                      
                      <Divider sx={{ my: 2 }} />
                      
                      {/* Expertise chips */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {member.expertise.slice(0, 2).map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              fontSize: '0.6rem',
                              height: 22,
                              background: alpha(theme.palette.primary.main, 0.05),
                              borderColor: alpha(theme.palette.primary.main, 0.2),
                            }}
                          />
                        ))}
                      </Box>
                      
                      {/* Social links and CTA */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                            <LinkedIn fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                            <Twitter fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                            <Email fontSize="small" />
                          </IconButton>
                        </Box>
                        
                        <Button
                          className="view-profile-btn"
                          variant="text"
                          endIcon={<ArrowForward />}
                          onClick={() => handleMemberClick(member)}
                          sx={{
                            opacity: { xs: 1, md: 0 },
                            transform: { xs: 'translateY(0)', md: 'translateY(10px)' },
                            transition: 'all 0.3s ease',
                            color: theme.palette.primary.main,
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                          }}
                        >
                          View Profile
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Member Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            background: theme.palette.background.paper,
            overflow: 'hidden'
          }
        }}
      >
        {selectedMember && (
          <>
            <DialogContent sx={{ p: 0 }}>
              {/* Header with image */}
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to bottom, transparent 40%, ${theme.palette.background.paper} 100%)`,
                  }}
                />
                
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: 'white',
                    bgcolor: alpha(theme.palette.common.black, 0.5),
                    '&:hover': {
                      bgcolor: alpha(theme.palette.common.black, 0.7),
                    }
                  }}
                >
                  <Close />
                </IconButton>
              </Box>
              
              <Box sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                      {selectedMember.name}
                    </Typography>
                    <Typography variant="h6" color="primary" fontWeight="medium" gutterBottom>
                      {selectedMember.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedMember.experience}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ml: 2
                  }}>
                    {selectedMember.icon}
                  </Box>
                </Box>
                
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
                  {selectedMember.bio}
                </Typography>
                
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Areas of Expertise:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                  {selectedMember.expertise.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="outlined"
                      sx={{
                        background: alpha(theme.palette.primary.main, 0.05),
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                      }}
                    />
                  ))}
                </Box>
                
                <Box sx={{ 
                  p: 3, 
                  background: alpha(theme.palette.primary.main, 0.05),
                  borderRadius: 3,
                  display: 'flex',
                  justifyContent: 'space-around',
                  textAlign: 'center'
                }}>
                  {/* <Box>
                    <Typography variant="h4" fontWeight="bold" color="primary">
                      {selectedMember.stats.projects}+
                    </Typography>
                    <Typography variant="body2">
                      Projects
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color="secondary">
                      {selectedMember.stats.clients}+
                    </Typography>
                    <Typography variant="body2">
                      Clients
                    </Typography>
                  </Box> */}
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, borderTop: `1px solid ${theme.palette.divider}` }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <LinkedIn />
                </IconButton>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <Email />
                </IconButton>
              </Box>
              
              <Button 
                variant="contained"
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  }
                }}
              >
                Contact {selectedMember.name.split(' ')[0]}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default LeadershipTeam;