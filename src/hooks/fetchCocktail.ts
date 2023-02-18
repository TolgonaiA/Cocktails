import {MouseEventHandler, useEffect, useState} from "react";
import {ICocktail} from "../models";
import {fullCocktail, searchByIngredientURL, searchByNameURL} from "../config";
import axiosApi from "../axiosApi";
import {AxiosError} from "axios/index";

export const useFetchCocktail = () => {
  const [cocktail, setCocktail] = useState<ICocktail>({
    "idDrink":null,
    "strDrink":null,
    "strDrinkAlternate":null,
    "strTags":null,
    "strVideo":null,
    "strCategory": null,
    "strIBA": '',
    "strAlcoholic": '',
    "strGlass": '',
    "strInstructions": '',
    "strInstructionsES": '',
    "strInstructionsDE": '',
    "strInstructionsFR": '',
    "strInstructionsIT": '',
    "strInstructionsZH-HANS": '',
    "strInstructionsZH-HANT": '',
    "strDrinkThumb": '',
    "strIngredient1": '',
    "strIngredient2": '',
    "strIngredient3": '',
    "strIngredient4": '',
    "strIngredient5": '',
    "strIngredient6": '',
    "strIngredient7": '',
    "strIngredient8": '',
    "strIngredient9": '',
    "strIngredient10": '',
    "strIngredient11": '',
    "strIngredient12": '',
    "strIngredient13": '',
    "strIngredient14": '',
    "strIngredient15": '',
    "strMeasure1": '',
    "strMeasure2": '',
    "strMeasure3": '',
    "strMeasure4": '',
    "strMeasure5": '',
    "strMeasure6": '',
    "strMeasure7": '',
    "strMeasure8": '',
    "strMeasure9": '',
    "strMeasure10": '',
    "strMeasure11": '',
    "strMeasure12": '',
    "strMeasure13": '',
    "strMeasure14": '',
    "strMeasure15": '',
    "strImageSource": '',
    "strImageAttribution": '',
    "strCreativeCommonsConfirmed": '',
    "dateModified": '',

  });
  const [modal, setModal] = useState(false);

  const fetchCocktail = async(id:string) => {
    try {

      const response = await axiosApi.get(fullCocktail + id);
      console.log(response.data)
      setCocktail(response.data.drinks[0]);

    } catch (e: unknown){
      const error = e as AxiosError;
      // setError(error.message);
    }
    setModal(true)
  }


  return {cocktail, fetchCocktail, modal, setModal}
}