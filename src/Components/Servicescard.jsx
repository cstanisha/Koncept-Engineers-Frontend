import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Wifi,
  BarChart2,
  Wrench,
  Monitor,
  Camera,
  Brain,
  FocusIcon,
  BuildingIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

import bim from "../assets/bim.jpg";
import iot from "../assets/IOT.jpg";
import dataanalytics from "../assets/Dataanalytics.jpg";
import predictive from "../assets/predictive.jpg";
import remote from "../assets/remote.jpg";
import videoanalytics from "../assets/Videoanalytics.jpg";
import aimlintegration from "../assets/aimlintegration.jpg";
import vrartechnologies from "../assets/vrartechnologies.jpg";
import embeddedsolutions from "../assets/embeddedsolutions.jpg";

/* ---------------- DATA ---------------- */

const services = [
  {
    id: "bim",
    icon: <BuildingIcon size={60} />,
    title: "BIM Integration",
    desc: "Incorporating BIM and smart building automation into facility management activities enhances efficiency, sustainability, and occupant comfort while reducing operational costs.",
    image: bim,
  },
  {
    id: "iot",
    icon: <Wifi size={60} />,
    title: "IoT Solutions",
    desc: "IoT in Smart Building Management Systems offers a holistic approach to building operations, delivering cost savings, sustainability, occupant comfort, and streamlined maintenance.",
    image: iot,
  },
  {
    id: "data-analytics",
    icon: <BarChart2 size={60} />,
    title: "Data & Analytics",
    desc: "Analytics is the backbone of digitalization, providing the insights and intelligence needed to navigate the complex digital landscape.",
    image: dataanalytics,
  },
  {
    id: "predictive-maintenance",
    icon: <Wrench size={60} />,
    title: "Predictive Maintenance",
    desc: "Predictive maintenance is vital for modern businesses looking to improve operational efficiency, reduce costs, enhance safety, and stay competitive.",
    image: predictive,
  },
  {
    id: "cloud-services",
    icon: <Monitor size={60} />,
    title: "Cloud Services",
    desc: "Remote servicing in building automation represents a significant advancement in facility management.",
    image: remote,
  },
  {
    id: "video-analytics",
    icon: <Camera size={60} />,
    title: "Video Analytics",
    desc: "Video analytics significantly enhances security and fire alarm systems by adding intelligence to visual data.",
    image: videoanalytics,
  },
  {
    id: "ai-ml-integration",
    icon: <Brain size={60} />,
    title: "AI/ML Integration",
    desc: "AI and machine learning enable predictive insights, automation, and intelligent decision-making across smart systems.",
    image: aimlintegration,
  },
  {
    id: "embedded-solutions",
    icon: <Cpu size={60} />,
    title: "Embedded Solutions",
    desc: "Robust embedded systems designed for real-time processing, control, and seamless integration with smart infrastructure.",
    image: embeddedsolutions,
  },
  {
    id: "vr-ar-technologies",
    icon: <FocusIcon size={60} />,
    title: "VR/AR Technologies",
    desc: "Immersive VR and AR solutions for visualization, simulation, training, and enhanced digital experiences.",
    image: vrartechnologies,
  },
];

/* ---------------- CARD ---------------- */

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-[#121520] rounded-2xl shadow-lg
                 overflow-hidden transition-all
                 hover:-translate-y-2 hover:shadow-teal-500/40"
    >
      {/* hover image (always mounted = no lag) */}
      <img
        src={service.image}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover
          transition-opacity duration-300
          ${hovered ? "opacity-20" : "opacity-0"}`}
      />

      {/* content */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="mb-6 text-teal-400">{service.icon}</div>

        <h4 className="text-teal-400 font-semibold mb-3">
          {service.title}
        </h4>

        {/* THIS LINE MAKES ALIGNMENT VISIBLE */}
        <p className="text-gray-300 leading-relaxed flex-1">
          {service.desc}
        </p>

        <Link to={`/services#${service.id}`} className="pt-6">
          <button className="bg-[#009FB2] hover:bg-[#0083A0]
                             text-white px-6 py-3 rounded-full
                             shadow-md transition-all">
            Learn More
          </button>
        </Link>
      </div>
    </motion.article>
  );
};

/* ---------------- GRID ---------------- */

const ServicesCards = () => {
  return (
    <section className="bg-[#142132] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 👇 THIS is what forces equal height rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;

