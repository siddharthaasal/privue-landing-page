import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <main className='relative'>
        <Navbar />
        <section className='mt-[64px]'>
          <Hero />
        </section>
        <section className='mt-[64px]'>
          <Solutions />
        </section>
        <section className='mt-[64px]'>
          <Services />
        </section>
        <section className='mt-[64px]'>
          <FAQ />
        </section>
        <section className='mt-[64px]'>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
