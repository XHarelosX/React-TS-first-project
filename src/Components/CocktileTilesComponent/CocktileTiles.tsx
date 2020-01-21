import React, { Fragment } from "react";
import CocktileTile from "../CocktileTilesComponent/CocktileTile/CocktileTile";
// import classes from "../CocktileTilesComponent/Cocktile.module.css";
// import Popup from "reactjs-popup";

interface Props {
  cocktileArrayFound: any[];
}

const CocktilesTile: React.FC<Props> = ({ cocktileArrayFound }) => {
  return (
    <Fragment>
      <CocktileTile cocktileArrayFound={cocktileArrayFound}/>
    </Fragment>
  );
};

export default CocktilesTile;
