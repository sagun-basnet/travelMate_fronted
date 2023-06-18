import React from 'react';
import {Link} from "react-router-dom"
// import "./style.css"
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
function Table({data}) {
    
  return (
    <div className='tableContainer'>
      <table className="userTable">
        <thead>
            <tr>
                <th>SN</th>
                <th>Title</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Time</th>
                <th>Main Image</th>
                <th>2nd Image</th>
                <th>3rd Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item, index) =>{
                    return(
                        <tr key={item.id}>
                            <th scope='row' style={{}}>{index + 1}</th>
                            <td style={{color: "#8AD3C2"}}>{item.pac_name}</td>
                            <td style={{}}>{item.pac_description.substring(0,28)}...</td>
                            <td style={{}}>{item.cost}</td>
                            <td style={{}}>{item.time}</td>
                            <td style={{}}>{item.mainImg.substring(0,18)}...</td>
                            <td style={{}}>{item.img2.substring(0,18)}...</td>
                            <td style={{}}>{item.img3.substring(0,18)}...</td>
                            <td style={{width:"100%",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",gap:"1.4rem"}}>
                                <Link className='actionLink' to={`/update/${item.id}`}>
                                    <button className='btn-edit actionBtn'><AiFillEdit style={{fontSize:"1.4rem"}}/>&nbsp;  Edit</button>
                                </Link>
                                <Link className='actionLink' to={`/delete/${item.id}`}>
                                    <button className='btn-delete actionBtn'><AiFillDelete style={{fontSize:"1.4rem"}}/> &nbsp; Delete</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
