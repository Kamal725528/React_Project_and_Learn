import { useState } from 'react'
import './App.css'
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
 
  return(
    <div className="w-full h-screen flex flex-col items-center dotted-background overflow-x-hidden">
    <h1 className="bg-white rounded-lg uppercase w-11/12 text-center mt-10 py-4 px-6 text-5xl font-extrabold shadow-lg">
      Random Gifs
    </h1>
    <div className="flex  w-full items-center gap-y-12 mt-12">
      <Random />
      <Tag />
    </div>
  </div>
  
  );
}

export default App
