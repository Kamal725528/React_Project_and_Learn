import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  
  // //variation 1 -> always render
  // useEffect(()=>{
  //    console.log(`UI rendering`);
  // });

  // //variation 2-> first render(one time)  []=> dependency list
  // useEffect(()=>{
  //   console.log(`UI rendenring`)
  // },[]);

  // // variation 3-> first render+ render when dependency change
  // useEffect(()=>{
  //   console.log(`change observed`)
  // },[text])

  //variation 4-> first render + to  handle unmounting
  useEffect(()=>{
    console.log(`listener added`);  // run 2nd

    return ()=> console.log('listener removed');  // run 1st
  },[text]);

  
  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <>
      <input type="text" onChange={changeHandler} className='input'/>
    </>
  )
}

export default App
