import React, { useRef, useEffect } from "react";
import Social from "./Social";
import backgroundVideo from "./background.webm";
import profileImage from "./image.jpeg";  // Update the file name accordingly
import styles from "./Home.module.css";  // Import CSS module

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set playback rate when the component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust playback speed (e.g., 0.5 for half speed)
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
            <h3 className={styles.name}>Johnson Clever</h3>
            <p className={styles.job}>
              Empowering healthcare through insightful data analysis,
              cutting-edge software development, and engaging web design as an
              experienced Health Informatician.
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
