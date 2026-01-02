import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import officeImage from "../assets/office-building.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Ref for smooth scrolling
  const formRef = useRef(null);
  const location = useLocation();

  // Scroll to form when URL contains #contact-form
  useEffect(() => {
    const scrollToForm = () => {
      if (location.hash === "#contact-form" && formRef.current) {
        setTimeout(() => {
          formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay ensures smooth transition
      }
    };
    scrollToForm();
  }, [location]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name || formData.name.length < 3) newErrors.name = "Name must be at least 3 characters";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be a 10-digit number";
    if (!formData.subject || formData.subject.length < 5) newErrors.subject = "Subject must be at least 5 characters";
    if (!formData.message || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/enquiry/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Thank you! Your enquiry has been submitted.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Enquiry error:", error);
      alert("Failed to submit enquiry. Please try again later.");
    }
  };



  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] flex flex-col justify-center px-4 md:px-20 text-white bg-[#0a1128]">
        <h1 className="text-6xl font-extrabold mb-6 tracking-wide text-center">Contact Us</h1>
        <div className="text-center">
          <Link to="/" className="text-teal-400 hover:underline text-lg">Home</Link>
          <span className="mx-2 text-xl">&gt;</span>
          <span className="text-teal-500 font-semibold text-lg">Contact Us</span>
        </div>
      </div>

      {/* Office Image Section */}

      <section className="bg-[#0a1128] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-teal-400 uppercase tracking-wider text-sm font-semibold">
              Our Workspace
            </p>
            <h2 className="text-white text-3xl font-bold mt-2">
              Koncept Engineers – Corporate Office
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <img
              src={officeImage}
              alt="Koncept Engineers Corporate Office"
              loading="eager"
              className="
          w-full
          h-auto
          max-h-[520px]
          mx-auto
          object-contain
        "
            />
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-[#0a1128] to-[#27c2a4] p-6 gap-6">

        {/* Address Section */}
        <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
          <p><strong>Office:</strong> 228, Sector 68, IMT Faridabad, Haryana-121004</p>
          <p><strong> Unit Address 1:</strong> 114 1st Floor Vardhman Star Mall, Sector 19, Faridabad</p>
          <p><strong> Unit Address 2:</strong> Plot No 478, Sector 68, IMT Faridabad, Haryana-121004</p>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              title="Google Map"
              className="w-full h-48 rounded-lg shadow-md"
              src="https://maps.google.com/maps?q=Vardhman%20Star%20Mall,%20Sector%2019,%20Faridabad&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Locate Button */}
          <button className="bg-teal-500 text-white py-2 px-4 rounded mt-4 hover:bg-teal-700 w-full">
            <a href="https://maps.app.goo.gl/9MBWT2XAbzz1Vutw8" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              Locate on Google Maps
            </a>
          </button>
        </div>

        {/* Contact Form */}
        <div ref={formRef} id="contact-form" className="bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-lg text-white">
          <h2 className="text-white text-2xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              key !== "message" && (
                <div key={key}>
                  <input
                    type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    className="w-full p-3 border rounded bg-gray-800 text-white placeholder-gray-400"
                    autoComplete="on"
                  />
                  {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
                </div>
              )
            ))}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 border rounded bg-gray-800 text-white placeholder-gray-400 h-40"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <button type="submit" className="bg-teal-400 hover:bg-teal-500 text-white py-3 px-6 rounded-full shadow-md flex items-center justify-center w-full text-lg transition-all">
              Submit <FaPaperPlane className="ml-2" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
