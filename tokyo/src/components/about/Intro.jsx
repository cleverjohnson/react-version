import React from "react";

const Intro = () => {
  const introContent = {
    designation: "Computational Health Data Scientist",
    text: (
    <>
      <p>
        I’m Johnson Clever, a computational health data scientist and software developer with a background in health informatics and a master’s in computer science in progress. I design and build intelligent digital health systems that transform medical data into actionable insight, integrating AI, data engineering, and full-stack development through projects like ChronoViva — an open-source EHR platform for diabetes management. My work blends Python, React, Flask, and FHIR R4 to create scalable, interoperable healthcare solutions that drive data-driven care and measurable impact.
      </p>
    </>
    ),
  };

  // Keyframes defined for inline style
  const keyframesStyle = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      {/* Add style tag for keyframes animation */}
      <style>{keyframesStyle}</style>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
