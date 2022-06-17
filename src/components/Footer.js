import React from "react";
import twitterIcon from "../images/twitter-icon.png"
import facebookIcon from "../images/facebook-icon.png"
import instagramIcon from "../images/instagram-icon.png"
import githubIcon from "../images/github-icon.png"

export default function About() {
    return (
        <footer>
            <img src={twitterIcon} alt="twitter" />
            <img src={facebookIcon} alt="facebook" />
            <img src={instagramIcon} alt="instagram" />
            <img src={githubIcon} alt="github" />
        </footer>  
    );
}