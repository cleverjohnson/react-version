import React, { useRef, useEffect } from "react";
import Social from "./Social";
import backgroundVideo from "./background.mp4";
import profileImage from "./image.jpeg";  // Update the file name accordingly
import styles from "./Home.module.css";  // Import CSS module
import Typical from 'react-typical';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set playback rate when the component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2; // Adjust playback speed (e.g., 0.5 for half speed)
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
            <Typical
              steps={['J', 800, 'Jo', 800, 'Joh', 800, 'John', 800, 'Johns', 800, 'Johnso', 800, 'Johnson', 800, 'Johnson ', 800, 'Johnson C', 800, 'Johnson Cl', 800, 'Johnson Cle', 800, 'Johnson Clev', 800, 'Johnson Cleve', 800, 'Johnson Clever', 1000]}
              loop={1}
              wrapper="span"
            />
            </h3>
            <p 
              className={styles.job} 
              style={{ 
                fontFamily: "'Roboto', 'Lato', 'Source Sans Pro', 'Open Sans', 'IBM Plex Sans', sans-serif", 
                fontSize: "14px", 
                lineHeight: "1.6", 
                color: "#fff" 
              }}>
              A dedicated full-stack web developer with a keen interest in healthcare technology. By day, I enhance digital experiences at an advertising agency, where I specialize in adding custom PHP code to WordPress sites through FTP. In my personal projects, I leverage my background in medical informatics to develop innovative solutions, such as a comprehensive diabetes management system. My work integrates cutting-edge technologies like FHIR, PostgreSQL, React, and Flask, aiming to transform healthcare through the power of data and modern web development.
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
