import React, { useState } from 'react'
import "./package.css";
import axios from 'axios';

export default function Packageform() {
  const [inputs, setInputs] = useState({});
  console.log(inputs);
  const [err, setErr] = useState(null);

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/api/auth/addPackage", inputs)
    }catch(err){
      setErr(err.response.data);
    }

    setInputs({
      pac_title: '',
      pac_cost: '',
      pac_description: '',
      pac_time: '',
      mainImg: '',
      img2: '',
      img3: '',
    })
  }

  const handleMyChange = (e) =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='packageFormDiv'>
      <form action="">
        <h2>Adding Package</h2>
        <div className="packageUpDiv">
            <input type="text" placeholder='Enter Package Title' name='pac_title' onChange={(e) => handleMyChange(e)} value={inputs.pac_title}/>
            <input type="number" placeholder='Enter Package Cost' name='pac_cost' onChange={(e) => handleMyChange(e)} value={inputs.pac_cost}/>
        </div>
        <textarea style={{resize:"none"}} name="pac_description" id="" cols="30" rows="10" placeholder='Describe about your package...' onChange={(e) => handleMyChange(e)} value={inputs.pac_description}/>
        <input type="text" placeholder='Enter Time. E.g. 4 Days - 5 Days' name='pac_time' onChange={(e) => handleMyChange(e)} value={inputs.pac_time}/>
        <input type="text" placeholder='Link for you package main image' name='mainImg' onChange={(e) => handleMyChange(e)} value={inputs.mainImg}/>
        <div className="addPackageImage">
            <input type="text" placeholder='Link for you package 2nd image' name='img2' onChange={(e) => handleMyChange(e)} value={inputs.img2}/>
            <input type="text" placeholder='Link for you package 3nd image' name='img3' onChange={(e) => handleMyChange(e)} value={inputs.img3}/>
        </div>
        <input type="submit" value='Add' onClick={handleClick}/>
      </form>
    </div>
  )
}
