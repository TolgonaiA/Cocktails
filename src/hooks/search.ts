import React, {ChangeEvent, useEffect, useState} from "react";
import {AxiosError} from "axios";
import {searchByIngredientURL, searchByNameURL} from "../config";
import axiosApi from "../axiosApi";
import {ICheckbox, ICocktail} from "../models";

export const useSearchCocktail = () => {
  const [value, setValue] = useState('');
  const [checkbox, setCheckbox] = useState<ICheckbox>({
    ingredient: false,
    cocktail: true
  });
  const [error, setError] = useState('');


  const [cocktails, setCocktails] = useState<ICocktail[]>([])

  const fetchRandomCocktails = async () => {
    let cocktailArr = <ICocktail[]>[];
    while (cocktailArr.length !== 6) {
      try {
        const response = await axiosApi.get('/random.php');
        cocktailArr.push(response.data.drinks[0]);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setError(error.message);
      }
    }
    setCocktails(cocktailArr);
  }

  useEffect(() => {
    fetchRandomCocktails();
  }, []);

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
      const response = await axiosApi.get(urlParam + value);
      setCocktails(response.data.drinks);
      setValue('');
    } catch (e: unknown){
      const error = e as AxiosError;
      setError(error.message);
    }
  }


  return {submitHandler, changeHandler, checkboxHandler, checkbox, cocktails, value}
}