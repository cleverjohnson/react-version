import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Johnson Clever",
    designation: "Polygot Programmer",
    text: (
    <>
      <p>
        I’m Johnson Clever, a computational health data scientist and software developer with a background in health informatics and a master’s in computer science in progress. I design and build intelligent digital health systems that transform medical data into actionable insight, integrating AI, data engineering, and full-stack development through projects like ChronoViva — an open-source EHR platform for diabetes management. My work blends Python, React, Flask, and FHIR R4 to create scalable, interoperable healthcare solutions that drive data-driven care and measurable impact.
      </p>
    </>
    ),
  };

  // Inline style object for the image
  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    
    animation: 'fadeInUp 1s ease-out',
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
      <div className="top_author_image">
        <img src={introContent.image} alt="about" style={imageStyle} />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
