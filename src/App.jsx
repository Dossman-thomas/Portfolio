import { useState } from 'react'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AboutMe from './components/AboutMe.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App
