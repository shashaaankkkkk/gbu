import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RecentPlacements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recentPlacements = [
    {
      name: 'Priya Sharma',
      company: 'Microsoft',
      package: '₹42 LPA',
      department: 'CSE',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c2c2?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Rahul Kumar',
      company: 'Google',
      package: '₹38 LPA',
      department: 'IT',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Anita Singh',
      company: 'Amazon',
      package: '₹35 LPA',
      department: 'ECE',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Vikash Gupta',
      company: 'Adobe',
      package: '₹32 LPA',
      department: 'CSE',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Sneha Reddy',
      company: 'Oracle',
      package: '₹28 LPA',
      department: 'IT',
      photo: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Arjun Patel',
      company: 'Intel',
      package: '₹30 LPA',
      department: 'ECE',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(recentPlacements.length / 2));
    }, 4000);
    return () => clearInterval(timer);
  }, [recentPlacements.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(recentPlacements.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(recentPlacements.length / 2)) % Math.ceil(recentPlacements.length / 2));
  };

  const getCurrentPlacements = () => {
    const startIndex = currentSlide * 2;
    return recentPlacements.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
            Recent Placements
          </h2>
          <p className="text-xl text-gray-600">Our students securing top positions</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Card Slider */}
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
            <CardTitle className="flex items-center justify-center text-blue-800 text-lg font-bold">
              <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3" />
              Success Stories
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8">
                {getCurrentPlacements().map((placement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <img
                      src={placement.photo}
                      alt={placement.name}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-yellow-300/30 group-hover:ring-yellow-400/60 transition-all duration-300"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                        {placement.name}
                      </h4>
                      <p className="text-gray-600 mb-2">{placement.department} Department</p>
                      <p className="font-bold text-green-600 text-xl mb-1">{placement.package}</p>
                      <Badge variant="outline" className="border-blue-600 text-blue-600">
                        {placement.company}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(recentPlacements.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 shadow-lg scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RecentPlacements;
