import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  rotatingSquare: {
    width: 100,
    height: 100,
    backgroundColor: "#3498db",
    animation: "$rotate 2s linear infinite",
  },
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

const RotatingSquare = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.rotatingSquare}></div>
    </div>
  );
};

export default RotatingSquare;
