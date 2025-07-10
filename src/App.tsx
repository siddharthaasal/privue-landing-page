import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {

  return (
    <>
      <main className='relative'>
        <Navbar />
        <section className='mt-[64px]'>
          <Hero />
        </section>
      </main>
    </>
  )
}

export default App
