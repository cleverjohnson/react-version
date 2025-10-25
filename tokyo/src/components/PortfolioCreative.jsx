"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";
import "tailwindcss/tailwind.css";

Modal.setAppElement("#root");

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

          {/* Cover image with overlay CTA */}
          <div className="relative flex justify-center mt-8 mb-12">
            <img
              src={coverImage}
              alt="ChronoViVa Cover"
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 object-contain"
              style={{ maxWidth: "350px", width: "70%", height: "auto"}}
            />

            {/* Overlay that triggers modal */}
            <button
              onClick={toggleModal}
              className="absolute inset-0 flex items-center justify-center 
                         bg-black bg-opacity-40 opacity-0 hover:opacity-100 
                         transition-opacity rounded-xl cursor-pointer"
            >
              <span className="flex items-center gap-2 text-white text-lg font-semibold tracking-wide">
                {/* Small launch arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-4.553a1 1 0 011.414 1.414L16.414 11.5H21a1 1 0 010 2h-6a1 1 0 01-1-1V7a1 1 0 112 0v3.086z"
                  />
                </svg>
                Explore Project
              </span>
            </button>
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
          </div>

        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Project Details"
        className="mymodal max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 outline-none overflow-y-auto max-h-[90vh]"
        overlayClassName="myoverlay fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        closeTimeoutMS={300}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox relative">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
            onClick={toggleModal}
          >
            <img src="assets/img/svg/cancel.svg" alt="close icon" className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="box_inner">
            <div className="description_wrap">
              {/* Project overview */}
              <div className="mb-6">
                <img
                  src={coverImage}
                  alt="ChronoViVa Overview"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="portfolio_main_title mb-6 text-center">
                <h3 className="text-2xl font-bold">
                  ChronoViVa – Diabetes Management EHR System
                </h3>
                <span className="text-lg text-gray-600">Project Details</span>
              </div>

              <div className="main_details text-gray-700 mb-8">
                <p className="mb-4">
                  ChronoViVa integrates multiple health data streams to improve diabetes care through
                  FHIR-based interoperability, ICD-11 coding, and predictive analytics. The system
                  supports patient encounters, observations, and smart dashboards built in React and Flask.
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

              {/* All screenshots shown at once */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={src}
                      alt={`ChronoViVa Screenshot ${index + 1}`}
                      className="rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
