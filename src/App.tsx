import React from 'react';
import MenuCover from "./containers/MenuCover";
import MenuBar from "./containers/MenuBar";

const App = () => {
  return (
    <div className='bg-slate-800 grid grid-cols-2 gap-2 px-5 font-mono text-orange-200 h-screen'>
      <MenuCover/>
      <MenuBar/>
    </div>
  );
}

export default App;
