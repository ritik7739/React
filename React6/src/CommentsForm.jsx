import { useState } from "react";

export default function CommentsForm(){
    let [FormData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5,
    });

    let handleInputChange= (event)=>{
      setFormData((currData)=>{
        return {...currData, [event.target.name]:event.target.value };
      });
    };

    let handleSubmit=(event)=>{
        console.log(FormData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5,
        });
    };


    return(
        <div>
           <h4>Give your Valueable comment!! </h4>
           <form onSubmit={handleSubmit}>
           <label htmlFor="username">UserName</label>
           <input 
           placeholder="username"
           type="text"
           id="username"
           value={FormData.username}
           onChange={handleInputChange}
           name="username"
           />
           <br/><br/>

           <label htmlFor="remarks">Remarks</label>
           <textarea 
           placeholder="remarks"
           type="text"
           id="remarks"
           value={FormData.remarks}
           onChange={handleInputChange}
           name="remarks"
           />
           <br/><br/>
            
           <label htmlFor="rating">Rating</label>
           <input 
           placeholder="rating"
           type="number"
           min={1}
           max={5}
           id="rating"
           value={FormData.rating}
           onChange={handleInputChange}
           name="rating"
           />
           <br/><br/>
           <button>Add Comment</button>
          </form>
        </div>
    );
}