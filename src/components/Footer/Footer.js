import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Footer.css'
import IconFacebook from '../../assets/img/facebook-icon.png'
import IconInstagram from '../../assets/img/inst-icon.png'
import IconYoutube from '../../assets/img/youtube-icon.png'

const Footer = () => {
    return (
        <footer>
            <div className='container__footer'>
                <div className='footer__logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='footer__list_first'>
                    <ul>
                        <h3>ABOUT CHIGO</h3>
                        <li>CHIGO Profile</li>
                        <li>Honors</li>
                        <li>Global CHIGO</li>
                        <li>Development Course</li>
                    </ul>
                </div>
                <div className='footer__list_second'>
                    <ul>
                        <h3>PRODUCTS</h3>
                        <li>Wall Split Type</li>
                        <li>Floor Standing Type</li>
                        <li>Window Type</li>
                        <li>Portable</li>
                    </ul>
                </div>
                <div className='footer__list_third'>
                    <ul>
                        <h3>NEWS</h3>
                        <li>2021</li>
                        <li>2020</li>
                        <li>2019</li>
                        <li>2018</li>
                    </ul>
                </div>
                <div className='footer__list_four'>
                    <ul>
                        <h3>CONTACT US</h3>
                        <li>sale@chigogroup.com</li>
                    </ul>
                </div>
                <div className='footer__list_five'>
                    <h3>FOLLOW US</h3>
                    <div className='icon__block'>
                        <img src={IconFacebook} alt='icon' />
                    </div>
                    <div className='icon__block'>
                        <img src={IconInstagram} alt='icon' />
                    </div>
                    <div className='icon__block'>
                        <img src={IconYoutube} alt='icon' />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;