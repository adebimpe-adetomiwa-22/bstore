// import ContactForm from './ContactForm';

import { NavLink } from 'react-router-dom';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LogoIcon from '../icons/LogoIcon';
import PhoneIcon2 from '../icons/PhoneIcon2';
import MailIcon from '../icons/MailIcon';

const Footer = () => {
    return (
        <footer
            className='footer bg-primary text-secondary mt-12 pt-10'
            id='footer'
        >
            {/* <ContactForm /> */}
            <div className='container md:flex md:justify-around md:items-center'>
                <div className='site-map'>
                    <h5 className='text-tertiary'>Sitemap</h5>
                    <ul className='mt-2 text-sm text-tertiary inline-block'>
                        <li className='site-map-style'>
                            <NavLink to='/'>
                                <p>Home</p>
                            </NavLink>
                        </li>
                        <li className='site-map-style'>
                            <NavLink to='/books'>
                                <p>Books</p>
                            </NavLink>
                        </li>
                        <li className='site-map-style'>
                            <NavLink to='/latest'>
                                <p>Latest</p>
                            </NavLink>
                        </li>
                        <li className='site-map-style'>
                            <NavLink to='/contact'>
                                <p>Contact</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='news-letter mt-7 md:mt-0'>
                    <button className='text-sm border border-main rounded-full px-3 py-1 text-main transition hover:bg-main hover:text-secondary'>
                        Join Our Newsletter
                    </button>
                </div>
                <div className='connect-with-us mt-7 text-tertiary md:mt-0'>
                    <h1>Connect With Us</h1>
                    <ul className='text-sm flex mt-2'>
                        <li className=''>
                            <a href='#' className='connect-link-style'>
                                <FacebookIcon width={20} height={20} />
                            </a>
                        </li>
                        <li className=''>
                            <a href='#' className='connect-link-style'>
                                <TwitterIcon width={20} height={20} />
                            </a>
                        </li>
                        <li className=''>
                            <a href='#' className='connect-link-style'>
                                <InstagramIcon width={20} height={20} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='brand mt-16 md:mt-0'>
                    <div className='logo'>
                        <LogoIcon width={45} />
                    </div>
                    <div className='email-and-phone text-sm mt-4 flex flex-col gap-2 text-tertiary'>
                        <div className='phone flex gap-3 items-center'>
                            <PhoneIcon2 width={17} />
                            <p>(+234) 8149778099</p>
                        </div>
                        <div className='email flex gap-3 items-center'>
                            <MailIcon width={17} />
                            <p>adebimpeadetomiwa3@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright bg-[#200c3f] text-tertiary h-10 flex justify-center items-center'>
                <small>&copy; 2024 B-Store</small>
            </div>
        </footer>
    );
};

export default Footer;
