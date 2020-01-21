import React, { Fragment } from "react";
import CocktilesTile from "../CocktileTilesComponent/CocktileTiles";
import classes from "../CocktileApiComponent/CocktileApiSearcher.module.css";

interface Props {}


const CocktileApiSearcher: React.FC<Props> = () => {
  
  const [cocktileFound, setCocktileFound] = React.useState<any[]>([]);
  const [query, setQuery] = React.useState<string>("");

  React.useEffect(() => {
    if (query) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data.drinks)) { setCocktileFound( data.drinks.map( (item: any) => item) ); } // Pushing cocktiles items to array (cocktileFound)          
            else { setCocktileFound([]) };
          });
    } 
    else {
      return setCocktileFound([]);
    }
  }, [query]);

  return (
    <Fragment>
      <div className={classes.div_search}>
        <h2 className={classes.div_title}>Search Cocktails</h2>
        <input
          className={classes.div_title_input}
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter something..."
        />
        <hr className={classes.hr}/>
      </div>      
      <main className={classes.main}>
        <ul className={classes.ul}>
          <CocktilesTile cocktileArrayFound={cocktileFound} />
        </ul>
      </main>
    </Fragment>
  );
};

export default CocktileApiSearcher;
