import React, { useEffect, useRef } from "react";

const ctaData = [
  {
    logo: "/assets/svgs/vehicle.svg",
    alt: "vehicle-logo",
    title: "Build or Quote",
    description: "Build your Honda online and request a quote.",
    buttonText: "GET QUOTE",
  },
  {
    logo: "/assets/svgs/icon-location-xl.svg",
    alt: "location-logo",
    title: "FIND US",
    description: "Find your nearest Honda dealership and visit us today.",
    buttonText: "SEE MAP",
  },
  {
    logo: "/assets/svgs/icon-offer.svg",
    alt: "offer-logo",
    title: "SEE OFFER",
    description: "Check out our latest offers and promotions.",
    buttonText: "SEE OFFERS",
  },
];

const CtaSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll(".cta-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in");
            }, index * 100);
          });
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white dark:bg-honda-dark py-32 px-8">
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {ctaData.map((card, index) => (
          <div
            key={index}
            className="cta-card bg-honda-dark text-white p-12 rounded-2xl text-center flex flex-col items-center justify-between opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
          >
            <img src={card.logo} alt={card.alt} className="mb-4 h-12" />
            <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
            <p className="opacity-80 mb-8">{card.description}</p>
            <button className="bg-honda-red text-white font-bold py-3 px-6 rounded-md hover:bg-[#cc0010] transition-colors duration-300">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
      <style>{`
                .cta-card.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
    </section>
  );
};

export default CtaSection;
