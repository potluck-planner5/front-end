import React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: "10%",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 15, 1, 2),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "0ch",
      },
    },
  },
}));

// function SignedIn(props) {
//   const SingedIn = props.something;
//   if(SignedIn) {
//     return
//       <Link to={'/profile'} style={{textDecoration: 'none'}}>
//         <Box>
//           <Box>
//             <img></img>
//           </Box>
//             <Menu menuButton={<MenuButton>Username</MenuButton>} transition>
//              <Link to={'/profile'}>
//                <MenuItem>Profile</MenuItem>
//              </Link>
//              <Link to={'/dashboard'}>
//                <MenuItem>Dashboard</MenuItem>
//              </Link>
//              <Link to={'/homepage'}>
//                <MenuItem>Home Page</MenuItem>
//              </Link>
//            </Menu>
//         </Box>
//       </Link>
//   }
//   return
//     <Link to={'/login'} style={{ textDecoration: 'none'}}>
//       <Button variant="contained">Sign In</Button>
//     </Link>
//     <Link to={'/register'} style={{ textDecoration: 'none'}}>
//       <Button variant="contained">Register</Button>
//     </Link>
// }

function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h3"
              noWrap
              marginRight="30%"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Potluck Planner
            </Typography>
            <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
              <Button variant="contained">Dashboard</Button>
            </Link>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Button variant="contained">Login</Button>
            </Link>
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              <Button variant="contained">Register</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
