import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// function HeaderLoggedIn(props) {
//   const isLoggedIn = localStorage.getItem("token");
//   if(isLoggedIn) {
//     return (
//       <Box>
//         <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
//           <Button variant="contained">Dashboard</Button>
//         </Link>
//         <Link to={"/"} style={{ textDecoration: "none" }}>
//           <Button variant="contained">HomePage</Button>
//         </Link>
//       </Box>  
//     )
//   }else{
//   return (
//     <Box>
//       <Link to={'/login'} style={{ textDecoration: 'none'}}>
//         <Button variant="contained">Sign In</Button>
//       </Link>
//       <Link to={'/register'} style={{ textDecoration: 'none'}}>
//         <Button variant="contained">Register</Button>
//       </Link>
//     </Box>
//   )
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
