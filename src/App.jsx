import { useState } from 'react'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// import AboutMe from './components/AboutMe.jsx'
// import Project from './components/Project.jsx'
// import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Header />
      <Contact />
      <Footer />
    </>

  )
}

export default App
