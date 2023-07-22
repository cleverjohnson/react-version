import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/",
  },
  { iconName: "twitter", link: "https://twitter.com/gcjohns/" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/g_c_johnson1/",
  },
  { iconName: "dribbble", link: "https://www.linkedin.com/in/johnson-ggalabuzi-164aa6222/" },
  {
    iconName: "tik-tok",
    link: "https://www.tiktok.com/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
