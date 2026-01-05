import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, ArrowUp, PhoneCall, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import partner1 from "../assets/1.png";
import partner2 from "../assets/2.png";
import partner3 from "../assets/3.png";
import partner4 from "../assets/4.png";
import partner5 from "../assets/5.png";

const Footer = () => {
  const addresses = [
    {
      line: "Koncept Engineers, 114, 1st floor, Vardhman Star Mall, Sec 19, Faridabad-121002, Haryana (India)",
      mapLink: "https://maps.app.goo.gl/WG237EkDvKGkEg6C9",
    },
    {
      line: "Koncept Engineers Factory, Plot No: 478, Sector 68, IMT Faridabad, Haryana-121004",
      mapLink: "https://maps.app.goo.gl/9MBWT2XAbzz1Vutw8",
    },
    {
      line: "Koncept Engineers Factory, Plot No: 228, Sector 68, IMT Faridabad, Haryana-121004",
      mapLink: "https://maps.app.goo.gl/jRbYP1hBPG96k84b6",
    },
  ];

  const partners = [partner1, partner2, partner3, partner4, partner5];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[linear-gradient(to_bottom,#071a2f,#0e3a4c,#0b5b5a)] text-white py-12 shadow-lg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo and Socials */}
        <div>
          <img
            src={logo}
            alt="Koncept Engineers Logo"
            fetchpriority="high"
            decoding="async"
            className="w-40 md:w-56 lg:w-64 mb-8"
          />
          <p className="mb-4">
            Together, we create sustainable, efficient, and secure environments that enhance lives and drive progress in the digital age.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/" className="hover:text-teal-400" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-teal-400" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/" className="hover:text-teal-400" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="https://www.youtube.com/" className="hover:text-teal-400" aria-label="YouTube">
              <Youtube />
            </a>
          </div>
        </div>

        {/* Addresses */}
        <div>
          <h3 className="text-xl mb-3 font-semibold">Our Addresses</h3>
          {addresses.map((addr, i) => (
            <div key={i} className="flex items-start gap-2 mb-3">
              <a href={addr.mapLink} target="_blank" rel="noopener noreferrer" className="mt-1 hover:text-teal-300">
                <MapPin />
              </a>
              <p className="leading-tight">{addr.line}</p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl mb-3 font-semibold">Call Us</h3>
          <div className="flex items-center gap-2 mb-2">
            <PhoneCall className="text-teal-300 w-4 h-4" />
            <a href="tel:+918920302953" className="hover:text-teal-300">+91-8920302953</a>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <PhoneCall className="text-teal-300 w-4 h-4" />
            <a href="tel:01294025305" className="hover:text-teal-300">0129-4025305</a>
          </div>

          <h3 className="text-xl mb-3 font-semibold">Email Us</h3>
          <div className="flex items-center gap-2">
            <Mail className="text-teal-300 w-4 h-4" />
            <a href="mailto:sales@konceptengineers.com" className="hover:text-teal-300">
              sales@konceptengineers.com
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", route: "/" },
              { name: "About Us", route: "/aboutus" },
              { name: "Solutions", route: "/solutions" },
              { name: "Services", route: "/services" },
              { name: "Contact Us", route: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.route} className="hover:underline hover:text-teal-300 transition-all">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="border-t border-gray-700 mt-14 pt-10">
        <h3 className="text-center mb-10 text-2xl font-semibold tracking-wide">
          Our Partners
        </h3>

        <div className="flex flex-wrap justify-center gap-12">
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="
          w-32 h-32
          md:w-36 md:h-36
          object-contain
          cursor-pointer
          transition-transform
          duration-300
        "
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
              }}
            />
          ))}
        </div>
      </div>



      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-teal-500 p-3 rounded-full shadow-lg hover:bg-teal-400 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
