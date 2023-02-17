import React from 'react';
import {ICocktail} from "../models";
import Cocktail from "../components/Cocktail";

interface CocktailsProps {
  cocktails: ICocktail[]
}

const MenuBar = ({cocktails}: CocktailsProps) => {
  return (
    <div className='container bg-slate-900 px-4 py-4 flex flex-col justify-between'>
      {cocktails && cocktails.map((cocktail:ICocktail) => <Cocktail cocktail={cocktail} key={cocktail.idDrink}/>)}
    </div>
  );
};

export default MenuBar;