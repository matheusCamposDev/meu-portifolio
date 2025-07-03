import { Navbar } from "./components/NavBar";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col bg-black">
      <Navbar />
      <main className="h-screen flex flex-row items-center justify-center">
        <section className="w-full flex flex-col items-center h-full gap-8">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
