import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use react-router-dom
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SyncLoader } from "react-spinners";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <div className="container mx-auto bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Container padding can be controlled here */}
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
            {/* Define routes here */}
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
