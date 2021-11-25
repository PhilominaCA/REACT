import { useState } from 'react';
import { useHistory,useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';


export function Editprofile({ userData, setuserData }) {
  const { id } = useParams();
  const history = useHistory();
  const [email, setEmail] = useState(userData[id].email);
  const [gender, setGender] = useState(userData[id].gender);
  const [location, setLocation] = useState(userData[id].location);
  const [qualification, setQualification] = useState(userData[id].qualification);
  const [about, setAbout] = useState(userData[id].about);
  const userobj = {
    fname: userData[id].fname,
    lname: userData[id].lname,
    email: email,
    gender: gender,
    location: location,
    qualification: qualification,
    about: about,
    photo: userData[id].photo
  };
  return (<div className="edit-prof-div">
    <p className="edit-user-head">
      <Avatar alt="user profile" src={userobj.photo} sx={{ width: 100, height: 100 }} />
      <h1>Edit User Profile </h1></p>
    <TextField id="outlined-basic"
      label="Email"
      focused
      value={email} onChange={(event) => setEmail(event.target.value)} />
    <TextField id="outlined-basic"
      label="Gender"
      focused
      value={gender} onChange={(event) => setGender(event.target.value)} />
    <TextField id="outlined-basic"
      label="Location"
      focused
      value={location} onChange={(event) => setLocation(event.target.value)} />
    <TextField id="outlined-basic"
      label="Qualification"
      focused
      value={qualification} onChange={(event) => setQualification(event.target.value)} />
    <TextField id="outlined-basic"
      label="About"
      focused
      value={about} onChange={(event) => setAbout(event.target.value)} />
    <Button variant="outlined" size="large" startIcon={<SaveTwoToneIcon />} onClick={() => {
      const userCopy = [...userData];
      userCopy[id] = userobj;
      setuserData(userCopy);
      history.push("/profile/" + id);
    }}>Save Profile Details</Button>
  </div>);
}
