import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <>
      <div className="container mx-auto px-4">
        {/* md:px-8 lg:px-16 lx:px-32 2xl:px-64 */}
        <Router>
          <Navbar />
          <Suspense fallback={"..."}>
            <Routes>
              <Route index path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
