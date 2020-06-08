import linkedIn from "../linkedin.svg";
import github from "../github.svg";
import mail from "../mail.svg";
import React from "react";
import "./Footer.css";

export function Footer() {
    return <footer className="App-footer">
        <div className="social-media">
            <a href="https://www.linkedin.com/in/anhnguyenq/" target="_blank" rel="noopener noreferrer"
               className="icon-wrapper linkedin">
                <div>
                    <img src={linkedIn} alt="LinkedIn logo" className="social-media-logo"/>
                </div>
            </a>
            <a href="https://github.com/quynhanh-ngx" target="_blank" rel="noopener noreferrer"
               className="icon-wrapper github"
            >
                <div>
                    <img src={github} alt="GitHub logo" className="social-media-logo"/>
                </div>
            </a>
            <a href="mailto:audreynguyen2803@gmail.com"
               className="icon-wrapper mail"
            >
                <div>
                    <img src={mail} alt="mail logo" className="social-media-logo"/>
                </div>
            </a>
        </div>
        <p>Copyright Quynh Anh Nguyen © 2020</p>
    </footer>;
}

