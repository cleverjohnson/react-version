import React from "react";
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

      {/* End funfacts */}

      {/* /SERVICE */}
    </>
  );
};

export default ServiceMain;
