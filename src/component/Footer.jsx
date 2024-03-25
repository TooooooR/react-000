import React from "react";
import "../styles/Footer.css";
import instagram from "../photos/instagram.png";
import tiktok from "../photos/tiktok.png";
import facebook from "../photos/facebook.png";
import email from "../photos/email.png";
import phone from "../photos/phone.png";
import mainlogo_white from "../photos/mainlogo_white.png";

function Footer() {
    return (
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4 className="team">Our Team</h4>
                        <div className="teammember">
                            <p>Ковальчук Станіслав</p>
                            <p>Кульчицький Ігор</p>
                            <p>Гамрацей Дмитро</p>
                            <p>Проців Тарас</p>
                            <p>Маслюк Роман</p>
                        </div>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4 className="subscribe">Subscribe</h4>
                        <div className="subscribeitems">
                            <p><img src={instagram} alt="instagram" className="instagram"/>InnoLaunchINST</p>
                            <p><img src={tiktok} alt="tiktok" className="tiktok"/>InnoLaunchTT</p> 
                            <p><img src={facebook} alt="facebook" className="facebook"/>InnoLauchFB</p>
                        </div>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4 className="help">Help</h4>
                        <div className="contacts">
                        <p><img src={email} alt="email" className="email"/>InnoLaunch@gmail.com</p>
                        <p><img src={phone} alt="phone" className="phone"/>0992224693</p>
                        </div>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4 className="donation">Donate</h4>
                        <div className="card">
                            <p>4444 5555 6666 7777</p>
                        </div>
                    </div>
                    <div className="sb__footer-links-div">
                        <img src={mainlogo_white} alt="logo" className="logo2"/>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Footer;