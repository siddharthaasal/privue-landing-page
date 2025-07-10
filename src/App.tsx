import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="relative">
        <Navbar />

        <section className="mt-[48px] md:mt-[64px] px-4 sm:px-6 lg:px-12">
          <Hero />
        </section>

        <section className="mt-[48px] md:mt-[64px] px-4 sm:px-6 lg:px-12">
          <Solutions />
        </section>

        <section className="mt-[48px] md:mt-[64px] px-4 sm:px-6 lg:px-12">
          <Services />
        </section>

        <section className="mt-[48px] md:mt-[64px] px-4 sm:px-6 lg:px-12">
          <FAQ />
        </section>

        <section className="mt-[48px] md:mt-[64px]">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
