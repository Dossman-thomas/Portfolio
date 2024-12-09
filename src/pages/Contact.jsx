import ContactForm from '../components/ContactForm.jsx'
import '../css/contact.css'

export default function Contact() {

  return (

    <>
      <div className="container mt-4 contact-box">

        <div className="container mb-5 d-flex justify-content-between align-items-center">

          <p className="contact-info">
            tdossman.development@gmail.com
          </p>
          <p className="contact-info">
            215.459.3984
          </p>

        </div>

        <div className='container heading-box'>

          <h2>
            Contact Me
          </h2>

        </div>

        <div className="d-flex align-items-center justify-content-around mt-3" id="email-box">


        </div>

        <h4>Fill out this form and I'll get back to you ASAP!</h4>

        <ContactForm />

        {/* <div className='d-flex justify-content-center align-items-center mb-4' id='email-links'>

          <h4>
            Send me an email directly:
          </h4>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tdossman.development@gmail.com" target="_blank" rel="noopener noreferrer">

            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail Icon" className="email-icons" />

          </a>

          <a href="mailto:tdossman.development@gmail.com" target="_blank" rel="noopener noreferrer">

            <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="Outlook Icon" className="email-icons" />

          </a>

        </div> */}

      </div>


    </>

  )
}