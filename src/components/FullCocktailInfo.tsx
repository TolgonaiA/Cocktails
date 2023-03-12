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
      <img src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : ''} alt={cocktail.strDrink ? cocktail.strDrink : ''}/>
      <div>
        <h3>{cocktail.strDrink}</h3>
        <p>Type: {cocktail.strAlcoholic}</p>
        <p>Category: {cocktail.strCategory}</p>
        {Object.keys(cocktail).filter(isIng).map((el, index) => {
          let key = 'strIngredient'+index
          return <p>{cocktail[key]}</p>})}
      </div>
    </div>
  );
};

export default FullCocktailInfo;