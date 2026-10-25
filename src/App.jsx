import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InstructionBox from './components/InstructionBox'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import Dataset from './components/Dataset'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f2ec] text-[#263238]">
      <Navbar />
      <main>
        <Hero />
        <InstructionBox />
        <HowItWorks />
        <Comparison />
        <Dataset />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
