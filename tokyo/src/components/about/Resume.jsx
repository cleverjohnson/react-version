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
          year: "2021 - Current",
          institute: "Deggedorf University of Technology",
          degree: "Bachelor of Health Informatics",
        },
        {
          id: 2,
          year: "2017 - 2020",
          institute: "Makerere University",
          degree: "Bachelor of science in Education Biological",
        },
        {
          id: 3,
          year: "2015 - 2016",
          institute: "Our Lady of Gayaza",
          degree: "Uganda Advanced Certificate of Education",
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
          year: "2023 - Current",
          institute: "Artwerb GmbH",
          degree: "Web Developer",
        },
        {
          id: 2,
          year: "2014 - 2021",
          institute: "Nextel System Limited",
          degree: "Web Designer",
        },
        {
          id: 3,
          year: "2016 - 2021",
          institute: "Mukusu Motors Limited",
          degree: "Website Manager",
        },
      ],
    },
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
