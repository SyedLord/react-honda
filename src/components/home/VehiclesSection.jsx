import React from "react";
import { Link } from "react-router-dom";

const vehicleData = [
  { img: "/assets/images/section 2/HR-V.png", alt: "Honda HR-V", link: "#" },
  { img: "/assets/images/section 2/BR-V.png", alt: "Honda BR-V", link: "#" },
  {
    img: "/assets/images/section 2/Type R.png",
    alt: "Honda Type R",
    link: "/type-r",
  },
];

const VehicleCard = ({ img, alt, link }) => (
  <div className="group relative rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
    <img
      src={img}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-115"
    />
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Link
        to={link}
        className="flex items-center gap-2 bg-white/90 text-gray-800 font-semibold py-3 px-6 rounded-full transition-transform duration-300 hover:bg-white hover:scale-105"
      >
        <span className="text-lg">+</span>
        EXPLORE
      </Link>
    </div>
  </div>
);

const VehiclesSection = () => {
  return (
    <section className="bg-white text-gray-800 flex flex-col items-center py-40 px-8">
      <h2 className="text-4xl md:text-5xl text-honda-red mb-12 text-center font-light">
        Our Honda Vehicles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl md:w-full w-85">
        {vehicleData.map((vehicle, index) => (
          <VehicleCard key={index} {...vehicle} />
        ))}
      </div>
    </section>
  );
};

export default VehiclesSection;
