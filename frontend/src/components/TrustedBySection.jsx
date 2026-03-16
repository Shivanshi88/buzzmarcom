import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { clientLogos } from "../mockData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import client logos
import Logo1 from "../assets/client-logos/Airtel.png";
import Logo2 from "../assets/client-logos/Castrol.png";
import Logo3 from "../assets/client-logos/MMT.png";
import Logo4 from "../assets/client-logos/sandisk.png";
import Logo5 from "../assets/client-logos/sinickers.png";
import Logo6 from "../assets/client-logos/Zomato.png";

const TrustedBySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  const logoImages = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <section className="py-14 bg-gradient-to-b from-white via-amber-50/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Trusted By
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Organizations that trust our insights
          </h2>

          <p className="text-xs md:text-sm text-gray-600 mt-2">
            From enterprises to impact-driven institutions across sectors.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-amber-100 bg-white/90 px-3 py-4 shadow-sm"
        >
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <div key={logo.id} className="px-3">
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                    boxShadow: "0 12px 28px rgba(251,191,36,0.35)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-center justify-center h-28 sm:h-32"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-amber-50/60 border border-amber-100 opacity-70 group-hover:opacity-100 transition-all duration-300">
                    <img
                      src={logoImages[index % logoImages.length]}
                      alt={`${logo.name} logo`}
                      className="w-44 h-16 sm:w-52 sm:h-20 md:w-60 md:h-24 object-contain"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
