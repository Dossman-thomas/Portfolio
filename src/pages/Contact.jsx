import ContactForm from '../components/ContactForm.jsx'
import '../css/contact.css'

export default function Contact() {

  return (

    <>
      <div className="container mt-5 contact-box">

        <div className='container heading-box'>
          <h2>Contact Me</h2>
        </div>

        <ContactForm />

        <div className="d-flex align-items-center justify-content-around mt-5" id="email-box">

          <h4>
            Or, Send Me an Email Directly!
          </h4>


            <div className='d-flex' id='email-links'>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tdossman.development@gmail.com" target="_blank" rel="noopener noreferrer">
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail Icon" />

              </a>

              <a href="mailto:tdossman.development@gmail.com" target="_blank" rel="noopener noreferrer">
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="Outlook Icon" />
    
              </a>

            </div>




        </div>


      </div>


    </>

  )
}