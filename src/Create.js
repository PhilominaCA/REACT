import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";
import { useHistory } from "react-router-dom";
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone'; 

export function Create({userData,setuserData}) {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [qualification, setQualification] = useState("");
    const [about, setAbout] = useState("");
    const [photo, setPhoto] = useState("");
    const hist = useHistory();
    const userobj = {
        fname:fname,
        lname:lname,
        email:email,
        gender:gender,
        location:location,
        qualification:qualification,
        about:about,
        photo:photo
    };

    return (<div className="form-div">
        <h2>Add a new User!</h2>
        <TextField id="standard-basic" variant="standard" 
            label="First Name"
            value={fname} onChange={(event) => setFname(event.target.value)}/>
             <TextField  id="standard-basic" variant="standard" 
            label="Last Name"
            value={lname} onChange={(event) => setLname(event.target.value)} />
             <TextField id="standard-basic" variant="standard"
            label="Email"
            value={email} onChange={(event) => setEmail(event.target.value)} />
             <TextField id="standard-basic" variant="standard" 
            label="Gender"
            value={gender} onChange={(event) => setGender(event.target.value)} />
        <TextField id="standard-basic" variant="standard" 
            label="Location"
            value={location} onChange={(event) => setLocation(event.target.value)} />
        <TextField id="standard-basic" variant="standard" 
            label="Qualification"
            value={qualification} onChange={(event) => setQualification(event.target.value)} />
        <TextField id="standard-basic" variant="standard" 
            label="About"
            value={about} onChange={(event) => setAbout(event.target.value)} />
            <TextField id="standard-basic" variant="standard" 
            label="Photo URL"
            value={photo} onChange={(event) => setPhoto(event.target.value)} />
        <Button variant="outlined" startIcon={<PersonAddTwoToneIcon/>} onClick={() => {
            setuserData([userobj, ...userData]); hist.push("/users"); console.log(userobj,userData);
        }}>Save New User</Button>
    </div>);
}


