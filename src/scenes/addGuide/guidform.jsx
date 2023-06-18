import React, { useState } from 'react'
import "./guideForm.css";
import axios from 'axios';

export default function Guidform() {
  const [inputs, setInputs] = useState({});
  const [err, setErr] = useState(null);

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/api/auth/guideRegister", inputs)
    }catch(err){
      setErr(err.response.data);
    }

    setInputs({
      name: '',
      phone: '',
      email: '',
      password: ''
    })
  }

  const handleMyChange = (e) =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='guidFormDiv'>
      <form action="">
        <h2>Guide Registration</h2>
        <input type="text" placeholder='Enter guide full Name' name='name' onChange={(e) => handleMyChange(e)} value={inputs.name}/>
        <input type="text" placeholder='Enter guide Phone number' name='phone' onChange={(e) => handleMyChange(e)} value={inputs.phone}/>
        <input type="text" placeholder='Enter guide Email' name='email' onChange={(e) => handleMyChange(e)} value={inputs.email}/>
        <input type="text" placeholder='Enter guide Password' name='password' onChange={(e) => handleMyChange(e)} value={inputs.password}/>
        <input type="submit" value='Send' onClick={handleClick}/>
      </form>
    </div>
  )
}
