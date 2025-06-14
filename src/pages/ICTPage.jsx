

Landing
import AboutSection from '../components/AboutIct.jsx';
import DeanMessage from '../components/Dean';
import ProgramsShowcase from '../components/Program';
import DepartmentsSection from '../components/Deptcard.jsx';
import NoticeEvents from '../components/Notice.jsx';
import PlacementsSection from '../components/Placement.jsx';
import RecentPlacements from '../components/Recent_Placement.jsx';
import RecruitersShowcase from '../components/Recuritor_showcase';
import ClubsAchievements from '../components/Clubs_activevment.jsx';
import StudentAchievements from '../components/Student_achievements.jsx';
import IncubationCenter from '../components/Incubations.jsx';
import Landing from '../components/Landing.jsx';





const Index = () => {
  return (
    <div className="min-h-screen bg-white">

      <Landing />
      <AboutSection />
      <DeanMessage />
      <ProgramsShowcase />
      <DepartmentsSection />
      <NoticeEvents />
      <PlacementsSection />
      <RecentPlacements />
      <RecruitersShowcase />
      <ClubsAchievements />
      <StudentAchievements />
      <IncubationCenter />

    </div>
  );
};

export default Index;
