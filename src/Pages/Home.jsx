import React from "react";
import Marquee from "react-fast-marquee";
import Herostat from "../Components/Herostatsection";
import Servicecards from "../Components/Servicescard";
import AwardsAccoladesSection from "../Components/AwardsAndAccoladesSection";
import homeref1 from "../assets/homeref1.jpg";
import homeref2 from "../assets/homeref2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const handBg = "home.jpg";

// Auto-import all client images
const clientImages = Object.values(
  import.meta.glob("../assets/client/*.{png,jpg,jpeg,webp}", {
    eager: true,
  })
);

const half = Math.ceil(clientImages.length / 2);
const firstRow = clientImages.slice(0, half);
const secondRow = clientImages.slice(half);

const fadeInX = (direction = "left") => ({
  hidden: {
    x: direction === "left" ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
});

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-6 md:px-16">
    {children}
  </div>
);

const Home = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[650px] md:h-[550px] text-white overflow-hidden bg-[#0C0B26] font-sans">
        {/* Smooth background image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 bg-no-repeat bg-contain bg-[position:79%_center] md:scale-[1.18]"
          style={{ backgroundImage: `url(${handBg})` }}
        />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <Container>
            <div className="w-full md:w-2/3">
              <p className="text-[28px] md:text-[35px] font-extrabold leading-snug md:leading-tight text-left text-white">
                Together, we create sustainable, efficient, and secure environments
                that enhance lives and drive progress in the digital age.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <Herostat />

      {/* ================= ABOUT US ================= */}
      <section className="py-24 bg-gradient-to-r from-[#13263e] via-[#101f2e] to-[#13263e]">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-14">
            <motion.div
              className="w-full md:w-1/2 h-[420px]"
              variants={fadeInX("left")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={homeref1}
                alt="About Us"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-left text-white"
              variants={fadeInX("right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-teal-400 uppercase font-semibold mb-2">
                About Us
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Koncept Engineers: Pioneering Digitalization for a Sustainable Tomorrow.
              </h2>
              <p className="mb-4">
                Established in 2012, Koncept Engineers is a formidable team of dedicated
                professionals who bring a wealth of experience from their tenures at
                Fortune 500 companies worldwide.
              </p>
              <p className="mb-6">
                We introduce ourselves as specialists in IBMS & ELV Solutions, a field
                where we have been pioneers from the very beginning. Our journey started
                with a raw passion for delivering the best in goods and services, and
                today, we have earned a well-deserved reputation as a leading system
                integrator, manufacturer, and service provider of Building Automation,
                Security & Embedded Solutions.
              </p>
              <Link
                to="/AboutUs"
                className="bg-[#009FB2] hover:bg-[#0083A0] text-white px-6 py-3 rounded-full shadow-md transition-all"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="relative w-full h-[100vh] overflow-hidden bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/tUP5S4YdEJo?autoplay=1&mute=1&loop=1&playlist=tUP5S4YdEJo&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
          title="Background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </section>

      {/* ================= SERVICES TEASER ================= */}
      <section className="py-24 bg-[#142132]">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-14">
            <motion.div
              className="w-full md:w-1/2 text-left text-white"
              variants={fadeInX("left")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-teal-400 uppercase font-semibold mb-2">
                Our Services
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Digitalization for a more efficient, sustainable, and comfortable
                built environment.
              </h2>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-left text-white"
              variants={fadeInX("right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-4">
                Koncept Engineers offers a wide range of digitalization services
                that can help you to create and manage more sustainable buildings.
                We can help you to:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>
                  Design and implement building automation systems: These systems
                  use digital technologies to control and optimize energy
                  consumption, comfort, and security.
                </li>
                <li>
                  Use data analytics to identify and reduce energy waste: We can
                  help you to collect and analyze data from your building to
                  identify areas where energy can be saved.
                </li>
              </ul>
              <Link
                to="/Services"
                className="bg-[#009FB2] hover:bg-[#0083A0] text-white px-6 py-3 rounded-full shadow-md transition-all"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      <Servicecards />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-[#0a1128]">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-14">
            <motion.div
              className="w-full md:w-1/2 h-[420px]"
              variants={fadeInX("left")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={homeref2}
                alt="Why Choose Us"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-left text-white"
              variants={fadeInX("right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="mb-6">
                At Koncept Engineers, we’re your trusted partner in the world of
                digitalization and automation. Our commitment to cutting-edge
                technology, tailored solutions, and user-friendliness ensures your
                project’s success. We’ve earned industry recognition for seamlessly
                blending innovation and reliability. From comprehensive services to
                sustainable practices, we cover it all. With a client-centric
                approach, ongoing support, and future-ready solutions, we’re
                dedicated to your success. Choose Koncept Engineers, and let’s build
                a smarter, more efficient future together.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================= CLIENTELE ================= */}
      <section className="relative bg-[#f3e2c2] py-24 overflow-x-hidden">
        <Container>
          <h2 className="text-4xl font-bold text-center text-black mb-16">
            Clientele
          </h2>
        </Container>

        {/* Row 1 */}
        <div className="relative w-full overflow-x-hidden">
          <Marquee speed={130} gradient={false} pauseOnHover autoFill>
            {firstRow.map((img, index) => (
              <div
                key={index}
                className="mx-10 flex items-center justify-center w-[200px] h-[120px]"
              >
                <img
                  src={img.default}
                  alt={`Client ${index + 1}`}
                  className="max-w-[250px] max-h-[110px] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="h-12" />

        {/* Row 2 */}
        <div className="relative w-full overflow-x-hidden">
          <Marquee
            speed={120}
            gradient={false}
            pauseOnHover
            direction="right"
            autoFill
          >
            {secondRow.map((img, index) => (
              <div
                key={index}
                className="mx-10 flex items-center justify-center w-[200px] h-[120px]"
              >
                <img
                  src={img.default}
                  alt={`Client ${half + index + 1}`}
                  className="max-w-[200px] max-h-[110px] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ================= AWARDS & ACCOLADES ================= */}
      <section className="py-16 bg-gradient-to-r from-[#13263e] via-[#101f2e] to-[#13263e]">
        <Container>
          <div className="text-center mb-10">
            <p className="text-teal-400 uppercase font-semibold tracking-wider text-sm">
              Our Achievements
            </p>
          </div>
        </Container>

        <div className="max-w-[95%] mx-auto">
          <AwardsAccoladesSection />
        </div>
      </section>
    </>
  );
};

export default Home;
