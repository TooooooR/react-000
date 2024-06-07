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
                        <h4>Our Team</h4>
                        <div className="div_bloks">
                            <p>Ковальчук Станіслав</p>
                            <p>Проців Тарас</p>
                            <p>Гамрацей Дмитро</p>
                            <p>Кульчицький Ігор</p>
                            <p>Маслюк Роман</p>
                            <p>Панечко Тарас</p>
                        </div>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Subscribe</h4>
                        <div className="div_bloks">
                            <p><img src={instagram} alt="instagram" className="instagram"/>InnoLaunchINST</p>
                            <p><img src={tiktok} alt="tiktok" className="tiktok"/>InnoLaunchTT</p> 
                            <p><img src={facebook} alt="facebook" className="facebook"/>InnoLauchFB</p>
                        </div>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Help</h4>
                        <div className="div_bloks">
                            <p><img src={email} alt="email" className="email"/>InnoLaunch@gmail.com</p>
                            <p><img src={phone} alt="phone" className="phone"/>0992224693</p>
                        </div>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Donate</h4>
                        <div className="div_bloks">
                            <p>4444 5555 6666 7777</p>
                        </div>
                    </div>
                    <div className="sb__footer-links-div">
                        <img src={mainlogo_white} alt="mainlogo" className="mainlogo"/>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Footer;