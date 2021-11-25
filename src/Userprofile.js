import { useHistory } from 'react-router';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import IconButton from '@mui/material/IconButton';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import Button from '@mui/material/Button';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';

export function Userprofile({ userData, udata,setuserData, index }) {
  const history = useHistory();
  return (<div className="user-profile">
    <div className="img-div">
      <img src={udata.photo} alt="user pic" className="user-prof-img" />
      <br />
    </div>
    <div className="name-loca">
      <p className="user-name">{udata.fname} {udata.lname} 
      <span className="user-icon"> 
<IconButton aria-label="Delete user" onClick={() => {
    const reqList=userData.filter((data,idx)=>(idx!==index));
    setuserData(reqList);
    } }>
  <DeleteForeverSharpIcon color="warning" />
</IconButton>
</span>
     </p>
      <p className="location">{udata.location}
      
     </p>
      <p> 
      <IconButton aria-label="Edit user" onClick={() => history.push('/edit-user/' + index)}>
  <ModeEditOutlineTwoToneIcon />
</IconButton>    
<Button onClick={() => history.push('/profile/' + index)} endIcon={<KeyboardArrowRightTwoToneIcon />}>
        View Full Profile
      </Button>
      
       </p>
       </div>
       </div>);
}
    {/* <button onClick={() => history.push('/profile/' + index)}>view user profile</button></p>
    </div>
    <div className="line"></div>
       
        <div>
        <p>Details</p>
          <table>
            <tr><td>Contact</td>
            <td><EmailIcon/></td>
            <td>{email}</td></tr>
            <tr><td>Education</td>
            <td><SchoolIcon/></td><td>{qualification}</td></tr>
            <tr><td>Gender</td><td></td><td>{gender}</td></tr>
          </table>
        </div>
        <div className="line"></div>
        <div>
        <p>About  <button>Edit Profile</button>
       </p>
        <p className="about-user">{about}</p>
       </div>*/}


