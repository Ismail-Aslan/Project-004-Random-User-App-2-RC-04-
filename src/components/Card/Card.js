import React, {useState,useEffect} from "react";
import "./Card.css";
import man from "./../../assets/man.svg";
import woman from "./../../assets/woman.svg";
import mail from "./../../assets/mail.svg";
import growingUpMan from "./../../assets/growingUpMan.svg";
import growingUpWoman from "./../../assets/growingUpWoman.svg";
import map from "./../../assets/map.svg";
import phone from "./../../assets/phone.svg";
import padlock from "./../../assets/padlock.svg";
import axios from "axios"
import Table from "../table/Table";
// import Table from "../table/Table";

export default function Card() {

  const [data,setData] = useState([]);
  const [userList,setUserList] = useState([])
  const [heading, setHeading] = useState(["My name is",data===""  ?`${data.name.title} ${data.name.first} ${data.name.last}` : []]);
  
  const getUser = () => {
    axios.get("https://randomuser.me/api/")
    .then((res) => {

      setData(res.data.results[0]);
      setHeading(["My name is",`${res.data.results[0].name.title} ${res.data.results[0].name.first} ${res.data.results[0].name.last}`]);

    })
    
  }
  useEffect(() => {
    getUser();
  }, [])

  




    const handleName = (heading) => setHeading(["My name is",`${data.name.title} ${data.name.first} ${data.name.last}`]);
    const handleMail = (heading) => setHeading(["My email is",`${data.email}`]);
    const handleAge = (heading) => setHeading(["My age is",`${data.dob.age}`]);
    const handleStreet = (heading) => setHeading(["My street is",`${data.location.street.name}`]);
    const handlePhone = (heading) => setHeading(["My phone is",`${data.phone}`]);
    const handlePassword = (heading) => setHeading(["My password is",`${data.login.password}`]);
   


    // let tempArrForUserList = userList;
    // console.log("userList",userList,typeof userList);
  
    // const addUser1 = () => {
      
    
             

    //           if (userList.filter((el) => el.email === data.email).length === 0) {

    //             tempArrForUserList.push({
    //                     firstName: `${data.name.first}`,
    //                     email: `${data.email}`,
    //                     phone: `${data.phone}`,
    //                     age: `${data.dob.age}`
    //                   })

    //           }

    //            setUserList(tempArrForUserList);
      
    // }
    const addUser = ()=>{
      if (userList.filter((el) => el.email === data.email).length === 0){
            setUserList(oldArray => [...oldArray,{
            firstName: `${data.name?.first}`,
            email: `${data.email}`,
            phone: `${data.phone}`,
            age: `${data.dob?.age}`
          }])
        }
    }
    
  return (
    <div className="card-container">
      <div className="banner-line card_banner-line">
        <div className="card-img_container">
          <img className="card-img" src={data.picture?.large} alt="" />
        </div>
      </div>

      <div className="main-container">
        <p className="card-heading">{heading[0]}</p>
        <p className="card-sub-heading">{heading[1]}</p>
        <div className="buttons-container">
          <div className="btn-container">
            <img className="btn-img" src={data.gender==="male" ? man : woman} alt="" onMouseOver={handleName}/>
          </div>
          <div className="btn-container">
            <img className="btn-img" src={mail} alt="" onMouseOver={handleMail}/>
          </div>
          <div className="btn-container">
            <img className="btn-img" src={data.gender==="male" ? growingUpMan : growingUpWoman} alt="" onMouseOver={handleAge}/>
          </div>
          <div className="btn-container">
            <img className="btn-img" src={map} alt="" onMouseOver={handleStreet}/>
          </div>
          <div className="btn-container">
            <img className="btn-img" src={phone} alt="" onMouseOver={handlePhone}/>
          </div>
          <div className="btn-container">
            <img className="btn-img" src={padlock} alt="" onMouseOver={handlePassword}/>
          </div>
        </div>

        <div className="sub-buttons-container">
            <button className="btn-user" onClick={getUser}>New User</button>
            <button className="btn-user" onClick={addUser}>Add User</button>

            
              
            <Table  userList={userList}></Table>
              
            
            

        </div>
        
      </div>

  
    </div>
  );
}
