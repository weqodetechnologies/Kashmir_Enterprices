import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FireLoader from "./components/ui/Loader";
import ContactUs from "./pages/ContactUs";
import InfraHero from "./pages/Services/Infrastructure";
import CivilPage from "./pages/Services/CivilPage";
import Minig from "./pages/Services/Minig";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <FireLoader />}

      {!loading && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/services/infrastructure" element={<InfraHero />} />
              <Route path="services/civil" element={<CivilPage />} />
              <Route path="/services/mining" element={<Minig />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
