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
    const[showConfirmPassword, setShowConfirmPassword]= useState(false);
    const [accountType, setAccountType] = useState("student");
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
        // console.log(account);
        navigate("/dashboard")

    }

    

    return ( 
        <div >

            <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max mt-[10px]">

            <button onClick={() => setAccountType("student")}
             className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200 "} 
             py-2 px-5 rounded-full transition-all`} >
              Student
           </button>

           <button onClick={() => setAccountType("instructor")}
            className={`${ accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200 "}
             py-2 px-5 rounded-full transition-all`} >
              Instructor
          </button>
     </div>

            <form onSubmit={submitHandler}  >

                <div className="flex gap-x-4 mt-[10px]">
                  <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]" >
                        First Name <sup className="text-pink-200">*</sup></p>

                    <input type="text" required name="firstname" placeholder="First Name"
                     value={formData.firstname} onChange={changeHandler} 
                     className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                  </label>

                  <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Last Name <sup className="text-pink-200">*</sup></p>

                    <input type="text" required name="lastname" placeholder="Last Name"
                     value={formData.lastname} onChange={changeHandler} 
                     className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                 </label>
                </div>
                
                <div className="mt-[10px]">
                <label className="w-full" >
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address <sup className="text-pink-200">*</sup></p>

                    <input type="email" required name="email" placeholder="Enter email Address"
                     value={formData.email} onChange={changeHandler} 
                     className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                </label>
                </div>

                <div className="flex gap-x-4 mt-[10px]">
                 <label className="w-full relative" >
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Create Password <sup className="text-pink-200">*</sup></p>

                    <input type={showPassword?"text":"password"} required name="createPassword"
                     placeholder="Enter Password"
                     value={formData.createPassword} 
                     onChange={changeHandler} 
                     className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                     />

                   <span onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer z-10">
                    { showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>): (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                    </span>

                 </label>

                 <label className="w-full relative" >
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Confirm Password <sup className="text-pink-200">*</sup></p>

                    <input type={showConfirmPassword?"text":"password"} required name="confirmPassword"
                     placeholder="Confirm Password"
                     value={formData.confirmPassword} 
                     onChange={changeHandler} 
                     className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                     />

                   <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-[38px] cursor-pointer z-10">
                    { showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />): (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) }
                    </span>

                 </label>

                </div>

                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-5 font-medium text-richblack-900 w-full">
                    Create Account</button>

            </form>
            
        </div>       
        
     );
}

export default SignUpForm;