import React from "react";

// Footer links ke liye data, is se code saaf rehta hai
const footerSections = [
  {
    title: "Explore",
    links: [
      "Models",
      "Innovation",
      "Motorsports",
      "Company",
      "History",
      "Sustainability",
    ],
  },
  {
    title: "Service & Help",
    links: ["Contact", "FAQ", "Warranty", "Store Locator"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions", "Imprint", "Whistleblower"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-honda-dark text-gray-300 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Navigation Columns */}
        <div className="flex flex-wrap flex-col md:flex-row gap-8 justify-center text-center md:text-left">
          {/* Link Columns using map */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex-1 min-w-[180px]">
              <h4 className="font-semibold uppercase tracking-wider mb-3 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link} className="my-2">
                    <a
                      href="#"
                      className="hover:text-honda-red transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Region Selector Column */}
          <div className="flex-1 min-w-[180px]">
            <h4 className="font-semibold uppercase tracking-wider mb-3 text-white">
              Region
            </h4>
            <div>
              <select
                name="region"
                className="bg-transparent border border-gray-600 rounded px-2 py-1 hover:border-honda-red transition-colors duration-300"
              >
                <option>Pakistan (English)</option>
                <option>Germany (Deutsch)</option>
                <option>USA (English)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-700 my-8" />

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400 opacity-70">
          <p>© 2025 Syed Ali Shah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
