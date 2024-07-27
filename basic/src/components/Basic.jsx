import "./Basic.css"
export default function Basic(props){
    // let name=props.data[0].name
    return(
        <>
          <div className="box">{props.data[0].name}</div>
          {props.children}
        </>
        
    )
}