import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import InternshipListings from './components/InternshipListings';
import Companies from './components/Companies';
import Students from './components/Students';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <InternshipListings />
      <Companies />
      <Students />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
