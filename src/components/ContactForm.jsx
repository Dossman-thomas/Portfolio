import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the specific field error when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Check for required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      // Check for a valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
        valid = false;
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (validateForm()) {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use Vite environment variable for Service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use Vite environment variable for Template ID
          {
            from_name: formData.name, // Map to EmailJS template variable
            from_email: formData.email, // Map to EmailJS template variable
            message: formData.message, // Map to EmailJS template variable
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Use Vite environment variable for Public Key
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Reset form
          },
          (error) => {
            console.error("Error sending email:", error);
            toast.error(
              "There was an error sending your message. Please try again."
            );
          }
        );
    } else {
      toast.error("Please fill out the form correctly.");
    }
  };

  return (
    <div className="container mt-3 mb-5 form-box">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && "is-invalid"}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>
          <input
            type="email"
            className={`form-control ${errors.email && "is-invalid"}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className={`form-control ${errors.message && "is-invalid"}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <div className="invalid-feedback">{errors.message}</div>
        </div>
        <button type="submit" className="btn" id="submit-btn">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
