import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
  // for modal details
  const [isOpen, setIsOpen] = useState(false);

  // toggle modal
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title" style={{ marginBottom: "30px" }}>
            <div className="title_flex">
              <div className="left">
                <span>Showcase</span>
                <h3 style={{ marginBottom: "30px", fontSize: "24px", lineHeight: "1.4" }}>
                  Cutting-Edge Solutions in Health Informatics and Web Development
                </h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="project_card" style={{ marginBottom: "50px" }}>
            <h4>ChronoViVa - Diabetes Management EHR System</h4>
            <p>
              ChronoViVa is an advanced Diabetes Management Electronic Health Record (EHR) System designed to streamline diabetes care by integrating various health data sources, utilizing machine learning models, and standardizing healthcare records using FHIR and ICD-11 classifications.
            </p>

            <div className="project_links" style={{ marginBottom: "30px" }}>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ marginBottom: "15px" }}>
                  <a 
                    href="https://your-live-demo-link.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: "#007bff", textDecoration: "none", fontSize: "18px" }}
                  >
                    <i className="fas fa-play-circle"></i> Live Demo
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a 
                    href="https://github.com/your-github-repo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: "#007bff", textDecoration: "none", fontSize: "18px" }}
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a 
                    href="assets/pdf/ChronoViVa_Diabetes_Management_EHR_Concept.pdf" 
                    download 
                    style={{ color: "#007bff", textDecoration: "none", fontSize: "18px" }}
                  >
                    <i className="fas fa-file-pdf"></i> Download Concept Paper
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <button 
                    onClick={toggleModal} 
                    style={{ color: "#007bff", background: "none", border: "none", fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fas fa-info-circle"></i> Learn More About ChronoViVa
                  </button>
                </li>
              </ul>
            </div>

            <div className="project_media">
              <img src="assets/img/portfolio/diabetes-ehr-mockup.jpg" alt="ChronoViVa Mockup" style={{ width: "100%", borderRadius: "8px" }} />
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
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image" style={{ marginBottom: "30px" }}>
                <img src="assets/img/portfolio/diabetes-ehr-mockup.jpg" alt="ChronoViVa Mockup" style={{ width: "100%", borderRadius: "8px" }} />
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title" style={{ marginBottom: "20px" }}>
                <h3>ChronoViVa - Diabetes Management EHR System</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox" style={{ marginBottom: "20px" }}>
                  <h4>Concept Paper: ChronoViVa - Diabetes Management Electronic Health Record (EHR) System</h4>
                  <p>
                    **Introduction:**<br />
                    Diabetes is a chronic condition requiring meticulous management of multiple health parameters, such as blood glucose levels, heart rate, and body weight. ChronoViVa is an advanced EHR system designed to streamline diabetes care by integrating various health data sources, utilizing machine learning models, and standardizing healthcare records using FHIR and ICD-11 classifications. This system provides real-time data visualization, predictive analytics, and comprehensive patient care support.
                  </p>
                  {/* You can add more sections or include the full concept here */}
                </div>
                <div className="detailbox">
                  <ul style={{ paddingLeft: "0", listStyleType: "none" }}>
                    <li>
                      <span className="first">Client</span>
                      <span>Your Healthcare Organization</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>EHR Application</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>August 23, 2024</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PROJECT DETAILS */}
    </>
  );
};

export default Portfolio;
