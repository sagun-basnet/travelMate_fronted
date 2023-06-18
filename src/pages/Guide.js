import React, { useState } from 'react'
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from '../scenes/global/Topbar'
import Sidebar from '../scenes/global/SidebarG';
import Dashboard from "../scenes/dashnoardG";
import Team from "../scenes/team";
import ManageGuide from "../scenes/guide";
import Calendar from '../scenes/calender';
import FAQ from '../scenes/faq';
import Bar from '../scenes/bar';
import Pie from '../scenes/pie';
import Line from '../scenes/line';
import Geography from '../scenes/geography';


export default function Guide() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="myApp"> 
        {/* <div className="sidebarContainer"> */}
          <Sidebar isSidebar={isSidebar} />
        {/* </div> */}
            <main className="myContent">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Team />} />
                    <Route path="/guide" element={<ManageGuide />} />
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
