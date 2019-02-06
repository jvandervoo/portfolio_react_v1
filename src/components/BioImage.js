import React from "react";
import "./BioImage.scss";
import Background from "../assets/imgs/profile-pic.png";

export default function BioImage() {
    return <div className="bio-image" style={{ backgroundImage: `url(${Background})` }} />;
}
