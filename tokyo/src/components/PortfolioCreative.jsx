"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";
import "tailwindcss/tailwind.css";

Modal.setAppElement("#root");

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="tokyo_tm_portfolio">
          {/* Title */}
          <div className="tokyo_tm_title mb-8 text-center">
            <div className="left">
              <span className="text-xl font-semibold text-gray-700">Showcase</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Cutting-Edge Solutions in Health Informatics and Web Development
              </h3>
            </div>
          </div>

          {/* Project card */}
          <div className="project_card mb-6 text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              ChronoViVa – Diabetes Management EHR System
            </h4>
            <p className="text-gray-600 mb-4">
              ChronoViVa is a diabetes-focused Electronic Health Record (EHR) platform integrating
              FHIR, ICD-11, and AI modules to simplify data-driven care and real-time analytics.
            </p>
          </div>

          {/* Links */}
          <div className="project_links mt-6 flex flex-wrap justify-center space-x-4">
            <div className="tokyo_tm_button">
              <a
                href="https://gitlab.com/jcg8162212/chronoviva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View on GitLab</span>
              </a>
            </div>
            <div className="tokyo_tm_button">
              <a
                href="assets/pdf/ChronoViVa_Diabetes_Management_EHR_Concept.pdf"
                download
              >
                <span>Download Concept Paper</span>
              </a>
            </div>
            <div className="tokyo_tm_button">
              <button onClick={toggleModal}>
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Cover image */}
          <div className="w-full mt-8 mb-12 flex justify-center">
            <img
              src={coverImage}
              alt="ChronoViVa Cover"
              className="w-1/3 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          {/* Manual image slider */}
          <div className="relative w-full max-w-4xl mx-auto mb-8">
            <img
              src={images[currentIndex]}
              alt={`ChronoViVa view ${currentIndex + 1}`}
              className="w-full rounded-lg shadow-lg object-contain"
            />
            {/* Left arrow */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full"
            >
              &#8592;
            </button>
            {/* Right arrow */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
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
                  alt="ChronoViVa Overview"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="portfolio_main_title mb-6">
                <h3 className="text-2xl font-bold">
                  ChronoViVa – Diabetes Management EHR System
                </h3>
                <span className="text-lg text-gray-600">Project Details</span>
              </div>
              <div className="main_details text-gray-700">
                <p className="mb-4">
                  ChronoViVa integrates multiple health data streams to improve diabetes care through
                  FHIR-based interoperability, ICD-11 coding, and predictive analytics.
                </p>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Client:</span> Internal Research Project
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
      </Modal>
    </>
  );
};

export default Portfolio;
