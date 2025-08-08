import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import NavBar from "./components/NavBar";
import Contact from "./routes/Contact";
import "./App.css";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <header className="header">
        <img
          src="/logo.png"
          width={60}
          height={60}
          className="ml-4-mt-4 img-glow"
        />
        <NavBar />
        <span className="absolute right-[2%] top-6">
          <ThemeToggle />
        </span>
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
