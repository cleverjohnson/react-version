import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " Python (Pandas, Scikit-learn, Flask, FastAPI)",
        " JavaScript (React, Node.js)",
        " Docker, PostgreSQL, Git",
        " FHIR R4, ICD-11, Health Data Standards",
        " Machine Learning & Data Visualization",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Building AI-driven Health Systems",
        " Developing Data Pipelines",
        " Clinical Decision Support Research",
        " Web App Development & Optimization",
        " Exploring Digital Health Innovation",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
