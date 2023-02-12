import {useState} from "react";
import {ICocktail} from "../models";
import axiosApi from "../axiosApi";
import {AxiosError} from "axios";

export const useCocktails = () => {
  const [cocktails, setCocktails] = useState<ICocktail[]>([])
  const [error, setError] = useState('');

  const fetchRandomCocktails = async () => {
    let cocktailArr = [];
    while (cocktailArr.length !== 6) {
      try {
        const response = await axiosApi.get<ICocktail>('/random.php');
        cocktailArr.push(response.data);
        console.log(response.data)
      } catch (e: unknown) {
        const error = e as AxiosError;
        setError(error.message);

      }
    }
    setCocktails(cocktailArr);
  }

  return {cocktails, fetchRandomCocktails}
}