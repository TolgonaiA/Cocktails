import React, {ChangeEvent} from 'react';
import {useSearchCocktail} from "../hooks/search";
import MenuBar from "./MenuBar";
import {ICheckbox, ICocktail} from "../models";

interface MenuProps {
  submitHandler: (event: React.FormEvent) => void,
  checkboxHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  value: string,
  checkbox: ICheckbox

}

const Menu = ({submitHandler, checkboxHandler, changeHandler, value, checkbox}: MenuProps) => {
  return (
    <div className='container bg-slate-900 px-4 py-4 flex-col'>
      <div className='text-center text-6xl mt-40 mb-[25px]'>Cocktails</div>
      <p className='mb-[25px] text-center'>Select a cocktail search criterion: by cocktail name or by ingredient and enter a keyword</p>
        <form onSubmit={submitHandler}>
          <div className='w-[80%] mx-auto'>
            <input className='w-[100%] px-4 py-2 rounded text-slate-900 mb-[15px]' onChange={changeHandler} type='text' value={value} required placeholder='Enter cocktail name or ingredient'/>
            <div className='mb-[10px]'>
              <input onChange={checkboxHandler} checked={checkbox.cocktail} type='checkbox' name='cocktail' id='cocktail'/>
              <label className='mx-5' htmlFor='cocktail'>search by cocktail name</label>
            </div>
            <div className='mb-[10px]'>
              <input onChange={checkboxHandler} checked={checkbox.ingredient} type='checkbox' name='ingredient' id='ingredient'/>
              <label className='mx-5' htmlFor='ingredient'>search by ingredient</label>
            </div>
            <button className='bg-orange-200 hover:bg-orange-300 text-slate-900 py-2 px-3 font-bold rounded-lg block w-[100px] mx-auto' type='submit'>Search</button>
          </div>
        </form>
      </div>
  );
};

export default Menu;