import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from 'axios';
import Logo from '../../img/logo.png';
import { AiOutlineClose } from "react-icons/ai";

function Table({ data }) {
    const [bookeddata, setBookeddata] = useState([]);

    // const [selectedItemId, setSelectedItemId] = useState(null);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/bookedDetail/get");
        setBookeddata(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const [openModal, setOpenModal] = useState(false);
    const [selectedBookingId, setSelectedBookingId] = useState(null);

    const handleComplete = async () => {
        // console.log(selectedBookingId);
        const bookingId = selectedBookingId;
        try {
            // Get the data from the `booking` table before deleting it
            const response = await axios.put(`http://localhost:5000/api/booking/complete/${bookingId}`);
            console.log(response.data);
        
            // Refresh the data by calling the loadData function
            loadData();
          } catch (error) {
            console.error('Error completing the Process:', error);
            console.log(error.response.data);
          }
    
        setOpenModal(false);
      };
    
    return (
        <div className='tableContainer'>
            <h2>For Booking</h2>
            <table className="userTable">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>User Name</th>
                        <th>Package</th>
                        <th>Cost</th>
                        <th>Start Time</th>
                        <th>Phone</th>
                        <th style={{ width: "30%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            console.log(item.booking_id);
                            const { startDate } = item;
                            const dateTimeString = startDate;
                            const dateObj = new Date(dateTimeString);
                            const formattedDate = dateObj.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            });

                            // console.log(formattedDate);
                            return (
                                <tr key={item.booking_id}>

                                    <th scope='row' style={{}}>{index + 1}</th>
                                    <td style={{ color: "#8AD3C2" }}>{item.user_name}</td>
                                    <td style={{}}>{item.pac_name}</td>
                                    <td style={{}}>{item.cost}</td>
                                    <td style={{}}>{formattedDate}</td>
                                    <td style={{}}>{item.phone}</td>
                                    <td style={{ width: "100%", flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "center", gap: "1.4rem" }}>
                                        <Link className='actionLink' to={`/update/${item.id}`}>
                                            <button className='btn-edit actionBtn'><AiFillEdit style={{ fontSize: "1.4rem" }} /></button>
                                        </Link>
                                        
                                        <button className='btn-edit actionBtn' onClick={() => {
                                            setSelectedBookingId(item.booking_id);
                                            setOpenModal(true);
                                        }}> Complete</button>
                                        <Link className='actionLink' to={`/delete/${item.id}`}>
                                            <button className='btn-delete actionBtn'><AiFillDelete style={{ fontSize: "1.4rem" }} /></button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h2 style={{ marginTop: "2rem" }}>For Booked</h2>
            <table className="userTable">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>User Name</th>
                        <th>Package</th>
                        <th>Cost</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th style={{ width: "30%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookeddata.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th scope='row' style={{}}>{index + 1}</th>
                                    <td style={{ color: "#8AD3C2" }}>{item.user_name}</td>
                                    <td style={{}}>{item.pac_name}</td>
                                    <td style={{}}>{item.cost}</td>
                                    <td style={{}}>{item.phone}</td>
                                    <td style={{}}>Completed</td>
                                    <td style={{ width: "100%", flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "center", gap: "1.4rem" }}>
                                        <Link className='actionLink' to={`/update/${item.id}`}>
                                            <button className='btn-edit actionBtn'><AiFillEdit style={{ fontSize: "1.4rem" }} />&nbsp; Edit</button>
                                        </Link>
                                        <Link className='actionLink' to={`/delete/${item.id}`}>
                                            <button className='btn-delete actionBtn'><AiFillDelete style={{ fontSize: "1.4rem" }} />&nbsp; Delete</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                openModal &&
                <div className='adminmodalBackground'>
                    <div className="adminmodalContainer">
                        <img src={Logo} alt="" />
                        <button className="adminmodalCloseBtn" onClick={() => { setOpenModal(false) }}><AiOutlineClose style={{ fontWeight: "bolder" }} /></button>
                        {/* <div className="modalTitle">
              <h1>Are you Sure?</h1>
            </div> */}
                        <div className="adminmodalBody">
                            <h3>Are you sure want to perform this action?</h3>
                        </div>
                        <div className="adminmodalFooter">
                            <button onClick={handleComplete}>Yes</button>
                            <button onClick={() => setOpenModal(false)}>No</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Table
