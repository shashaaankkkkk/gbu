import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const NoticeEvents = () => {
  const notices = [
    { title: 'Semester Exam Schedule Released', date: '2024-01-15', type: 'Important' },
    { title: 'Placement Drive - TCS', date: '2024-01-20', type: 'Placement' },
    { title: 'Research Paper Submission Deadline', date: '2024-01-25', type: 'Academic' },
    { title: 'Annual Tech Fest Registration', date: '2024-02-01', type: 'Event' }
  ];

  const events = [
    {
      title: 'National Engineering Day Celebration',
      date: '2024-01-28',
      image: 'https://source.unsplash.com/featured/?engineering',
      description: 'Celebrating innovation and engineering excellence'
    },
    {
      title: 'Industry Expert Lecture Series',
      date: '2024-02-05',
      image: 'https://source.unsplash.com/featured/?lecture',
      description: 'Leading industry professionals share insights'
    },
    {
      title: 'Annual Sports Festival',
      date: '2024-02-12',
      image: 'https://source.unsplash.com/featured/?sports,stadium',
      description: 'Inter-departmental sports competition'
    },
    {
      title: 'Research Symposium 2024',
      date: '2024-02-18',
      image: 'https://source.unsplash.com/featured/?research,conference',
      description: 'Showcasing student and faculty research'
    },
    {
      title: 'Cultural Night',
      date: '2024-02-25',
      image: 'https://source.unsplash.com/featured/?concert,dance',
      description: 'Musical and dance performances by students'
    },
    {
      title: 'Innovation Challenge',
      date: '2024-03-02',
      image: 'https://source.unsplash.com/featured/?technology,startup',
      description: 'Students present innovative project solutions'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-3">Campus Life</h2>
          <p className="text-xl text-gray-600">Stay updated with latest notices and events</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-10 gap-10">
          {/* Notice Board */}
          <div className="lg:col-span-3">
            <Card className="rounded-xl shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Calendar size={20} />
                  Notice Board
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-sm text-blue-900">{notice.title}</h4>
                        <Badge className="text-xs px-2 py-0.5 capitalize bg-blue-100 text-blue-800">{notice.type}</Badge>
                      </div>
                      <p className="text-xs text-gray-500">{notice.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Gallery */}
          <div className="lg:col-span-7">
            <Card className="rounded-xl shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-800">Event Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
                      </div>
                      <h4 className="font-semibold text-blue-900 text-sm mb-1">{event.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{event.description}</p>
                      <p className="text-xs text-blue-600 font-medium">{event.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeEvents;
