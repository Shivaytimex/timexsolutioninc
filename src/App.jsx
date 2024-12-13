import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SyncLoader } from "react-spinners";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <>
      <div className="container mx-auto">
        {/* md:px-8 lg:px-16 lx:px-32 2xl:px-64 */}
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
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
