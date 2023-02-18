import React from 'react';
import {ICocktail} from "../models";

interface FullCocktailProps {
  cocktail: ICocktail
}

const FullCocktailInfo = ({cocktail}: FullCocktailProps) => {
  return (
    <div className='flex'>
      <img src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : ''}/>

    </div>
  );
};

export default FullCocktailInfo;