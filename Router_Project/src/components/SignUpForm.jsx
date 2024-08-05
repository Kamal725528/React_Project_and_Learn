import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function SignUpForm({setIsLoggedIn}) {

    const[formData, setFormData] =useState({
        firstname:"",
        lastname:"",
        email:"",
        createPassword:"",
        confirmPassword:""
    })

    const[showPassword, setShowPassword]= useState(false);
    const navigate=useNavigate();

    function changeHandler(e){
        setFormData(prev=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }

    function submitHandler(e){
        e.preventDefault();
        if(formData.createPassword!==formData.confirmPassword){
            toast.error("Password didn't match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created")
        const account={...formData}
        console.log(account);
        navigate("/dashboard")

    }

    

    return ( 
        <div>

            <div>
                <button>
                    Student
                </button>

                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} >

                <div>
                  <label >
                    <p>First Name <sup>*</sup></p>

                    <input type="text" required name="firstname" placeholder="First Name"
                     value={formData.firstname} onChange={changeHandler} />
                  </label>

                  <label >
                    <p>Last Name <sup>*</sup></p>

                    <input type="text" required name="lastname" placeholder="Last Name"
                     value={formData.lastname} onChange={changeHandler} />
                 </label>
                </div>
                
                <label >
                    <p>Email Address <sup>*</sup></p>

                    <input type="email" required name="email" placeholder="Enter email Address"
                     value={formData.email} onChange={changeHandler} />
                </label>

                <div>
                 <label >
                    <p>Create Password <sup>*</sup></p>

                    <input type={showPassword?"text":"password"} required name="createPassword"
                     placeholder="Enter Password"
                     value={formData.createPassword} 
                     onChange={changeHandler} />

                   <span onClick={()=>setShowPassword(!showPassword)}>
                    { showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }
                    </span>

                 </label>

                 <label >
                    <p>Confirm Password <sup>*</sup></p>

                    <input type={showPassword?"text":"password"} required name="confirmPassword"
                     placeholder="Confirm Password"
                     value={formData.confirmPassword} 
                     onChange={changeHandler} />

                   <span onClick={()=>setShowPassword(!showPassword)}>
                    { showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }
                    </span>

                 </label>

                </div>

                <button>Create Account</button>

            </form>
            
        </div>       
        
     );
}

export default SignUpForm;