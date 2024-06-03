
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import NewsLetter from './components/NewsLetter'
import Footer from './shared/Footer'


function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Pricing/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
