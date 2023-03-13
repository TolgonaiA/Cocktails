import React from 'react';
import {ICocktail} from "../models";

interface FullCocktailProps {
  cocktail: ICocktail
}

const FullCocktailInfo = ({cocktail}: FullCocktailProps) => {

  const isIng = (str: string) => {
    for (let i = 1; i <= 15; i++) {
      if(str === 'strIngredient'+i) {
        return `${str}`
      }
    }
  }

  return (
    <div className='flex'>
      <div className='w-1/2 mr-5'>
        <img src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : ''} alt={cocktail.strDrink ? cocktail.strDrink : ''}/>
      </div>
      <div className='text-slate-900 w-1/2'>
        <h3 className='text-lg font-bold'>{cocktail.strDrink}</h3>
        <p>Type: {cocktail.strAlcoholic}</p>
        <p>Category: {cocktail.strCategory}</p>
        <p>Ingredients:</p>
        {Object.keys(cocktail).filter(isIng).map((el, index) => {
          let count = index +1
          let key = 'strIngredient'+count
          let measure = 'strMeasure'+count
          if (cocktail[key] !== null) {
            return <p>{cocktail[key]} - {cocktail[measure]}</p>
          }
          })}
          <p>Instructions:</p>
          <p>{cocktail.strInstructions}</p>
      </div>
    </div>
  );
};

export default FullCocktailInfo;