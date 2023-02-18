import React from 'react';
import Menu from "./containers/Menu";
import Modal from "./components/Modal";
import MenuBar from "./containers/MenuBar";
import {useSearchCocktail} from "./hooks/search";
import FullCocktailInfo from "./components/FullCocktailInfo";
import {useFetchCocktail} from "./hooks/fetchCocktail";


const App = () => {
  const {submitHandler, changeHandler, checkbox, checkboxHandler, cocktails, value} = useSearchCocktail();
  const {cocktail, modal, setModal, fetchCocktail} = useFetchCocktail();

  return (
    <div className='bg-slate-800 px-5 font-mono text-orange-200 h-screen'>
      <div className='container mx-auto grid grid-cols-2 gap-2 h-screen'>
        <Menu
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          checkbox={checkbox}
          checkboxHandler={checkboxHandler}
          value={value}
        />
        <MenuBar cocktails={cocktails} fetchCocktail={fetchCocktail}/>
      </div>
      {modal && <Modal onClose={() => setModal(false)}>
        <FullCocktailInfo cocktail={cocktail}/>
      </Modal>}
    </div>
  );
}

export default App;
