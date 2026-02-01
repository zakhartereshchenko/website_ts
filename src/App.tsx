import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { About, Experience, Header, Hero, Portfolio, ScrollToTop, Skills } from './components'

import './App.scss'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
        <>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <ScrollToTop />
        </>
  )
}

export default App
