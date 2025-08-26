import React, { useState } from "react";

const colors = [
  { name: "red", bg: "bg-gradient-to-br from-honda-red to-[#cc0010]" },
  { name: "black", bg: "bg-gradient-to-br from-gray-900 to-black" },
  {
    name: "white",
    bg: "bg-gradient-to-br from-white to-gray-200",
    border: "border-2 border-gray-300",
  },
  { name: "blue", bg: "bg-gradient-to-br from-blue-700 to-blue-900" },
  { name: "gray", bg: "bg-gradient-to-br from-gray-600 to-gray-800" },
];

const ConfigureSection = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <section className="bg-gray-100 py-24 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
          Configure your dream car
        </h2>

        <div className="relative w-full h-[250px] md:h-[400px] mb-6">
          {colors.map(({ name }) => (
            <img
              key={name}
              src={`/assets/images/page 2/car colors/${name}.png`}
              alt={`${name} Civic Type R`}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                selectedColor === name ? "opacity-100" : "opacity-0"
              } scale-125 md:scale-100`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
          {colors.map(({ name, bg, border }) => (
            <div
              key={name}
              onClick={() => setSelectedColor(name)}
              className={`relative w-16 h-16 md:w-20 md:h-20 cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:-translate-y-1 ${bg} ${
                border || ""
              }
                          ${
                            selectedColor === name
                              ? "scale-110 border-4 border-gray-800"
                              : ""
                          }`}
            >
              {selectedColor === name && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-black text-white text-xs font-bold">
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfigureSection;
