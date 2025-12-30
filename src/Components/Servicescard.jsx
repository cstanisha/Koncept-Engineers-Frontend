import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Wifi, BarChart2, Wrench, Monitor, Camera, Brain, FocusIcon, BuildingIcon } from "lucide-react";
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
    id: "Cloud-Services",
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
    id: "AI-ML-integration",
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

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 rounded-2xl bg-[#121520] shadow-lg overflow-hidden
                 hover:shadow-teal-500/50 transition-all hover:-translate-y-2
                 h-full flex flex-col"
    >
      {/* Hover background */}
      <img
        src={service.image}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500
          ${isHovered ? "opacity-20" : ""}`}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-5 text-teal-400">{service.icon}</div>

        <h4 className="text-teal-400 font-semibold mb-2">
          {service.title}
        </h4>

        <p className="text-gray-300 mb-6 flex-grow">
          {service.desc}
        </p>

        <Link to={`/services#${service.id}`} className="mt-auto">
          <button className="bg-[#009FB2] hover:bg-[#0083A0] text-white px-6 py-3 rounded-full shadow-md transition-all">
            Learn More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};


const ServicesCards = () => {
  return (
    <section className="bg-[#142132] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
