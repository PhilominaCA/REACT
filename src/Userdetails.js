import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { useHistory } from 'react-router';

export function Userdetails({ userData }) {
    const {id} =useParams();
  const history = useHistory();
    const selectedUser=userData[id];
  return (<div >
    <div className="user-details">
      <Avatar alt="user profile" src={selectedUser.photo} sx={{ width: 200, height: 200 }} />
      <div>
        <p>{selectedUser.fname} {selectedUser.lname}  </p>
        <hr/>
        <p className="loc-det">{selectedUser.location}</p>
        <Button variant="text" onClick={()=>{history.push('/edit-profile/'+id)}} endIcon={<ModeEditOutlineTwoToneIcon/>}>Edit Profile</Button>
      </div>
    </div>
    <div className="user-prof-details">
      <h3>Details  </h3> &nbsp;&nbsp;&nbsp;
      <div className="line">
        <table>
          <tr><th>Contact</th>
            <td><EmailIcon /></td>
            <td>{selectedUser.email}</td></tr>
          <tr><th>Education</th>
            <td><SchoolIcon /></td><td>{selectedUser.qualification}</td></tr>
          <tr><th>Gender</th><td></td><td>{selectedUser.gender}</td></tr>
          <tr><th>About</th><td></td><td>{selectedUser.about}</td></tr>
        </table>
      </div>
    </div>
  </div>);
}
