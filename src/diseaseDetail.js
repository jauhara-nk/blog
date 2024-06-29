import React from 'react';
import { useParams } from 'react-router-dom';


const DiseaseDetail = () => {
  const { id } = useParams();
  const diseases = [
    {
      name: 'Foot-and-Mouth Disease',
      detail: 'Foot-and-mouth disease is caused by the Foot-and-Mouth Disease Virus (FMDV), which affects cloven-hoofed animals. Symptoms include fever, blisters on the mouth and feet, excessive salivation, and lameness. Prevention includes regular vaccination, strict biosecurity measures, avoiding contact with infected animals, and maintaining good hygiene practices.',
    },
    {
      name: 'Avian Influenza',
      detail: 'Avian influenza is caused by influenza type A viruses, which can infect poultry and other bird species. Symptoms include respiratory distress, decreased egg production, swelling of the head, neck, and eyes, and nasal discharge. Prevention includes biosecurity measures, vaccination where appropriate, and rapid response to outbreaks to contain the virus.',
    },
    {
      name: 'Bovine Tuberculosis',
      detail: 'Bovine tuberculosis is caused by the bacterium Mycobacterium bovis, which can infect cattle and other animals. Symptoms include chronic cough, weight loss, fever, and enlarged lymph nodes. Prevention includes regular testing and culling of infected animals, maintaining good herd health, and biosecurity measures to prevent the spread of the bacterium.',
    },
  ];

  const disease = diseases[id];

  return (
    <div className="disease-detail">
      <h2>{disease.name}</h2>
      <p>{disease.detail}</p>
    </div>
  );
};

export default DiseaseDetail;
