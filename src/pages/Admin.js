import React from 'react'
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MainPanel from '../components/admin/MainPanel';


export default function Admin() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <MainPanel/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

      

  )
}
