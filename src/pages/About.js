import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
} from '@mui/material';
import {
  Factory,
  People,
  TrendingUp,
  Security,
  Assignment,
  Build,
  CheckCircle,
} from '@mui/icons-material';

const About = () => {
  const stats = [
    { icon: <Factory fontSize="large" />, number: '32+', label: 'Years of Experience' },
    { icon: <People fontSize="large" />, number: '500+', label: 'Team Members' },
    { icon: <TrendingUp fontSize="large" />, number: '50+', label: 'Export Countries' },
    { icon: <Security fontSize="large" />, number: '100%', label: 'Quality Assurance' },
  ];

  const values = [
    'Quality First',
    'Customer Satisfaction',
    'Innovation',
    'Sustainability',
    'Integrity',
    'Teamwork',
  ];

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ backgroundColor: '#0a2b4a', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Learn more about our journey and commitment to excellence
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Corporate Viewpoint */}
        <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="#0a2b4a">
            Corporate Viewpoint
          </Typography>
          <Typography variant="body1" paragraph>
            W. Apparels Ltd. is among one of the most successful garment manufacturers in Bangladesh,
            a country with great potential in the field of garment manufacturing. It started its
            journey in the year 1992. W. Apparels Ltd. has passed over 32 successful years of
            accomplishment, aiming to lead the competitive knit/Woven/Non-Woven wear-organization of
            Bangladesh.
          </Typography>
          <Typography variant="body1" paragraph>
            It has already recognized each step of its value-chain to match the dynamism of the
            fashion market. W. Apparels Ltd. has expanded its capacity, developed a skilled workforce
            and introduced integrated technologies, to remain globally up-to-date. It is truly an
            organization with a glorious past and a bright future.
          </Typography>
        </Paper>

        {/* Message from Chairman */}
        <Paper elevation={2} sx={{ p: 4, mb: 6, backgroundColor: '#e3f2fd' }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="#0a2b4a">
            Message from the Chairman
          </Typography>
          <Typography variant="body1" paragraph>
            Starting as W. Apparels Ltd. in 1992 and further expanding into W. Apparels Ltd. in 2019,
            we are a garments industry company maintaining a consistent contribution in readymade
            garments export. Our team comprises of well experienced promoters, quality control agents,
            machinists, commercial supervisors and production operators.
          </Typography>
          <Typography variant="body1" paragraph>
            Our goals are to maintain better foreign relations and establish a research intensive
            environment for garments products, maintaining consistent customer satisfaction and using
            updated machinery. Under the alliance of Bangladesh Garments Manufacturers and Exporters
            Association (BGMEA), we envision a sustainable future of RMG products using technology
            and a smooth international market.
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 56, height: 56, bgcolor: '#0a2b4a' }}>
              <People />
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Chairman
              </Typography>
              <Typography variant="body2" color="textSecondary">
                W. Apparels Ltd.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Stats */}
        <Typography variant="h4" gutterBottom fontWeight="bold" color="#0a2b4a" align="center">
          Our Impact
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card sx={{ textAlign: 'center', py: 3, height: '100%' }}>
                <CardContent>
                  <Box sx={{ color: '#0a2b4a', mb: 1 }}>{stat.icon}</Box>
                  <Typography variant="h4" fontWeight="bold" color="#0a2b4a">
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Values */}
        <Typography variant="h4" gutterBottom fontWeight="bold" color="#0a2b4a" align="center">
          Our Values
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 4 }}>
          {values.map((value, index) => (
            <Chip
              key={index}
              icon={<CheckCircle />}
              label={value}
              color="primary"
              sx={{ fontSize: '1rem', py: 2, px: 1 }}
            />
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Factory Components Details */}
        <Typography variant="h4" gutterBottom fontWeight="bold" color="#0a2b4a" align="center">
          Our Factory Components
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: <Assignment />, title: 'Fabric Inspection', desc: 'Quality control of incoming materials' },
            { icon: <Build />, title: 'Sewing', desc: 'Precision stitching and assembly' },
            { icon: <TrendingUp />, title: 'Cutting', desc: 'Accurate fabric cutting' },
            { icon: <Security />, title: 'Quality Assurance', desc: 'Rigorous quality checks' },
            { icon: <Factory />, title: 'Sustainability', desc: 'Eco-friendly practices' },
            { icon: <Assignment />, title: 'Packaging', desc: 'Secure product packaging' },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ p: 3, height: '100%', '&:hover': { boxShadow: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Box sx={{ color: '#0a2b4a' }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;