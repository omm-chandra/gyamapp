import React from "react";
import { BsGithub,BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../image/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="Main_footer">
                <hr />
                <div className="footer_flex">
                    <a href="https://github.com/" about="_blank"><BsGithub className="footer_icon"/></a>
                    <a href="https://www.instagram.com/" about="_blank"><BsInstagram className="footer_icon"/></a>
                    <a href="https://www.linkedin.com" about="_blank"><FaLinkedinIn className="footer_icon"/></a>
                </div>
                <div className="footer_logo">
                    <img src={logo} alt="WEB_NAME" className="logo" id="logo"/>
                    <div className="Blur_f"></div>
                </div>
            </div>
        </>
    )
}

export default Footer;
