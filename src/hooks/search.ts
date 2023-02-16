import React, {ChangeEvent, useState} from "react";
import {AxiosError} from "axios";
import {searchByIngredientURL, searchByNameURL} from "../config";
import axiosApi from "../axiosApi";
import {ICocktail} from "../models";
import {useCocktails} from "./cocktails";

export const useSearchCocktail = () => {
  const [value, setValue] = useState('');
  const [checkbox, setCheckbox] = useState({
    ingredient: false,
    cocktail: true
  });
  const [error, setError] = useState('');

  const [updateCocktails, setUpdateCocktails] = useState<ICocktail[]>([])

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'cocktail') {
      setCheckbox({
        ingredient: false,
        cocktail: true
      })
    } else {
      setCheckbox({
        ingredient: true,
        cocktail: false
      })
    }
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError('');
      if(value.trim().length === 0) {
        setError('Please enter something');
        return;
      }
      let urlParam: string = '';
      checkbox.cocktail ? urlParam = searchByNameURL : urlParam = searchByIngredientURL;
      const response = await axiosApi.get<ICocktail[]>(urlParam + value);
      setUpdateCocktails(response.data);
      setValue('');
    } catch (e: unknown){
      const error = e as AxiosError;
      setError(error.message);
    }
  }


  return {submitHandler, changeHandler, checkboxHandler, checkbox, updateCocktails}
}