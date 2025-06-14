// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import PNavbar from './components/PNavbar';
// Import page components
import ICTPage from './pages/ICTPage';
import Faculty from './pages/Faculty';
import CSE from './pages/CSE';
import IT from './pages/IT';
import ECE from './pages/ECE';
import routes from './Routes/routes';
import HodMessage from './components/cse/Hod';
import Contact from './pages/Contact';
import ResearchArea from './pages/Research_area';
import ResearchProjects from './pages/Reasearch_project';
import ResearchScholars from './pages/Reasearch_Scholar';
import TrainingConsultancy from './pages/Training';
import Patents from './pages/Patent';


function App() {
  return (
    <Router>
      <PNavbar/>
      <Navbar />

      <Routes>
        <Route path={routes.home} element={<ICTPage />} />
        <Route path={routes.faculty} element={<Faculty />} />
        <Route path={routes.departments.cse} element={<CSE />} />
        <Route path={routes.departments.it} element={<IT />} />
        <Route path={routes.departments.ece} element={<ECE />} />
         <Route path={routes.about.dean} element={<HodMessage />} />
 <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.research.profile} element={<ResearchArea />} />
        <Route path={routes.research.projects} element={<ResearchProjects />} />
        <Route path={routes.research.scholars} element={<ResearchScholars />} />
        <Route path={routes.research.consultancy} element={<TrainingConsultancy />} />
         <Route path={routes.research.patents} element={<Patents />} />

      </Routes>
    </Router>
  );
}

export default App;
