import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} All rights reserved. <br /> Johnson Clever Ggalabuzi
        <a
          href="https://github.com/cleverjohnson"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default CopyRight;