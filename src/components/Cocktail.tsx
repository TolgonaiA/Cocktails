import React from 'react';
import {ICocktail} from "../models";

interface CocktailProps {
  cocktail: ICocktail,
}

const Cocktail = ({cocktail}: CocktailProps) => {
  return (
    <div className='flex items-center'>
      <img src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : ''} className='w-1/6'/>
      <div className='flex flex-col mx-10 flex-grow'>
        <p className='text-2xl font-bold'>{cocktail.strDrink}</p>
        <p>{cocktail.strAlcoholic}</p>
        <p>{cocktail.strCategory}</p>
      </div>
      <button className='bg-orange-200 text-slate-800 block text-[10px] w-10 h-10 rounded-xl' type='button'>show more</button>
    </div>
  );
};

export default Cocktail;