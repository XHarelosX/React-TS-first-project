import React, { Fragment } from "react";
import classes from "../CocktileTile/CocktileTile.module.css";
// import Popup from "reactjs-popup";

interface Props {
  cocktileArrayFound: any[];
}

const CocktileTile: React.FC<Props> = ({ cocktileArrayFound }) => {
  
    const [arrayOfCocktileToRender, setArrayOfCocktileToRender] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (cocktileArrayFound) {
      setArrayOfCocktileToRender(cocktileArrayFound.map((item: any) => {
          return (
          <li className={classes.li} key={item.idDrink}>
            <img src={item.strDrinkThumb} className={classes.img} alt={item.strDrink}/>
                <section>
                    <div>{item.strDrink}</div>
                    <div>{item.strGlass}</div>
                </section>
          </li>
          )
      }));
    } else {
      setArrayOfCocktileToRender([]);
    }
  }, [cocktileArrayFound]);

  return <Fragment>{arrayOfCocktileToRender}</Fragment>;
};

export default CocktileTile;
