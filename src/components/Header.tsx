import React from 'react';
import {AppBar, Box, Grid, Toolbar,} from "@mui/material";
import {DarkMode} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';

import "./Header.scss";
import AuthService from "../services/AuthService";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const route = useLocation();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  }

  return (
      <div className="header">
        <AppBar position="static">
          <Toolbar style={{backgroundColor: "#222725"}}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item/>
              <Grid item>
                <Box>
                  <DarkMode sx={{fontSize: 40}}/>
                </Box>
              </Grid>
              <Grid item>
              {route.pathname === "/home" &&
                <LogoutIcon onClick={handleLogout}>
                </LogoutIcon>}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
  );
};


export default Header;