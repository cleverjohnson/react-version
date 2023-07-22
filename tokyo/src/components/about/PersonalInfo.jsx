import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "07.07.1998",
        },
        {
          id: 2,
          name: "Age",
          content: "25",
        },
        {
          id: 3,
          name: "Address",
          content: "Woching-3, 84347 Pfarrkirchen|DE",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:40ndgc2@gmail.com">40ndgc2@gmail.com</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+4917670339367">+4917670339367</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "UGANDAN",
        },
        {
          id: 2,
          name: "Study",
          content: "Deggendorf University of Technology",
        },
        {
          id: 3,
          name: "Degree",
          content: "Bachelor",
        },
        {
          id: 4,
          name: "Interest",
          content: "<Writing_Code />",
        },
        {
          id: 5,
          name: "Passion",
          content: "Digital-Health",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
