import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SitemapPage from './pages/SitemapPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TeamPage from './pages/TeamPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import './App.css';
import './index.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CareerPage from './pages/CareerPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import Client from './components/About/Client';
import SummerTraining from './components/Training/SummerTraining';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
         <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path='/blogdetails' element={<BlogDetailsPage/>}></Route>
            <Route path='/client' element={<Client/>}></Route>
            <Route path='/summertraining' element={<SummerTraining/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
