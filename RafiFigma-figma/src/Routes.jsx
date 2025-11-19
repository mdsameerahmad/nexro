import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Service from './pages/ServicePage/Service';
import Work from './pages/WorkPage/Work';

import ScrollToTop from './ScrollToTop';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />  {/* FIX: ScrollToTop inside Router */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
