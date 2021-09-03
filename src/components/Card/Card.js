import React, {useState} from "react";
import "./Card.css";
import man from "./../../assets/man.svg";
import mail from "./../../assets/mail.svg";
import growingUpMan from "./../../assets/growingUpMan.svg";
import growingUpWoman from "./../../assets/growingUpWoman.svg";
import map from "./../../assets/map.svg";
import phone from "./../../assets/phone.svg";
import padlock from "./../../assets/padlock.svg";

export default function Card() {

    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const handleName = (heading) => setHeading("My name is");
  return (
    <div className="card-container">
      <div className="banner-line card_banner-line">
        <div className="card-img_container">
          <img className="card-img" src="https://picsum.photos/50/50" alt="" />
        </div>
      </div>

      <div className="main-container">
        <p className="card-heading">{heading}</p>
        <p className="card-sub-heading">İsmail Aslan</p>
        <div className="buttons-container">
          <div className="btn-container">
            <img className="btn-img" src={man} alt="" onClick={handleName}/>
          </div>
          <div className="btn-container">
            <img className="btn-img" src={mail} alt="" />
          </div>
          <div className="btn-container">
            <img className="btn-img" src={growingUpMan} alt="" />
          </div>
          <div className="btn-container">
            <img className="btn-img" src={map} alt="" />
          </div>
          <div className="btn-container">
            <img className="btn-img" src={phone} alt="" />
          </div>
          <div className="btn-container">
            <img className="btn-img" src={padlock} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
