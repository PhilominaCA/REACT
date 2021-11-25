import { useState } from 'react';
import { useHistory,useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';

export function Edituser({ userData, setuserData }) {
  const { id } = useParams();
  const history = useHistory();
  const [fname, setFname] = useState(userData[id].fname);
  const [lname, setLname] = useState(userData[id].lname);
  const [photo, setPhoto] = useState(userData[id].photo);
  const userobj = {
    fname:fname,
    lname:lname,
    email:userData[id].email,
    gender:userData[id].gender,
    location:userData[id].location,
    qualification:userData[id].qualification,
    about:userData[id].about,
    photo:photo
};
  return (<div className="edit-user-div">
        <p className="edit-user-head"> 
         <Avatar alt="user profile" src={photo} sx={{ width: 100, height: 100 }} />
<h1>Edit User Data </h1></p>
<TextField id="outlined-basic"
            label="First Name"
            focused
            value={fname} onChange={(event) => setFname(event.target.value)} />
             <TextField id="outlined-basic"
            label="Last Name"
            focused
            value={lname} onChange={(event) => setLname(event.target.value)} />
             <TextField id="outlined-basic"
            label="Photo URL"
            focused
            value={photo} onChange={(event) => setPhoto(event.target.value)} />
             <Button variant="outlined" size="large" startIcon={<SaveTwoToneIcon/>} onClick={() => {
                 const userCopy=[...userData];
                 userCopy[id]=userobj;
                 setuserData(userCopy);
                  history.push("/users"); 
        }}>Save Detail</Button>
  </div>);
}
