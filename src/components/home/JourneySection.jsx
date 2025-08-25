import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Data for all journey cards, based on your index.html
const journeyData = [
  {
    thumbnail: "/assets/images/section 3/type r.jpg",
    video: "/assets/videos/type_r.mp4",
    logo: "/assets/images/section 3/logo/type r.png",
    alt: "Civic Type R",
  },
  {
    thumbnail: "/assets/images/section 3/city.jpg",
    video: "/assets/videos/city.mp4",
    logo: "/assets/images/section 3/logo/city.png",
    alt: "Honda City",
  },
  {
    thumbnail: "/assets/images/section 3/civic.jpg",
    video: "/assets/videos/civic.mp4",
    logo: "/assets/images/section 3/logo/civic.png",
    alt: "Honda Civic",
  },
  {
    thumbnail: "/assets/images/section 3/hr-v.jpg",
    video: "/assets/videos/hrv.mp4",
    logo: "/assets/images/section 3/logo/hrv.png",
    alt: "Honda HR-V",
  },
];

// Reusable JourneyCard component
const JourneyCard = ({ card, videoRef, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="journey-card relative flex-1 h-[300px] md:h-full rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="media-wrapper w-full h-full">
        {/* Thumbnail Image */}
        <img
          src={card.thumbnail}
          alt={`${card.alt} Thumbnail`}
          className="thumbnail absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
        />
        {/* Video Preview */}
        <video
          ref={videoRef}
          muted={true}
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300"
        >
          <source src={card.video} type="video/mp4" />
        </video>
      </div>
      <div className="overlay absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-start justify-center pt-8">
        <img
          src={card.logo}
          alt={`${card.alt} Logo`}
          className="model-logo w-1/2 max-w-[200px] md:max-w-[400px] h-auto z-20"
        />
      </div>
    </div>
  );
};

// Main JourneySection Component
const JourneySection = () => {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);
  rowRefs.current = [];

  // Function to add refs to the array
  const addToRowRefs = (el) => {
    if (el && !rowRefs.current.includes(el)) {
      rowRefs.current.push(el);
    }
  };

  // Dark mode transition effect on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Adding a class to <html> for better CSS control with Tailwind's dark mode
        document.documentElement.classList.toggle("dark", entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
        document.documentElement.classList.remove("dark");
      }
    };
  }, []);

  // GSAP animation logic
  useEffect(() => {
    const rows = rowRefs.current;

    rows.forEach((row) => {
      const cards = Array.from(row.children); // Get all card elements in the row

      cards.forEach((card, index) => {
        const video = card.querySelector("video");

        const mouseEnterHandler = () => {
          gsap.to(card, { flex: 1.3, duration: 0.4, ease: "power2.inOut" });
          cards.forEach((otherCard, otherIndex) => {
            if (index !== otherIndex) {
              gsap.to(otherCard, {
                flex: 0.7,
                opacity: 0.8,
                duration: 0.4,
                ease: "power2.inOut",
              });
            }
          });
          if (video) {
            video.currentTime = 0;
            video.play().catch((e) => console.error("Video play failed:", e));
            gsap.to(video, { opacity: 1, duration: 0.3 });
            gsap.to(card.querySelector(".thumbnail"), {
              opacity: 0,
              duration: 0.3,
            });
          }
        };

        const mouseLeaveHandler = () => {
          const tl = gsap.timeline();
          tl.to(cards, {
            flex: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          });
          if (video) {
            video.pause();
            video.currentTime = 0;
            gsap.to(video, { opacity: 0, duration: 0.3 });
          }

          // 🔹 Thumbnail ko wapas show karo
          const thumbnail = card.querySelector(".thumbnail");
          if (thumbnail) {
            gsap.to(thumbnail, { opacity: 1, duration: 0.3 });
          }
        };

        card.addEventListener("mouseenter", mouseEnterHandler);
        card.addEventListener("mouseleave", mouseLeaveHandler);

        // Cleanup function to remove event listeners
        return () => {
          card.removeEventListener("mouseenter", mouseEnterHandler);
          card.removeEventListener("mouseleave", mouseLeaveHandler);
        };
      });
    });
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <section
      id="journey-section"
      ref={sectionRef}
      className="bg-white text-gray-800 dark:bg-honda-dark dark:text-white flex flex-col items-center py-16 px-4 md:px-8 transition-colors duration-700 ease-in-out"
    >
      <h2 className="text-4xl md:text-5xl text-honda-red dark:text-white mb-12 text-center font-light">
        Your Honda journey starts now.
      </h2>
      <div className="flex flex-col gap-8 max-w-[1500px] w-full">
        {/* Row 1 */}
        <div
          ref={addToRowRefs}
          className="journey-row flex flex-col md:flex-row gap-8 md:h-[500px]"
        >
          <JourneyCard card={journeyData[0]} />
          <JourneyCard card={journeyData[1]} />
        </div>
        {/* Row 2 */}
        <div
          ref={addToRowRefs}
          className="journey-row flex flex-col md:flex-row gap-8 md:h-[500px]"
        >
          <JourneyCard card={journeyData[2]} />
          <JourneyCard card={journeyData[3]} />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
