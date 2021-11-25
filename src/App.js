import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Userdetails } from './Userdetails';
import { useState } from 'react';
import { Create } from './Create';
import { userData } from './userData';
import { Userdisplay } from './Userdisplay';
import { Errorpage } from './Errorpage';
import { Home } from './Home';
import { Edituser } from './Edituser';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Editprofile } from './Editprofile';

function App() {
  const[userDetail,setuserDetail]=useState(userData);
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1,paddingBottom:"2vw" }}>
      <AppBar position="static" sx={{ backgroundColor:"rgb(15, 67, 109)" }}>
        <Toolbar >
  <div className="head-div">
            <Button color="inherit"> <Link to="/"><HomeOutlinedIcon fontSize="large"/> Home</Link></Button>
            <Button color="inherit"> <Link to="/users"><ViewListOutlinedIcon fontSize="large"/>Users List</Link></Button>
            <Button color="inherit"> <Link to="/create-user"><PersonAddAltIcon fontSize="large"/>Add New</Link></Button>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
              <div>
        <Switch>
        <Route exact path="/">
<Home/>      
   </Route>
   <Route path="/create-user">
     <Create userData={userDetail} setuserData={setuserDetail}/>
   </Route>
       <Route path="/edit-user/:id">
         <Edituser userData={userDetail} setuserData={setuserDetail}/>
       </Route>
       <Route path="/edit-profile/:id">
         <Editprofile userData={userDetail} setuserData={setuserDetail}/>
       </Route>
<Route path="/profile/:id"> 
<Userdetails  userData={userDetail}/>
</Route>
<Route path="/users">
<Userdisplay userData={userDetail} setuserData={setuserDetail}/> 
            </Route>      
        <Route path="**">
        <Errorpage/> 
        </Route>
        </Switch>
        </div>
    </div>
  );
}

export default App;


