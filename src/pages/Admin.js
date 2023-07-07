import React, { useState } from 'react'
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from '../scenes/global/Topbar'
import Sidebar from '../scenes/global/Sidebar';
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import ManageGuide from "../scenes/guide";
import AddGuide from "../scenes/addGuide";
import Calendar from '../scenes/calender';
import FAQ from '../scenes/faq';
import Bar from '../scenes/bar';
import Pie from '../scenes/pie';
import Line from '../scenes/line';
import Geography from '../scenes/geography';
import AddPackage from '../scenes/addPackage';
import ManagePackage from "../scenes/package";
import ManageBooking from "../scenes/booking";


export default function Admin() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="myApp"> 
        <Sidebar isSidebar={isSidebar} />
            <main className="myContent">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
                    <Route path="/users" element={<Team />} />
                    <Route path="/guide" element={<ManageGuide />} />
                    <Route path="/addGuide" element={<AddGuide />} />
                    <Route path="/addPackage" element={<AddPackage />} />
                    <Route path="/managePackage" element={<ManagePackage />} />
                    <Route path="/manageBooking" element={<ManageBooking />} />
                    <Route path="/calender" element={<Calendar />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/geography" element={<Geography />} />

                </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

      

  )
}
