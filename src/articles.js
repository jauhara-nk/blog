import React from 'react';


const Articles = () => {
  return (
    <div className="section">
      <h2>Articles</h2>
      <div className="article">
        <h3>Best Practices for Preventing Disease in Livestock</h3>
        <p>Effective disease prevention in livestock involves several key strategies:</p>
        <ul>
          <li>Regular vaccinations to prevent common diseases.</li>
          <li>Maintaining clean and sanitary living conditions.</li>
          <li>Providing balanced nutrition tailored to the species and life stage.</li>
          <li>Monitoring animal health daily and isolating sick animals promptly.</li>
          <li>Implementing biosecurity measures to prevent disease spread.</li>
        </ul>
      </div>
      <div className="article">
        <h3>Understanding Vaccination</h3>
        <p>Vaccination is crucial in protecting livestock from infectious diseases:</p>
        <ul>
          <li>Vaccines stimulate the immune system to recognize and combat pathogens.</li>
          <li>Regular booster shots are necessary to maintain immunity.</li>
          <li>Consult with a veterinarian to develop a comprehensive vaccination schedule.</li>
        </ul>
      </div>
      <div className="article">
        <h3>Feed and Nutrition</h3>
        <p>Proper nutrition is the foundation of livestock health:</p>
        <ul>
          <li>Ensure a balanced diet that meets the specific needs of the animal.</li>
          <li>Provide clean, fresh water at all times.</li>
          <li>Supplement diets with necessary vitamins and minerals.</li>
          <li>Adjust feeding practices according to the animal's age, health status, and production stage.</li>
        </ul>
      </div>
    </div>
  );
};

export default Articles;


