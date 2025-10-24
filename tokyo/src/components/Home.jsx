import React, { useRef, useEffect } from "react";
import Social from "./Social";
import backgroundVideo from "./background.mp4";
import profileImage from "./image.jpeg";  // Update the file name accordingly
import styles from "./Home.module.css";  // Import CSS module
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set playback rate when the component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25; // Adjust playback speed (e.g., 0.5 for half speed)
    }
  }, []);

  return (
    <>
      <div className={styles.tokyo_tm_home}>
        <div className={styles.video_background}>
          <video
            ref={videoRef} // Attach the ref to the video element
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.overlay}></div> {/* Add overlay */}
        <div className={styles.home_content}>
          <img src={profileImage} alt="Johnson Clever" className={styles.profilePic} />
          <div className={styles.details}>
            <h3 className={styles.name}>
              <TypeAnimation
                sequence={[
                  "Data Scientist", 2000,
                  "AI Systems", 2000,
                  "Health Innovator", 2000,
                ]}
                speed={30}
                repeat={Infinity}
              />
            </h3>
            <p
              className={styles.job}
              style={{
                fontFamily: "'Roboto', 'Lato', 'Source Sans Pro', 'Open Sans', 'IBM Plex Sans', sans-serif",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#fff",
              }}
            >
              Computational health data scientist and full-stack developer with a focus on building intelligent, data-driven healthcare systems. My work combines health informatics, software engineering, and AI to create interoperable EHR platforms such as ChronoViva for diabetes management. Leveraging technologies like FHIR, PostgreSQL, React, and Flask, I develop scalable, secure, and research-ready health data solutions that drive better clinical outcomes and global digital health innovation.
            </p>
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
