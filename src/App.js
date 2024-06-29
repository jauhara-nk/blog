import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import AnimalDiseases from './Disease';
import Articles from './articles';
import DiseaseDetail from './diseaseDetail';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Farmer Vet Application</h1>
          <nav>
            <NavLink to="/articles" className={({ isActive }) => (isActive ? 'active-link' : '')}>Articles</NavLink>
            <NavLink to="/animal-diseases" className={({ isActive }) => (isActive ? 'active-link' : '')}>Animal Diseases</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/articles" />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/animal-diseases" element={<AnimalDiseases />} />
            <Route path="/animal-diseases/:id" component={DiseaseDetail} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;




