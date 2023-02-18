import React from 'react';
import {ICocktail} from "../models";
import Cocktail from "../components/Cocktail";

interface CocktailsProps {
  cocktails: ICocktail[]
  fetchCocktail: (id: string) => void
}

const MenuBar = ({cocktails, fetchCocktail}: CocktailsProps) => {
  return (
    <div className='container bg-slate-900 px-4 py-4 flex flex-col'>
      {cocktails && cocktails.map((cocktail:ICocktail) => <Cocktail cocktail={cocktail} key={cocktail.idDrink} fetchCocktail={fetchCocktail}/>)}
    </div>
  );
};

export default MenuBar;