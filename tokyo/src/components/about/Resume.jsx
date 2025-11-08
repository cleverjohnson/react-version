import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2025 - Present",
          institute: "Heriot-Watt University, United Kingdom",
          degree: "MSc Computer Science (Data Systems, AI & Machine Learning)",
        },
        {
          id: 2,
          year: "2021 - 2025",
          institute: "Technische Hochschule Deggendorf, Germany",
          degree: "Bachelor of Health Informatics (Undergraduate Studies)",
        },
        {
          id: 3,
          year: "2017 - 2019",
          institute: "Makerere University, Uganda",
          degree: "Bachelor of Science in Education (Biological)",
        },
        {
          id: 4,
          year: "2015 - 2016",
          institute: "Our Lady of Good Counsel – Gayaza, Uganda",
          degree: "Uganda Advanced Certificate of Education (Health Sciences)",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "Nov 2025 - Feb 2026",
          institute: "Malengo gGmbH, Berlin",
          degree: "Product & Data Support / Student Services",
        },
        {
          id: 2,
          year: "2023 - 2025",
          institute: "Atwerb GmbH, Germany",
          degree: "Full-Stack Developer",
        },
        {
          id: 3,
          year: "2017 - 2021",
          institute: "Nextel Systems Limited, Uganda",
          degree: "Software Developer",
        },
        {
          id: 4,
          year: "2018 - 2021",
          institute: "Mukusu Motors & Properties Ltd, Uganda",
          degree: "Website Administrator",
        },
        {
          id: 5,
          year: "2021 - 2023",
          institute: "Various Companies – Germany (Develey, Plantura, Sendmoments, Zenjob)",
          degree: "Technical & Logistics",
        },
      ],
    }
  ];

  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
