import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Partners from '../components/Partners';
import InternshipCards from '../components/InternshipCards';
import TaskManagementPlatform from '../components/TaskManagementPlatform';
import TechInstructor from '../components/TechInstructor';
import ProfessionalDevelopment from '../components/ProfessionalDevelopment';
import AIMockInterviews from '../components/AIMockInterviews';
import HowItWorks from '../components/HowItWorks';
import AICareerCoach from '../components/AICareerCoach';
import FinalCTA from '../components/FinalCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <Partners />
      <InternshipCards />
      <TaskManagementPlatform />
      <TechInstructor />
      <ProfessionalDevelopment />
      <AIMockInterviews />
      <HowItWorks />
      <AICareerCoach />
      <FinalCTA />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;