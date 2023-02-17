import React from 'react';
import {useSearchCocktail} from "../hooks/search";
import MenuBar from "./MenuBar";


const Menu = () => {
  const {submitHandler, changeHandler, checkbox, checkboxHandler, cocktails} = useSearchCocktail();


  return (
    <div className='container mx-auto grid grid-cols-2 gap-2 h-screen'>
      <div className='container bg-slate-900 px-4 py-4 flex-col'>
        <h1 className='text-center text-6xl'>Cocktails</h1>
        <p>Select a cocktail search criterion: by cocktail name or by ingredient and enter a keyword</p>
        <div>
          <form onSubmit={submitHandler}>
            <input onChange={changeHandler} type='text' required placeholder='Enter cocktail name or ingredient'/>
            <div>
              <input onChange={checkboxHandler} checked={checkbox.cocktail} type='checkbox' name='cocktail' id='cocktail'/>
              <label htmlFor='cocktail'>search by cocktail name</label>
            </div>
            <div>
              <input onChange={checkboxHandler} checked={checkbox.ingredient} type='checkbox' name='ingredient' id='ingredient'/>
              <label htmlFor='ingredient'>search by ingredient</label>
            </div>
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>
      <MenuBar cocktails={cocktails}/>
    </div>
  );
};

export default Menu;