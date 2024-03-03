// import { useState } from 'react'
import { Outlet } from 'react-router-dom';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// import AboutMe from './components/AboutMe.jsx'
// import Project from './components/Project.jsx'
// import Portfolio from './pages/Portfolio.jsx'
// import Contact from './pages/Contact.jsx'
// import ContactForm from './components/ContactForm.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default App
