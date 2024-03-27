import React, { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress((prevProgress) =>
      prevProgress < 100 ? prevProgress + 10 : 100
    );
  };

  return (
    <div>
      <div
        style={{
          height: "20px",
          width: "100%",
          backgroundColor: "#004264",
          borderRadius: "50px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#e6a500",
            borderRadius: "inherit",
            transition: "width .2s ease-in",
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
