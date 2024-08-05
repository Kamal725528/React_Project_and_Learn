import { Link } from "react-router-dom"

function About(){
    return(
        <div>
            <h1>Hello I am About Page</h1>
            <Link to="/">
              <button>Home</button>
            </Link>

        </div>
    )
}

export default About