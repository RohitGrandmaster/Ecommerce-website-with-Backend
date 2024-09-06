import React from "react";

const Backgroundimage = ({ imageUrl, title }) => {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  const titleStyle = {
    position: "absolute",
    top: "80%",
    left: "47%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  return (
    <div style={divStyle}>
      <div style={titleStyle}>{title}</div>
    </div>
  );
};

export default Backgroundimage;
