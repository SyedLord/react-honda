import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap"; // <-- GSAP ko import karein

const TypeRHero = () => {
  const [isCarVisible, setCarVisible] = useState(false);
  const logoRef = useRef(null); // <-- Logo ke liye ref banayein

  useEffect(() => {
    // GSAP Animation for Logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        {
          // Initial State (Shuru kahan se ho)
          opacity: 0,
          y: 100, // Thora neeche se shuru ho
          scale: 0.8,
        },
        {
          // Final State (Kahan tak jaye)
          opacity: 1,
          y: 0, // Apni aam position par wapas
          scale: 1,
          duration: 1.2,
          delay: 0.5, // Thora ruk kar start ho
          ease: "power3.out",
        }
      );
    }

    // Car animation trigger
    const carTimer = setTimeout(() => {
      setCarVisible(true);
    }, 300);

    return () => {
      clearTimeout(carTimer);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
      {/* White background layer */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[280px] bg-white z-0"></div>

      <div className="relative flex items-center justify-center pt-20 w-full max-w-7xl">
        {/* Civic Type R Logo */}
        <div
          ref={logoRef}
          className="absolute top-[-100px] md:top-[-50px] left-1/2 w-[300px] z-0 transform -translate-x-1/2 opacity-0"
        >
          <img
            src="/assets/images/section 3/logo/type r.png"
            alt="Type R Logo"
          />
        </div>

        {/* Main Car Image */}
        <img
          src="/assets/images/page 2/side pose.png"
          alt="Honda Civic Type R"
          className={`w-4/5 md:w-3/5 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isCarVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        />
      </div>
    </section>
  );
};

export default TypeRHero;
