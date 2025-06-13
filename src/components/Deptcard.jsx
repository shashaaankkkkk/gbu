import React, { useState } from 'react';
import { Mail, Phone, User, BookOpen, Award, ChevronRight } from 'lucide-react';

const departments = [
  {
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/29/full/1727598515-5448.jpg?im=FeatureCrop,size=(826,465)",
    name: "Department of Computer Science & Engineering",
    shortName: "CSE",
    description: "Specializes in Artificial Intelligence, Software Engineering, Data Science, and System Architecture.",
    specializations: ["Artificial Intelligence", "Software Engineering", "Data Science", "System Architecture"],
    hod: {
      name: "Dr. A. I. Singh",
      title: "Head of Department, AI & ML",
      email: "ai.singh@gbu.ac.in",
      phone: "+91 9876543210",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      experience: "15+ years",
      qualification: "Ph.D. in Computer Science"
    },
  },
  {
    image: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
    name: "Department of Information Technology",
    shortName: "IT",
    description: "Focuses on IT Infrastructure, Cyber Security, Networking, and Application Development.",
    specializations: ["IT Infrastructure", "Cyber Security", "Networking", "Application Development"],
    hod: {
      name: "Ms. Web D. Veloper",
      title: "Head of Department, Web Technologies",
      email: "web.veloper@gbu.ac.in",
      phone: "+91 9123456780",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      experience: "12+ years",
      qualification: "M.Tech in Information Technology"
    },
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4Q25MYvgKeSgtED-Cse4WKkqOoFSWaf02Q&s",
    name: "Department of Electronics & Communication Engineering",
    shortName: "ECE",
    description: "Explores Embedded Systems, IoT, Robotics, Signal Processing, and Wireless Communication.",
    specializations: ["Embedded Systems", "IoT", "Robotics", "Signal Processing", "Wireless Communication"],
    hod: {
      name: "Mr. C. Yber",
      title: "Head of Department, Cyber Security",
      email: "c.yber@gbu.ac.in",
      phone: "+91 9988776655",
      photo: "https://randomuser.me/api/portraits/men/85.jpg",
      experience: "18+ years",
      qualification: "Ph.D. in Electronics Engineering"
    },
  },
];

const DepartmentCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedHod, setSelectedHod] = useState(null);

  const handleContactHod = (hod) => {
    setSelectedHod(hod);
  };

  const closeModal = () => {
    setSelectedHod(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Departments at UISCT
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Excellence in Education, Innovation in Research
          </p>
        </div>
      </div>

      {/* Department Cards */}
      <div className="px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {departments.map((dept, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Department Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-700">{dept.shortName}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-white font-bold text-lg leading-tight">{dept.name}</h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{dept.description}</p>

                {/* Specializations */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-gray-700">Specializations</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dept.specializations.slice(0, 3).map((spec, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {spec}
                      </span>
                    ))}
                    {dept.specializations.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{dept.specializations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* HOD Section */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4 text-indigo-600" />
                    <span className="font-semibold text-gray-700">Head of Department</span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={dept.hod.photo}
                        alt={dept.hod.name}
                        className="w-16 h-16 rounded-full object-cover border-3 border-gradient-to-r from-blue-400 to-indigo-500 shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">{dept.hod.name}</h3>
                      <p className="text-sm text-indigo-600 font-medium mb-1">{dept.hod.title}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span>{dept.hod.qualification}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>Exp: {dept.hod.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span className="truncate">{dept.hod.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-green-500" />
                      <span>{dept.hod.phone}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button

                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                  >
                    <span>View More</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredCard === i && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/10 pointer-events-none rounded-2xl"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* HOD Contact Modal */}

    </div>
  );
};

export default DepartmentCard;
