import React from "react";
import profileImage from "../images/profile-image.jpg";
import emailButton from "../images/email-button.png";
import linkedInButton from "../images/linkedin-button.png";

export default function Info() {
    return (
        <div className="info">
            <img src={ profileImage } alt="Foto de Alejandro Gamino" className="info--profile-image"/>  
            <div className="info--container">
                <h1 className="info--profile-name">Alejandro Gamino</h1>
                <p className="info--job-title">Software Engineer</p>
                <p className="info--website">alejandrogamino.com</p>
                <div className="info--buttons">
                    <img src={ emailButton } />
                    <img src={ linkedInButton } />
                </div>
            </div>
        </div>
    );
}