import './App.css'
import Basic from './components/Basic';
import Card from './components/Card'
function App() {
  let data=[
    {name:"kamal", age:22, sex:"male"},
    {name:"samia", age:19, sex:"female"},
    {name:"mohan", age:25, sex:"female"},
    {name:"Adarsh", age:36, sex:"female"} 

  ]
  let p=5
  return (
    <>
     <Basic data={data}><p style={{color:'red', background:'yellow'}}>Hello i am children through props- i am content between component(all html)</p> </Basic>
    
    <div className="parent">

      {data.map((d)=>(
        <Card heading={d.name} summary={d.age}/>  // here array has 4 object so 4 card.
      ))}
      
      {/* or */}

    {/* <Card heading="Learn CSS using Card" summary="follow me on insta"/>
    <Card heading={data[1].name} summary="follow me on insta"/> */}

    </div>
     
    
     <div className='Heading'>Hello react - I am kamal</div> 
    
     <h1>{p}</h1>  
    
    </>
  )
}

export default App
