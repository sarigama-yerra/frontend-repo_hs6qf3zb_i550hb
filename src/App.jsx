import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-fuchsia-50 to-indigo-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <FAQ />
        <footer className="py-10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} QuizMaster — Play fair. Have fun.
        </footer>
      </main>
    </div>
  );
}

export default App;
