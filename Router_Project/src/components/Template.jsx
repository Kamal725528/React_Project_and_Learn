import {FcGoogle} from "react-icons/fc"
import frame from "../assets/frame.png"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Template({title, desc1, desc2, image, formType, setIsLoggedIn }) {

    return ( 
       
        <div>
            <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formType === "signup" ?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) :(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            
            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <FcGoogle/>
                <p>Sign Up With Google</p>
            </button>
        
          </div>

          <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"

        />
        <img
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>

        </div>
    
    )
}

export default Template;