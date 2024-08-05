import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}) {

    const[formData, setFormData]=useState({
        email:"", password:""
    })

    const[showPassword, setShowPassword]= useState(false);
    const navigate= useNavigate();

    function changeHandler(e){
        setFormData(prev=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }

    return ( 

        <form onSubmit={submitHandler} >

            <label >
             <p>Email Address <sup>*</sup></p>

             <input type="email" required name="email" value={formData.email}
              onChange={changeHandler} placeholder="Enter email address"       
             />
            </label>

            <label >
                <p>Password <sup>*</sup></p>

                <input type={showPassword?"text" :"password"} name="password" required
                value={formData.value} placeholder="password"  />

                <span onClick={()=>setShowPassword(!showPassword)}>{ showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }</span>

                <Link to="#">
                   <p>forget password</p>
               </Link>

            </label>

            <button>Sign In</button>

        </form>

     );
}

export default LoginForm;