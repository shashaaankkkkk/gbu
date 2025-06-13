import React from 'react';
import { Link } from 'react-router-dom';

const DropdownItem = ({ title, items }) => (
  <div className="relative group">
    <button className="text-sm text-gray-800 font-semibold flex items-center hover:text-purple-700 transition">
      {title}
      <span className="ml-1">▾</span>
    </button>
    <div className="absolute right-0 z-50 hidden group-hover:block bg-white mt-3 shadow-xl rounded-lg w-72 border border-gray-200">
      <div className="py-2">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="block px-5 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <>
      {/* Load Inter Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <header className="bg-white border-b shadow sticky top-0 z-50 font-['Inter']">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo + Title */}
          <div className="flex items-center space-x-4">
            <img
              src="https://gbu-campus-gateway.lovable.app/lovable-uploads/5ae0d9ed-e0e0-4921-a0f1-8e17676824d6.png"
              className="w-14 h-14 object-contain"
              alt="GBU Logo"
            />
            <div className="leading-tight">
              <h1 className="text-[16px] font-semibold text-gray-900 uppercase">
                Gautam Buddha University
              </h1>
              <p className="text-[12px] text-gray-500">
                An Ultimate Destination for Higher Learning
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center space-x-6 font-medium text-sm">
            <Link to="/schools/ict" className="text-gray-800 hover:text-purple-700 transition">Home</Link>
            <Link to="/faculty" className="text-gray-800 hover:text-purple-700 transition">Faculty</Link>

            <DropdownItem
              title="About Us"
              items={[
                { label: "Dean's Message", href: "/about/dean" },
                { label: "USICT COEIDrone Technologies", href: "/about/coeidrone" },
                { label: "USICT COEIRAEM", href: "/about/coeiraem" },
                { label: "USICT Board of Studies", href: "/about/board" },
                { label: "USICT Staff Members", href: "/about/staff" },
                { label: "USICT Laboratories", href: "/about/labs" },
                { label: "USICT Activities", href: "/about/activities" },
              ]}
            />

            <DropdownItem
              title="Departments & Programs"
              items={[
                { label: "Computer Science and Engineering", href: "/departments/cse" },
                { label: "Information Technology", href: "/departments/it" },
                { label: "Electronic & Communication", href: "/departments/ece" },
              ]}
            />

            <DropdownItem
              title="Research"
              items={[
                { label: "Research Area and Profile", href: "/research/profile" },
                { label: "Training and Consultancy", href: "/research/consultancy" },
                { label: "Research Scholars", href: "/research/scholars" },
                { label: "Research Projects", href: "/research/projects" },
                { label: "Patents", href: "/research/patents" },
              ]}
            />

            <Link to="/placement" className="text-gray-800 hover:text-purple-700 transition">Placement</Link>

            <DropdownItem
              title="Contact Us"


            />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
