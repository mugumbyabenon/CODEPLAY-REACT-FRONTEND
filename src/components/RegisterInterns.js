import React, {useState,useContext} from 'react'



function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        start_date: null,
        end_date:null
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Call your API with the form datahttp://16.170.240.194:8000
      let response =  await fetch(`http://16.170.240.194:8000/interns`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'name':formData.name,'email':formData.email,'start_date':formData.start_date,'end_date':formData.end_date,
        })
          })
          console.log(response)
      };

    let enroll = async () =>{
        
          
    }
    
  return (

    <div>
       <form onSubmit={handleSubmit} >
        <h3>Name <span></span>
    <input name='name' type='text' value={formData.name}
        onChange={handleInputChange}
    ></input></h3>
    <h3>Email<span> </span>
    <input name='email' type='email' value={formData.email}
        onChange={handleInputChange}></input></h3>
    <h3>Start Date <span> </span>
    <input name='start_date' type='date' value={formData.start_date}
        onChange={handleInputChange}></input></h3>
    <h3>End Date <span> </span>
    <input name='end_date' type='date' value={formData.end_date}
        onChange={handleInputChange}></input></h3>
    <input type='submit' />
    </form></div>
  )
}

export default Register