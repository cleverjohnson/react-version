import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Technical Skills",
      progress: [
        {
          id: 1,
          skillName: "Python (Pandas, Scikit-learn, Flask)",
          skillValue: "90",
        },
        {
          id: 2,
          skillName: "JavaScript (React, Node.js)",
          skillValue: "80",
        },
        {
          id: 3,
          skillName: "Docker & PostgreSQL",
          skillValue: "75",
        },
        {
          id: 4,
          skillName: "FHIR R4 & Health Data Standards",
          skillValue: "70",
        },
        {
          id: 5,
          skillName: "Machine Learning & Data Analysis",
          skillValue: "80",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Language Skills",
      progress: [
        {
          id: 1,
          skillName: "English",
          skillValue: "100",
        },
        {
          id: 2,
          skillName: "German",
          skillValue: "55",
        },
        {
          id: 3,
          skillName: "Luganda",
          skillValue: "85",
        },
      ],
    },
  ];

  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                data-value={skill.skillValue}
                key={skill.id}
              >
                <span>
                  <span className="label">{skill?.skillName}</span>
                  <span className="number">{skill?.skillValue}%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div
                      className="bar_in"
                      style={{ width: skill?.skillValue + "%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
