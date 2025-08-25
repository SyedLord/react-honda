import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/section 1/hero poster.png"
          alt="Honda Car Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-8 md:px-16">
        <div className="hero-content">
          <h1 className="text-white text-5xl md:text-7xl font-light leading-tight drop-shadow-lg">
            Soul in
            <br />
            Every Detail.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
