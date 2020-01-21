import React from "react";
import classes from "./Backdrop.module.css";

interface Props {
  burgerToggleClickHandler: any;
}

const Backdrop: React.FC<Props> = ({ burgerToggleClickHandler }) => {
  return (
    <div className={classes.Backdrop} onClick={burgerToggleClickHandler}></div>
  );
};

export default Backdrop;
