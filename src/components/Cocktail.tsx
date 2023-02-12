import React from 'react';
import {ICocktail} from "../models";

interface CocktailProps {
  cocktail: ICocktail,
  index: number
}

const Cocktail = ({cocktail, index}: CocktailProps) => {
  return (
    <div className={index %2 === 0 ? 'flex items-center' : 'flex flex-row-reverse items-center'}>
      <img src={cocktail.drinks[0].strDrinkThumb ? cocktail.drinks[0].strDrinkThumb : ''} className='w-1/6'/>
      <div className='flex flex-col mx-10'>
        <p className='text-2xl font-bold'>{cocktail?.drinks[0].strDrink}</p>
        <p>{cocktail?.drinks[0].strAlcoholic}</p>
        <p>{cocktail?.drinks[0].strCategory}</p>
      </div>
      <button className='bg-orange-200 text-slate-800 block text-[10px] w-10 h-10 rounded-full' type='button'>show more</button>
    </div>
  );
};

export default Cocktail;