import './App.css';
import {React, useState} from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppDrawer from './components/AppDrawer'
import ProfileForm from "./components/ProfileForm";
import ProfileDisplay from "./components/ProfileDisplay"


export default function App() {
  
 const [users, setUsers] = useState({firstname: '', displayname: '', location: '', lastname: '', email: '', workphone: "", role: ""}) 

return (
  <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
      <CssBaseline />
      <AppDrawer />
      <ProfileForm users={users} setUsers={setUsers} />
      <ProfileDisplay users={users} />      
  </Box>
);
}


