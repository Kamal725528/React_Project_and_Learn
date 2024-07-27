import './App.css'
import data from './data/data'
import Tour from './components/Tour'
import { useState } from 'react'

function App() {
   const[tours, setTours]= useState(data);

   function removeTour(id){
    const newTour= tours.filter(tour=> tour.id !== id);
    setTours(newTour);
   }

   if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No Tours left</h2>
        <button  className="btn-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
   }

  return (
    <div className='App'>
      <Tour tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default App
