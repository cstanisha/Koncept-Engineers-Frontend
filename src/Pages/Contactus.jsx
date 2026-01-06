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
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form" && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be a 10-digit number";
    if (!formData.subject || formData.subject.length < 5)
      newErrors.subject = "Subject must be at least 5 characters";
    if (!formData.message || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/enquiry/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Error");

      setNotification(
        "Thank you for contacting Koncept Engineers. Our team will get back to you shortly."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setTimeout(() => setNotification(""), 4000);
    } catch {
      setNotification("Unable to submit enquiry. Please try again later.");
      setTimeout(() => setNotification(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Notification */}
      {notification && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0
    z-50 max-w-sm rounded-lg border border-white/10 bg-[#0f172a]
    px-5 py-4 shadow-xl animate-slide-in"
        >
          <p className="font-medium text-slate-100">Message sent</p>
          <p className="mt-1 text-sm text-slate-400">{notification}</p>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[300px] flex flex-col justify-center px-4 md:px-20 text-white bg-[#0a1128]">
        <h1 className="text-6xl font-extrabold mb-6 tracking-wide text-center">
          Contact Us
        </h1>
        <div className="text-center">
          <Link to="/" className="text-teal-400 hover:underline text-lg">
            Home
          </Link>
          <span className="mx-2 text-xl">&gt;</span>
          <span className="text-teal-500 font-semibold text-lg">
            Contact Us
          </span>
        </div>
      </div>

      {/* Office Image */}
      <section className="bg-[#0a1128] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-teal-500 uppercase tracking-wider text-sm font-semibold">
              Our Workspace
            </p>
            <h2 className="text-white text-3xl font-semibold mt-2">
              Koncept Engineers – Corporate Office
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
            <img
              src={officeImage}
              alt="Corporate Office"
              className="w-full max-h-[520px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center lg:min-h-screen
        bg-gradient-to-r from-[#0a1128] to-[#0f766e] p-6 gap-6">

        {/* Address */}
        <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg w-full max-w-lg text-slate-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Visit Us</h2>
          <p><strong className="text-slate-200">Office:</strong> Sector 68, IMT Faridabad</p>
          <p><strong className="text-slate-200">Unit 1:</strong> Vardhman Star Mall</p>
          <p><strong className="text-slate-200">Unit 2:</strong> Plot 478, Sector 68</p>

          <iframe
            title="Google Map"
            className="w-full h-48 rounded-lg shadow-md mt-4"
            src="https://maps.google.com/maps?q=Vardhman%20Star%20Mall,%20Sector%2019,%20Faridabad&output=embed"
            loading="lazy"
          />

          <a
            href="https://maps.app.goo.gl/9MBWT2XAbzz1Vutw8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-teal-600 hover:bg-teal-700 transition text-white py-2 rounded"
          >
            Locate on Google Maps
          </a>
        </div>

        {/* Form */}
        <div ref={formRef} id="contact-form"
          className="bg-[#0f172a] p-8 rounded-xl shadow-lg w-full max-w-lg text-white">

          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.entries(formData).map(
              ([key, value]) =>
                key !== "message" && (
                  <div key={key}>
                    <input
                      type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                      className="w-full p-3 rounded bg-[#020617] border border-white/10 text-white placeholder-slate-500"
                    />
                    {errors[key] && (
                      <p className="text-red-400 text-sm">{errors[key]}</p>
                    )}
                  </div>
                )
            )}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded bg-[#020617] border border-white/10 h-40 placeholder-slate-500"
            />

            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full text-lg flex items-center justify-center transition
                ${loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-teal-500 hover:bg-teal-600"}
              `}
            >
              {loading ? "Submitting..." : "Submit"}
              {!loading && <FaPaperPlane className="ml-2" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

