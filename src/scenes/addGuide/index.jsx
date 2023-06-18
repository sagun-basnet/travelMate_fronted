import React from 'react'
import Header from '../../components/admin/Header'
import GuidForm from './guidform'
import { Box } from '@mui/material'

export default function index() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADD GUIDE" subtitle="Here you can add guide"/>
        {/* <input type="text" placeholder='Search'/> */}
      </Box>
        <GuidForm/>
    </Box>
  )
}