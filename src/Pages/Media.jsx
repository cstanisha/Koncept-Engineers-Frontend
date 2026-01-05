import React, { useState } from "react";
import { Link } from "react-router-dom";

// Auto-import images (Vite-safe)
const mediaImages = Object.values(
  import.meta.glob("../assets/media/*.{png,jpg,jpeg,webp}", { eager: true })
);

const Media = () => {
  /* ================= FEATURED DATA ================= */
  const featured = [
    {
      image: mediaImages[0],
      tag: "Industry Event",
      title: "Siemens Transformation Day 2023",
      description:
        "A landmark industry event highlighting digital transformation, innovation, and future-ready technologies.",
    },
    {
      image: mediaImages[1],
      tag: "Conference | Exhibition",
      title: "DRDO Exhibition | Emerging Tech in Infrastructure Development",
      description:
        "Koncept Engineers showcased their work at the DRDO conference, presenting emerging technologies shaping modern infrastructure.",
    },
    {
      image: mediaImages[2],
      tag: "Industry Event",
      title: "Siemens Innovation Day 2024",
      description:
        "Exploring next-generation engineering solutions, digital innovation, and collaborative technology advancements.",
    },
  ];


  /* ================= GALLERY ================= */
  const gallery = mediaImages.slice(3);

  /* ================= FILTERS ================= */
  const filters = ["All", "Events", "Media", "Team"];
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#0a1128] to-[#101f2e] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Media</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Highlights, events, recognitions, and moments that define our journey.
          </p>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-20 bg-[#0a1128]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-white font-semibold mb-10">
            Featured Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((item, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden bg-[#101f2e] shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                {/* IMAGE */}
                <div className="relative w-full h-[260px] bg-black overflow-hidden">
                  <img
                    src={item.image.default}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                {/* TEXT */}
                <div className="p-5 text-white">
                  <p className="text-sm text-teal-400 tracking-wide uppercase">
                    {item.tag}
                  </p>

                  <p className="font-semibold text-lg mt-1">
                    {item.title}
                  </p>

                  <p className="text-sm text-white/60 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="bg-[#0a1128] py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 text-white/70">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pb-2 transition-all ${activeFilter === filter
                  ? "text-teal-400 border-b-2 border-teal-400"
                  : "hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 bg-[#0a1128]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-[#101f2e] shadow-md"
              >
                <div className="w-full h-[220px] bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={img.default}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
