import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Social from "./Social";
import "tailwindcss/tailwind.css"; 

const Portfolio = () => {
  // for modal details
  const [isOpen, setIsOpen] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openCarouselModal = (image) => {
    setSelectedImage(image);
    setCarouselOpen(true);
  };

  const closeCarouselModal = () => setCarouselOpen(false);

  return (
    <>
      <div className="container mx-auto px-4 py-6">

        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title mb-8">
            <div className="title_flex">
              <div className="left">
                <span className="text-xl font-semibold text-gray-700">Showcase</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cutting-Edge Solutions in Health Informatics and Web Development
                </h3>
              </div>
            </div>
          </div>

          {/* Small Cover Image at the Top */}
          <div className="w-full mb-8 flex justify-center">
            <img src={coverImage} alt="ChronoViVa Cover" className="w-1/4 rounded-lg shadow-md" />
          </div>

          <div className="project_card mb-12">
            <h4 className="text-xl font-bold text-gray-800">ChronoViVa - Diabetes Management EHR System</h4>
            <p className="text-gray-600">
              ChronoViVa is an advanced Diabetes Management Electronic Health Record (EHR) System designed to streamline diabetes care by integrating various health data sources, utilizing machine learning models, and standardizing healthcare records using FHIR and ICD-11 classifications.
            </p>

            <div className="project_links my-6">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://your-live-demo-link.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline flex items-center text-lg"
                  >
                    <i className="fas fa-play-circle mr-2"></i> Live Demo
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/your-github-repo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline flex items-center text-lg"
                  >
                    <i className="fab fa-github mr-2"></i> View on GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="assets/pdf/ChronoViVa_Diabetes_Management_EHR_Concept.pdf" 
                    download 
                    className="text-blue-500 hover:underline flex items-center text-lg"
                  >
                    <i className="fas fa-file-pdf mr-2"></i> Download Concept Paper
                  </a>
                </li>
                <li>
                  <button 
                    onClick={toggleModal} 
                    className="text-blue-500 hover:underline flex items-center text-lg"
                  >
                    <i className="fas fa-info-circle mr-2"></i> Learn More About ChronoViVa
                  </button>
                </li>
              </ul>
            </div>

            {/* Smaller Image Carousel */}
            <div className="image_carousel mb-6">
              <Carousel 
                showThumbs={true} 
                infiniteLoop={true} 
                autoPlay={true} 
                interval={3000} // Adjust time between slides
                stopOnHover={true} 
                showStatus={false} 
                dynamicHeight={false}
                width="60%"
                className="mx-auto"
              >
                {images.map((image, index) => (
                  <div key={index} className="cursor-pointer" onClick={() => openCarouselModal(image)}>
                    <img src={image} alt={`ChronoViVa additional view ${index + 1}`} className="w-full rounded-lg shadow-md" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* Placeholder for additional projects */}
          {/* Add more project cards here as you develop new projects */}
        </div>
      </div>

      {/* START MODAL FOR PROJECT DETAILS */}
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
                <img src={coverImage} alt="ChronoViVa Project Overview" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="portfolio_main_title mb-6">
                <h3 className="text-2xl font-bold">ChronoViVa - Diabetes Management EHR System</h3>
                <span className="text-lg text-gray-600">Details</span>
              </div>
              <div className="main_details">
                <div className="textbox mb-6">
                  <h4 className="text-xl font-semibold">Concept Paper: ChronoViVa - Diabetes Management Electronic Health Record (EHR) System</h4>
                  <p className="text-gray-700">
                    **Introduction:**<br />
                    Diabetes is a chronic condition requiring meticulous management of multiple health parameters, such as blood glucose levels, heart rate, and body weight. ChronoViVa is an advanced EHR system designed to streamline diabetes care by integrating various health data sources, utilizing machine learning models, and standardizing healthcare records using FHIR and ICD-11 classifications. This system provides real-time data visualization, predictive analytics, and comprehensive patient care support.
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

      {/* START MODAL FOR CAROUSEL */}
      {carouselOpen && (
        <Modal
          isOpen={carouselOpen}
          onRequestClose={closeCarouselModal}
          contentLabel="Image Carousel"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div className="carousel_modal_content">
            <button className="close-modal" onClick={closeCarouselModal}>
              <img src="assets/img/svg/cancel.svg" alt="close icon" />
            </button>
            <div className="carousel_inner">
              <img src={selectedImage} alt="Detailed View" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </Modal>
      )}
      {/* END MODAL FOR CAROUSEL */}
    </>
  );
};

export default Portfolio;
