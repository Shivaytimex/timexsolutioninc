import "./App.css";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import { SyncLoader } from "react-spinners";
import NewNavbar from "./components/NewNavbar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import RouteSeo from "./components/RouteSeo";
import { RouteMotionSignal } from "./components/ServiceMotion";
import SplashScreen from "./components/splashScreen/SplashScreen";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const WebDevelopment = lazy(() => import("./services/web-development"));
const AppDevelopment = lazy(() => import("./services/app-development"));
const DigitalMarketing = lazy(() => import("./services/digital-marketing"));
const AiAutomation = lazy(() => import("./services/ai-automation"));
const BackOfficeSupport = lazy(() => import("./services/back-office-support"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const StaffingSolutions = lazy(() => import("./services/staffing-solutions"));
// const Navbar = lazy(() => import("./components/Navbar"));
const ProjectBrief = lazy(() => import("./pages/ProjectBrief"));
const VideoServices = lazy(() => import("./services/video-services"));
const VideoGallery = lazy(() => import("./pages/VideoGallery"));
const PaymentsSquare = lazy(() => import("./pages/PaymentsSquare"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/Privacy"));
const Presentation = lazy(() => import("./pages/Presentation"));

function App() {
  return (
    <div className="bg-black min-h-[100dvh] w-full overflow-x-hidden">
      <Router>
        <SplashScreen />
        <div data-timex-site-content>
          <RouteSeo />
          <RouteMotionSignal />
          <a
            href="#main-content"
            className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-white px-5 py-3 text-sm text-black shadow-xl focus:not-sr-only"
          >
            Skip to main content
          </a>
          <Suspense
            fallback={
              <div
                className="flex min-h-[100dvh] items-center justify-center bg-black"
                role="status"
                aria-label="Loading page"
              >
                <SyncLoader color="#9234eb" size={12} />
              </div>
            }
          >
            <NewNavbar />
            <div id="main-content" tabIndex={-1}>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/services" element={<Services />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/services/web-development"
                  element={<WebDevelopment />}
                />
                <Route
                  path="/services/app-development"
                  element={<AppDevelopment />}
                />
                <Route
                  path="/services/digital-marketing"
                  element={<DigitalMarketing />}
                />
                <Route
                  path="/services/ai-automation"
                  element={<AiAutomation />}
                />
                <Route
                  path="/services/back-office-support"
                  element={<BackOfficeSupport />}
                />
                <Route
                  path="/services/staffing-solutions"
                  element={<StaffingSolutions />}
                />
                <Route
                  path="/services/real-estate-media"
                  element={<VideoServices />}
                />
                <Route
                  path="/services/video-services"
                  element={<Navigate to="/services/real-estate-media" replace />}
                />
                <Route path="/ai-automation" element={<Navigate to="/services/ai-automation" replace />} />
                <Route path="/digital-marketing" element={<Navigate to="/services/digital-marketing" replace />} />
                <Route path="/web-development" element={<Navigate to="/services/web-development" replace />} />
                <Route path="/app-development" element={<Navigate to="/services/app-development" replace />} />
                <Route path="/back-office-support" element={<Navigate to="/services/back-office-support" replace />} />
                <Route path="/staffing" element={<Navigate to="/services/staffing-solutions" replace />} />
                <Route path="/real-estate-media" element={<Navigate to="/services/real-estate-media" replace />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/video-gallery" element={<VideoGallery />} />
                <Route path="/project-brief" element={<ProjectBrief />} />
                <Route path="/payments-square" element={<PaymentsSquare />} />
                
                <Route path="/presentation" element={<Presentation />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <WhatsAppFloat />
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
