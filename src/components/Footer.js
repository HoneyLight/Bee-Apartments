import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMdMail } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { BiUpArrowAlt } from 'react-icons/bi';
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import bg from "./image/bg.png"

function Footer() {
    const FooterCurentYear = new Date().getFullYear();
    return (
        <div className="Footer">
             < p className='middle-line'>________________________________________________________________________________________________________________________________________________________________________</p><br />
            <div className="Container">
                <div className="col">
                    <h6>CONTACT INFO</h6>
                    <div>
                        <AiOutlinePhone className="Icons" />
                        <p>Call +123456789</p>
                    </div>
                    <div>
                        <IoMdMail className="Icons" />
                        <p>properties@newhomes.com</p>
                    </div>
                    <div>
                        <MdLocationOn className="Icons" />
                        <p>6th Street, Alley Bay Sanfrancisco California</p>
                    </div>
                </div>
                <div className="col">
                    <h6>PROPERTIES</h6>
                    <div className="Links-Container">
                       <li> <Link className="Footer-Link">Q1 DISTRICT</Link></li>
                       <li> <Link className="Footer-Link">THE ONE</Link></li>
                        <li><Link className="Footer-Link">PANORAMIC</Link></li>
                       <li> <Link className="Footer-Link">LUMIA RESIDENCES</Link></li>
                        <li><Link className="Footer-Link">QUARTET</Link></li>
                        <li><Link className="Footer-Link">PARK VIEW</Link></li>
                    </div>

                </div>
                <div className="col">
                    <div className="First">
                        <h6>NEW YORK OFFICE</h6>
                        <p>
                            Monday- Saturday 8AM - 10PM <br />
                            Sunday 11AM - 5PM
                        </p>
                    </div>
                    <div className="Second">
                        <h6>BERLIN OFFICE</h6>
                        <p>Monday - Saturday 8AM - 10PM <br />
                            Sunday 11AM - 5PM</p>
                    </div>
                </div>
                <div className="col">
                    <h6>SUBSCRIBE TO NEWSLETTER</h6>
                    <div>
                        <input type="email" placeholder="Your email" />
                        <button><BiUpArrowAlt /></button>
                    </div>
                </div>
            </div>
            <div className="Last-Foot">
                <div className="col">
                <img src={bg} alt="Logo" />
                </div>
                <div className="col">
                    <div>© <span>{FooterCurentYear}</span> NEW HOMES,       ALL RIGHTS RESERVED</div>
                </div>
                <div className="col">
                    <div>
                        <FaFacebookF className="Socials"/>
                    </div>
                    <div>
                        <BsInstagram className="Socials"/>
                    </div>
                    <div>
                        <BsTwitter className="Socials"/>
                    </div>
                    <div>
                        <FaPinterestP className="Socials"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer; 