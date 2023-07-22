import React from "react";
import FunFact from "./FunFact";
import Services from "./Services";

const ServiceMain = () => {
  return (
    <>
      {/* SERVICE */}

      <div className="container">
        <div className="tokyo_tm_services">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Services</span>
                <h3>What I Do</h3>
              </div>
            </div>
          </div>
          {/* End tokyo_tm_title */}

          <div className="list">
            <ul>
              <Services />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}

      <div className="tokyo_tm_facts">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Fun Facts</h3>
          </div>
          <div className="list">
            <ul>
              <FunFact />
            </ul>
          </div>
        </div>
      </div>
      {/* End funfacts */}

      {/* /SERVICE */}
    </>
  );
};

export default ServiceMain;
