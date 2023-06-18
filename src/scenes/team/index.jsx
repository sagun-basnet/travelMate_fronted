import React, { useEffect, useState } from 'react'
import Header from '../../components/admin/Header'
import { Box } from '@mui/material'
import Table from './Table'
import axios from 'axios';

export default function Index() {
  const [query, setQuery] = useState("");
  const search = (myData)=>{
    return myData.filter((item)=>
      item.name.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.phone.toLowerCase().includes(query)
      );
  };

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/user/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="MANAGE USER" subtitle="Here you can manage the user"/>
        <input type="text" placeholder='Search' className='searchData' onChange={(e) => setQuery(e.target.value)}/>
      </Box>
      <Table data={search(data)}/>
    </Box>
  )
}
