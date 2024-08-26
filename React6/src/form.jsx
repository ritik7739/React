import { useState } from "react";

export default function Form(){
   let[FormData,setFormData]=useState({
       fullName:"",
       userName:"",
       password:"",
   });

    let handleInputChange=(event)=>{
       setFormData((currData)=>{
        return{...currData,[event.target.name]:[event.target.value]};
       });
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(FormData);
        setFormData({
            fullName:"",
            userName:"",
            password:"",
        })
    }

   return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input placeholder="Enter full Name" 
        type="text" 
        value={FormData.fullName} 
        onChange={handleInputChange} 
        id="fullName"
        name="fullName"
        />
        <br/> <br/>
       <label htmlFor="username">UserName</label>
        <input placeholder="Enter UserName" 
        type="text" 
        value={FormData.userName} 
        onChange={handleInputChange} 
        id="username"
        name="userName"
        />
        <br/><br/>
        <label htmlFor="password">PassWord</label>
        <input placeholder="Enter PassWord" 
        type="password" 
        value={FormData.password} 
        onChange={handleInputChange} 
        id="password"
        name="password"
        />
        <br/><br/>
        <button>Submit</button>
    </form>
   );
}