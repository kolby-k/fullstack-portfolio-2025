import { Route, Routes, useNavigate } from "react-router";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import NavBar from "./components/NavBar";
import Contact from "./routes/Contact";
import "./App.css";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const nav = useNavigate();

  return (
    <>
      <header className="header h-28 md:h-48">
        <img
          src="/logo.png"
          width={70}
          height={70}
          className="absolute left-10 top-2 md:top-8 img-glow cursor-pointer"
          onClick={() => nav("/")}
        />
        <NavBar />
        <span className="absolute right-10 md:right-[2%] top-8">
          <ThemeToggle />
        </span>
      </header>
      <main>
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
