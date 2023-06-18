import React from 'react';
import {Link} from "react-router-dom"
import "./style.css"
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
function Table({data}) {
    
  return (
    <div className='tableContainer'>
      <table className="userTable">
        <thead>
            <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item, index) =>{
                    return(
                        <tr key={item.id}>
                            <th scope='row' style={{width:"3%"}}>{index + 1}</th>
                            <td style={{width:"20%", color: "#8AD3C2"}}>{item.name}</td>
                            <td style={{width:"25%"}}>{item.email}</td>
                            <td style={{width:"24%"}}>{item.password.substring(0,18)}...</td>
                            <td style={{width:"10%"}}>{item.phone}</td>
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
