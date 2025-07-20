import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/ServicePage/Service';
import Work from './pages/WorkPage/Work';
import ProjectsPage from "./pages/OurProjects/ProjectsPage";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<ProjectsPage />} />

        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;