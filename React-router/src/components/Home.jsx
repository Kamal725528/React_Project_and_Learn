import { Link, NavLink, useNavigate } from "react-router-dom"
import './Home.css'

function Home(){

    const navigate= useNavigate();

    function clickHandler(){
        navigate("/support");
    }

    return(
        <div>
            <h1>Hello I am Home Page</h1>

            <NavLink to="/">    
              Home
            </NavLink>


            <Link to="/about">
              <button>About</button>
            </Link>

            {/* <Link to="/support">
              <button>Support</button>
            </Link> */}

         <button onClick={clickHandler}>Support</button>

           


        </div>
    )
}

export default Home