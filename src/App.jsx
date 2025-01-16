import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SyncLoader } from "react-spinners";
import SplashScreen from "./components/splashScreen/SplashScreen";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const WebDevelopment = lazy(() => import("./services/web-development"));
const AppDevelopment = lazy(() => import("./services/app-development"));
const DigitalMarketing = lazy(() => import("./services/digital-marketing"));
const TechIT = lazy(() => import("./services/tech-it-solutions"));
const StaffingSolutions = lazy(() => import("./services/staffing-solutions"));

function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    const splashShownThisSession = sessionStorage.getItem('splashShownThisSession');

    if (!hasVisitedBefore || !splashShownThisSession) {
      setShowSplash(true);
      localStorage.setItem('hasVisitedBefore', 'true');
      sessionStorage.setItem('splashShownThisSession', 'true');
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <div className="mx-auto">
          <Router>
            <Navbar />
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <SyncLoader color="#9234eb" size={15} />
                </div>
              }
            >
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/app-development" element={<AppDevelopment />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/services/tech-it-solutions" element={<TechIT />} />
                <Route path="/services/staffing-solutions" element={<StaffingSolutions />} />
              </Routes>
            </Suspense>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;

