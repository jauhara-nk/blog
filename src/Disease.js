import React from 'react';
import { Link } from 'react-router-dom';


const AnimalDiseases = () => {
  const diseases = [
    {
      name: 'Foot-and-Mouth Disease',
      preview: 'A severe, highly contagious viral disease of livestock.',
      detail: 'Foot-and-mouth disease is caused by the Foot-and-Mouth Disease Virus (FMDV), which affects cloven-hoofed animals. Symptoms include fever, blisters on the mouth and feet, excessive salivation, and lameness. Prevention includes regular vaccination, strict biosecurity measures, avoiding contact with infected animals, and maintaining good hygiene practices.',
    },
    {
      name: 'Avian Influenza',
      preview: 'An infectious viral disease of birds.',
      detail: 'Avian influenza is caused by influenza type A viruses, which can infect poultry and other bird species. Symptoms include respiratory distress, decreased egg production, swelling of the head, neck, and eyes, and nasal discharge. Prevention includes biosecurity measures, vaccination where appropriate, and rapid response to outbreaks to contain the virus.',
    },
    {
      name: 'Bovine Tuberculosis',
      preview: 'A chronic disease of animals caused by the bacterium Mycobacterium bovis.',
      detail: 'Bovine tuberculosis is caused by the bacterium Mycobacterium bovis, which can infect cattle and other animals. Symptoms include chronic cough, weight loss, fever, and enlarged lymph nodes. Prevention includes regular testing and culling of infected animals, maintaining good herd health, and biosecurity measures to prevent the spread of the bacterium.',
    },
  ];

  return (
    <div className="section">
      <h2>Animal Diseases</h2>
      {diseases.map((disease, index) => (
        <div key={index} className="disease-preview">
          <h3>{disease.name}</h3>
          <p>{disease.preview}</p>
          <Link to={`/animal-diseases/${index}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default AnimalDiseases;
