import { useState } from 'react'
import './Form.css'

function Form(){
   
    const[formData, setFormData]=useState({firstName:"", lastName:"", email:"",
                                           course:false, Gender:"", teacher:"" });
    

    function changeHandler(e){
        const{type, name, value, checked }= e.target;

        setFormData((prevData)=>{
            return{ ...prevData,
            [name]: type ==='checkbox'?checked:value
            }
        });
    }

   function submitHandler(e){
        e.preventDefault();
        console.log(formData);
   }

//    console.log(formData);

    return(
        <div>
              <fieldset>
                <legend>Fill This form !</legend>
                <form onSubmit={submitHandler}>

                    <label htmlFor="First-Name">First Name: </label>
                    <input type="text" 
                     name='firstName' 
                     placeholder='kamal'
                     id='First-Name'
                     value={formData.firstName}
                     onChange={changeHandler}/>
                    <br/><br/>

                    <label htmlFor="Last-Name">Last Name: </label>
                    <input type="text"
                      name='lastName'
                      placeholder='singh'
                      id='Last-Name'
                      value={formData.lastName}
                      onChange={changeHandler}/>
                    <br/><br/>

                    <label htmlFor="email">Email: </label>
                    <input type="email"
                      name='email'
                      placeholder='abc@example.com'
                      id='email'
                      value={formData.email}
                      onChange={changeHandler}/>
                    <br/><br/>

                    <label >choose your Course</label> <br/>
                    <label htmlFor='course'>C++ </label>
                    <input type="checkbox"
                      name='course'
                      id='course'
                      checked={formData.course}
                      onChange={changeHandler}/>
                    <br/><br/>

                    <label >choose your Gender</label> <br/>
                    <input type="radio"
                      name='Gender'
                      id='male'
                      value="Male"
                      checked={formData.Gender==="Male"}
                      onChange={changeHandler} />
                    <label htmlFor="male">Male</label>

                    <input type="radio"
                      name='Gender'
                      id='female'
                      value="Female"
                      checked={formData.Gender==="Female"}
                      onChange={changeHandler} />
                    <label htmlFor="female">Female</label>
                    <br/><br/>

                    <label htmlFor="teacher">Select your Educator : </label>
                    <select name='teacher' placeholder="samia begum"  onChange={changeHandler}>
                        <option value='samia'>Samia Begum</option>
                        <option value='kamal'>Kamal Nayan</option>
                        <option value='adarsh'>Adarsh Aniket</option>
                        <option value='shilwant'>Shilwant</option>
                        <option value='mohan'>Krishan Mohan</option>
                    </select>
                    <br/><br/>

                    <textarea name='textArea'
                     value={formData.textArea}
                     placeholder='Enter your Query'
                     onChange={changeHandler} />
                    
                    <br/><br/>

                    <button>Submit</button>

                </form>
              </fieldset>
        </div>
    )
}

export default Form


// output  

/*
Gender: "Male"
course: true
email: "kamal@gmail.com"
firstName: "kamal"
lastName: "Nayan"
teacher: "Shilwant"
textArea: "Hello ji, In checkbox value returned is either true or false..\nif
 you getting on off then it is wrong and if you want c++ value then
  you should handle it like radio button"

[[Prototype]]: Object 
*/