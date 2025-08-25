import React, { useState, useEffect } from "react";

const TypeRHero = () => {
  const [isLogoVisible, setLogoVisible] = useState(false);
  const [isCarVisible, setCarVisible] = useState(false);

  useEffect(() => {
    // Logo animation trigger
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 1000);

    // Car animation trigger
    const carTimer = setTimeout(() => {
      setCarVisible(true);
    }, 300);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(carTimer);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
      <div className="relative flex items-center justify-center pt-20 w-full max-w-7xl">
        {/* Civic Type R Logo */}
        <div
          className={`absolute top-[-150px] md:top-[-100px] left-1/2 w-[300px] z-10 transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
            isLogoVisible
              ? "transform -translate-x-1/2 translate-y-1/2 scale-100 opacity-100"
              : "transform -translate-x-1/2 scale-0 opacity-0"
          }`}
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
