import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between"  width="100vw" p={2}>
      {/*SEARCH Bar*/}
      <Box display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{p: 1}}>
          <SearchIcon/>
        </IconButton>
      </Box>

      {/* ICON  */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutLinedIcon/>
          ) : (
            <LightModeOutLinedIcon/>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutLinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutLinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutLinedIcon/>
        </IconButton>
      </Box>

      {/* <IconButton></IconButton> */}
    </Box>
  );
}
