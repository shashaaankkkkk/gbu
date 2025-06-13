import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes/routes';

const DropdownItem = ({ title, items }) => {
  return (
    <div className="relative group">
      <div className="inline-block">
        <button className="text-sm text-gray-800 font-semibold flex items-center hover:text-purple-700 transition">
          {title}
          <span className="ml-1">▾</span>
        </button>
      </div>

      {/* This container will stay open as long as mouse is on button or dropdown */}
      <div className="absolute right-0 z-50 mt-2 w-72 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg border border-gray-200">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="px-5 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="bg-[#ffffff] border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="./assets/logo.webp"
            className="w-14 h-14"
            alt="GBU Logo"
          />
          <div>
            <h1 className="text-[16px] font-semibold text-gray-900 leading-5">
              GAUTAM BUDDHA UNIVERSITY
            </h1>
            <p className="text-[12px] text-gray-600">An Ultimate Destination for Higher Learning</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 font-medium">
          <Link to={routes.home} className="text-black hover:text-purple-700">Home</Link>
          <Link to={routes.faculty} className="text-black hover:text-purple-700">Faculty</Link>

          <DropdownItem
            title="About Us"
            items={[
              { label: "Dean's Message", href: routes.about.dean },
              { label: "USICT COEIDrone Technologies", href: routes.about.coeidrone },
              { label: "USICT COEIRAEM", href: routes.about.coeiraem },
              { label: "USICT Board of Studies", href: routes.about.board },
              { label: "USICT Staff Members", href: routes.about.staff },
              { label: "USICT Laboratories", href: routes.about.labs },
              { label: "USICT Activities", href: routes.about.activities },
            ]}
          />

          <DropdownItem
            title="Departments & Academic Programs"
            items={[
              { label: "Department of Computer Science and Engineering", href: routes.departments.cse },
              { label: "Department of Information Technology", href: routes.departments.it },
              { label: "Department of Electronic & Communication", href: routes.departments.ece },
            ]}
          />

          <DropdownItem
            title="Research"
            items={[
              { label: "Research Area and Profile", href: routes.research.profile },
              { label: "Training and Consultancy", href: routes.research.consultancy },
              { label: "Research Scholars", href: routes.research.scholars },
              { label: "Research Projects", href: routes.research.projects },
              { label: "Patents", href: routes.research.patents },
            ]}
          />



 <Link to="/Contactus" className="text-gray-800 hover:text-purple-700 transition">Contact us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
