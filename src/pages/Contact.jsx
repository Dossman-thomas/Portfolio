import ContactForm from "../components/ContactForm.jsx";
import "../css/contact.css";

export default function Contact() {
  return (
    <>
      <div className="container mt-4 contact-box">
        <div className="container mb-5 d-flex justify-content-between align-items-center">
          <p className="contact-info">tdossman.development@gmail.com</p>
          <p className="contact-info">215.459.3984</p>
        </div>

        <div className="container heading-box">
          <h2 style={{ color: "var(--drkvio)" }}>Contact Me</h2>
        </div>

        <div
          className="d-flex align-items-center justify-content-around mt-3"
          id="email-box"
        ></div>

        <h4 style={{ color: "var(--violet)" }}>
          Fill out this form and I'll get back to you ASAP!
        </h4>

        <ContactForm />
      </div>
    </>
  );
}
