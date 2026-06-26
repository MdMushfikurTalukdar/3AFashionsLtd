import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import Buildings from '../components/Buildings';
import OurClients from '../components/OurClients';
import OurFactory from '../components/OurFactory';
import CorporateViewpoint from '../components/CorporateViewpoint';
import ApparelProducts from '../components/ApparelProducts';
import Facilities from '../components/Facilities';
import Accreditation from '../components/Accreditation';
import ContactSection from '../components/ContactSection';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box id="home" sx={{ overflow: 'hidden' }}></Box>
      <HeroCarousel />
      <section id="about">
        <AboutSection />
      </section>
      <section id="buildings">
        <Buildings />
      </section>
      <section id="factory">
        <OurFactory />
      </section>
      <CorporateViewpoint />
      <ApparelProducts/>
      <OurClients />
      <Facilities />
      <Accreditation />
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};

export default Home;