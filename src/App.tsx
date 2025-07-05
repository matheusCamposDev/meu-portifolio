import { Navbar } from "./components/NavBar";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projetcts";
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <div className="flex flex-col bg-black h-screen">
      <Navbar />
      <main className="h-screen flex flex-row items-center justify-center flex-1">
        <section className="w-full flex flex-col items-center h-full gap-8">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
