import { useNavigate } from "react-router-dom"


function Support(){

    const navigate= useNavigate();

    function clickhandler(){
        
        navigate("/");
    }

    return(
        <div>
            <h1>Hello I am Support Page</h1>

            <button onClick={clickhandler}>Home</button>
        </div>
    )
}

export default Support