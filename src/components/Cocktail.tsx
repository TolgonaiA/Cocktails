import React, {MouseEventHandler} from 'react';
import {ICocktail} from "../models";
import {useFetchCocktail} from "../hooks/fetchCocktail";

interface CocktailProps {
  cocktail: ICocktail,
  fetchCocktail: (id: string) => void
}

const Cocktail = ({cocktail, fetchCocktail}: CocktailProps) => {
  // const {fetchCocktail} = useFetchCocktail();
  return (
    <div className='flex items-center mb-10'>
      <img src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : ''} className='w-1/6'/>
      <div className='flex flex-col mx-10 flex-grow'>
        <p className='text-2xl font-bold'>{cocktail.strDrink}</p>
        <p>{cocktail.strAlcoholic}</p>
        <p>{cocktail.strCategory}</p>
      </div>
      <button
        className='bg-orange-200 hover:bg-orange-300 text-slate-800 block text-[13px] font-bold px-4 py-2 rounded-xl'
        type='button'
        onClick={() => fetchCocktail(cocktail.idDrink ? cocktail.idDrink : '')}
      >
        full info
      </button>
    </div>
  );
};

export default Cocktail;