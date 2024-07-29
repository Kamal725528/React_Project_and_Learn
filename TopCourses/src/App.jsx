import { useEffect, useState } from 'react'
import { apiUrl, filterData } from './data/data'
import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import {toast} from 'react-toastify'

function App() {

  const[courses, setCourses]=useState(null);  // null ko [] ye v initialize kar sakte hain if spinner nai detehain ..
  const[loading, setLoading]=useState(true);
  const[category, setCategory]=useState(filterData[0].title);

  useEffect(()=>{
    const fetchData= async ()=>{
      setLoading(true);
      try{
        let res=await fetch(apiUrl);
        let output=await res.json();
        setCourses(output.data);
      }
      catch(error)
      {
         toast.error("API call se data ni aa raha hai");
      }

      setLoading(false);
    }
    fetchData();
  },[]);
  
   return (
     <div className="min-h-screen flex-col flex bg-bgDark2">

      <div>
        <Navbar/>
      </div>

      <div className="bg-bgDark2">
         <div>
           <Filter filterData={filterData} category={category} setCategory={setCategory}/>
         </div>

         <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
           {
             loading?(<Spinner/>) :(<Cards category={category} courses={courses}/>)
           }
         </div>
      </div>

     </div>
   )
 
}

export default App


