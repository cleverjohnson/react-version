import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Johnson Clever",
    designation: "Polygot Programmer",
    text: (
      <>
        <p>
        Hello, my name is Johnson Clever, a seasoned programming enthusiast with a deep-rooted passion for web development and data science. My journey began with website design and hosting through WordPress, where I spent nearly a decade honing my coding skills. My language of expertise is Python, although I am adept at several other programming languages.
        </p>
        <p>
        As a professional with a background in Health Informatics, I apply my knowledge to design and build full-scale software systems from scratch. One of my unique abilities is transforming nascent ideas into highly functional software solutions that not only stand out aesthetically but also embody modern functionality.
        </p>
        <p>
        Equipped with an extensive understanding of web mechanics, I optimize intricate integrations to demand minimal maintenance. The systems I develop are not only self-sufficient but can also operate seamlessly for extended periods. My passion for data science allows me to create and manipulate databases with ease, efficiently handling massive amounts of data to aid in data-driven decision making.
        </p>
        <p>
        My ultimate goal is to create cutting-edge digital solutions in Health Informatics that bridge the gap between healthcare and technology, thereby streamlining processes, improving patient outcomes, and promoting data-driven insights.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
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
