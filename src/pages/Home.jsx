import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Partners from '../components/Partners';
import DreamInternship from '../components/DreamInternship';
import TaskManagementPlatform from '../components/TaskManagementPlatform';
import TechInstructor from '../components/TechInstructor';
import ProfessionalDevelopment from '../components/ProfessionalDevelopment';
import AIMockInterviews from '../components/AIMockInterviews';
import HowItWorks from '../components/HowItWorks';
import AICareerCoach from '../components/AICareerCoach';
import FinalCTA from '../components/FinalCTA';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Partners />
      <DreamInternship />
      <TaskManagementPlatform />
      <TechInstructor />
      <ProfessionalDevelopment />
      <AIMockInterviews />
      <HowItWorks />
      <AICareerCoach />
      <FinalCTA />
      <Testimonials />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;


