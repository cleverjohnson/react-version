import React from "react";

const Services = () => {
  const serviceContent = [
    {
      id: 1,
      no: "01",
      title: "Full-Stack Web Development",
      text: `Build and maintain scalable web apps using React, Flask, and PostgreSQL. Experienced with PHP and WordPress customization from my work at Atwerb GmbH.`,
    },
    {
      id: 2,
      no: "02",
      title: "Health Informatics Systems",
      text: `Design interoperable EHR solutions powered by FHIR R4 and ICD-11 standards, including ChronoViva — a diabetes management platform.`,
    },
    {
      id: 3,
      no: "03",
      title: "Data Science & Machine Learning",
      text: `Analyze and visualize health data with Python, Pandas, and Scikit-learn to generate insights for clinical decision support.`,
    },
    {
      id: 4,
      no: "04",
      title: "API Integration & Automation",
      text: `Develop and connect RESTful APIs for healthcare and financial systems, using Docker for deployment and automation.`,
    },
    {
      id: 5,
      no: "05",
      title: "Digital Health Innovation",
      text: `Combine AI, data visualization, and web tech to create smart tools that enhance patient care and clinical workflows.`,
    },
    {
      id: 6,
      no: "06",
      title: "Technical Consultation",
      text: `Collaborate on health-tech and data projects, translating complex ideas into scalable, user-centered software solutions.`,
    },
  ];

  return (
    <>
      {serviceContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <span className="number">{item.no}</span>
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.text}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default Services;
