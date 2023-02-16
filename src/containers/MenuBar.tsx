import React, {useEffect} from 'react';
import {useCocktails} from "../hooks/cocktails";
import {ICocktail} from "../models";
import Cocktail from "../components/Cocktail";

const MenuBar = () => {
  const {cocktails, fetchRandomCocktails} = useCocktails();

  useEffect(() => {
    fetchRandomCocktails();
  }, []);

  return (
    <div className='container bg-slate-900 px-4 py-4 flex flex-col justify-between'>
      {cocktails && cocktails.map((cocktail:ICocktail) => <Cocktail cocktail={cocktail} key={cocktail.drinks[0].idDrink}/>)}
    </div>
  );
};

export default MenuBar;