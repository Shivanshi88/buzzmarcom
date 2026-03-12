import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";

// Service detail pages
import SocialResearchServices from "./Pages/Services/SocialResearchServices";
import MarketResearchServices from "./Pages/Services/MarketResearchServices";
import BusinessConsultancyServices from "./Pages/Services/BusinessConsultancyServices";
import BrandingAdvertisingServices from "./Pages/Services/BrandingAdvertisingServices";
import ITSolutionsServices from "./Pages/Services/ITSolutionsServices";
import ManpowerSupportServices from "./Pages/Services/ManpowerSupportServices";

import BlogDetail from "./Pages/BlogDetail";

// Admin panel pages
import AdminBlogs from "./Pages/AdminBlogs";
import AdminEnquiries from "./Pages/AdminEnquiries";
import AdminLayout from "./Pages/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLogin from "./Pages/AdminLogin";

import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />

          {/* Insights */}
          <Route path="/insights/blogs" element={<Blogs />} />

          {/* Blog detail */}
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Services detail pages */}
          <Route
            path="/services/social-research"
            element={<SocialResearchServices />}
          />
          <Route
            path="/services/market-research"
            element={<MarketResearchServices />}
          />
          <Route
            path="/services/business-consultancy"
            element={<BusinessConsultancyServices />}
          />
          <Route
            path="/services/branding-advertisement"
            element={<BrandingAdvertisingServices />}
          />
          <Route
            path="/services/it-solutions"
            element={<ITSolutionsServices />}
          />
          <Route
            path="/services/manpower-support"
            element={<ManpowerSupportServices />}
          />

          {/* Admin area */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
          </Route>
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
