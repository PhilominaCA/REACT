import { Userprofile } from "./Userprofile";


export function Userdisplay({ userData,setuserData }) {
  return <div className="App-body">
    {userData.map((udata, index) => <Userprofile userData={userData} udata={udata} setuserData={setuserData} index={index} />)}
  </div>;
}
