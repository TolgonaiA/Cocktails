import React, {useEffect} from 'react';
import MenuCover from "./containers/MenuCover";
import MenuBar from "./containers/MenuBar";

const App = () => {
  return (
    <div className='bg-slate-800 px-5 font-mono text-orange-200 h-screen'>
      <div className='container mx-auto grid grid-cols-2 gap-2 h-screen'>
        <MenuCover/>
        <MenuBar/>
      </div>
    </div>
  );
}

export default App;
