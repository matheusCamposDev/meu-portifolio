import { Navbar } from "./components/NavBar";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="home"
          className="h-screen bg-black gap-8 flex flex-row items-center justify-center px-4"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
