"use client"; // For Next.js or if client-side rendering is necessary

import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "flowbite-react"; // Import the Flowbite carousel
import Social from "./Social";
import "tailwindcss/tailwind.css"; // Ensure TailwindCSS is imported

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const coverImage = "assets/img/diabetesmanagementehr.png";
  const images = [
    "assets/img/EditEncounter.png",
    "assets/img/EditObservation.png",
    "assets/img/NewEncounter.png",
    "assets/img/NewObservation.png",
    "assets/img/page1.png",
    "assets/img/page2.png",
  ];

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="tokyo_tm_portfolio">
          {/* Title and Showcase Section */}
          <div className="tokyo_tm_title mb-8 text-center">
            <div className="left">
              <span className="text-xl font-semibold text-gray-700">Showcase</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Cutting-Edge Solutions in Health Informatics and Web Development
              </h3>
            </div>
          </div>

          {/* Project Title and Description */}
          <div className="project_card mb-6 text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">ChronoViVa - Diabetes Management EHR System</h4>
            <p className="text-gray-600 mb-4">
              ChronoViVa is an advanced Diabetes Management Electronic Health Record (EHR) System designed to streamline diabetes care by integrating various health data sources, utilizing machine learning models, and standardizing healthcare records using FHIR and ICD-11 classifications.
            </p>
          </div>

{/* Buttons right after the description */}
<div className="project_links mt-6 flex flex-wrap justify-center space-x-4">
  <div className="tokyo_tm_button" data-position="left">
    <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer">
      <span>Live Demo</span>
    </a>
  </div>
  
  <div className="tokyo_tm_button" data-position="left">
    <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>
  </div>
  
  <div className="tokyo_tm_button" data-position="left">
    <a href="assets/pdf/ChronoViVa_Diabetes_Management_EHR_Concept.pdf" download>
      <span>Download Concept Paper</span>
    </a>
  </div>
  
  <div className="tokyo_tm_button" data-position="left">
    <button onClick={toggleModal}>
      <span>Learn More</span>
    </button>
  </div>
</div>


          {/* Main Image Section with reduced size and spacing */}
          <div className="w-full mt-8 mb-12 flex justify-center">
            <img
              src={coverImage}
              alt="ChronoViVa Cover"
              className="w-1/4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          {/* Flowbite Carousel */}
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-8">
            <Carousel>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`ChronoViVa additional view ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* MODAL FOR PROJECT DETAILS */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Project Details"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image mb-8">
                <img
                  src={coverImage}
                  alt="ChronoViVa Project Overview"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="portfolio_main_title mb-6">
                <h3 className="text-2xl font-bold">ChronoViVa - Diabetes Management EHR System</h3>
                <span className="text-lg text-gray-600">Details</span>
              </div>
              <div className="main_details">
                <div className="textbox mb-6">
                  <h4 className="text-xl font-semibold">
                    Concept Paper: ChronoViVa - Diabetes Management Electronic Health Record (EHR) System
                  </h4>
                  <p className="text-gray-700">
                    **Introduction:**<br />
                    Diabetes is a chronic condition requiring meticulous management of multiple health
                    parameters, such as blood glucose levels, heart rate, and body weight. ChronoViVa is
                    an advanced EHR system designed to streamline diabetes care by integrating various
                    health data sources, utilizing machine learning models, and standardizing healthcare
                    records using FHIR and ICD-11 classifications. This system provides real-time data
                    visualization, predictive analytics, and comprehensive patient care support.
                  </p>
                </div>
                <div className="detailbox">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-semibold">Client:</span> Your Healthcare Organization
                    </li>
                    <li>
                      <span className="font-semibold">Category:</span> EHR Application
                    </li>
                    <li>
                      <span className="font-semibold">Date:</span> August 23, 2024
                    </li>
                    <li>
                      <span className="font-semibold">Share:</span> <Social />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
