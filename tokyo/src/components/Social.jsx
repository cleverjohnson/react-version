import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const SocialShare = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/gcjohns/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/g_c_johnson1/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/johnson-ggalabuzi-164aa6222/",
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/",
  },
];

const Social = () => {
  const iconStyle = {
    color: "white",       // Set icon color to white
    fontSize: "24px",     // Adjust size of the icons
    margin: "0 10px",     // Add spacing between icons
    transition: "transform 0.3s ease, color 0.3s ease",  // Add smooth transitions
  };

  const hoverStyle = {
    transform: "scale(1.1)",  // Enlarge icon on hover
    color: "#ccc",            // Change color on hover
  };

  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: 0,
          listStyle: "none",
          position: "absolute",
          bottom: "20px",  // Position 20px above the bottom of the viewport
          width: "100%",   // Ensure the icons are centered horizontally
        }}
      >
        {SocialShare.map((val, i) => (
          <li key={i} style={{ display: "inline-block" }}>
            <a 
              href={val.link} 
              target="_blank" 
              rel="noreferrer" 
              style={iconStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = hoverStyle.transform;
                e.currentTarget.style.color = hoverStyle.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = iconStyle.color;
              }}
            >
              {val.icon}
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
