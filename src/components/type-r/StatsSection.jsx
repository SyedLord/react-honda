import React, { useEffect, useRef, useState } from "react";

// Number animation function
const animateValue = (setter, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
    const currentValue = easedProgress * (end - start);
    setter(currentValue);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const StatItem = ({ target, unit, label, isDecimal = false, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateValue(setCount, 0, target, 2000);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  const displayValue = isDecimal ? count.toFixed(1) : Math.floor(count);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-baseline justify-center mb-2">
        <h3 className="text-5xl md:text-7xl font-light text-white">
          {displayValue}
        </h3>
        <span className="text-2xl md:text-3xl font-light text-white ml-2">
          {unit}
        </span>
      </div>
      <p className="text-sm uppercase tracking-widest text-white/70 font-light">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/assets/images/page 2/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-light tracking-[4px] uppercase mb-16 text-center">
          Feel the Rush of the Type R
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 w-full max-w-4xl">
          <StatItem
            target={5.0}
            unit="s"
            label="Acceleration 0-100 km/h"
            isDecimal={true}
            delay={0}
          />
          <StatItem target={270} unit="km/h" label="Top Speed" delay={200} />
          <div className="md:col-span-2 flex items-center justify-center gap-4">
            <StatItem target={370} unit="kW" label="Power (kW)" delay={400} />
            <span className="text-4xl font-light -mt-8">/</span>
            <StatItem target={505} unit="PS" label="Power (PS)" delay={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
