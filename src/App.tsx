import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";

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
      </main>
    </>
  )
}

export default App
