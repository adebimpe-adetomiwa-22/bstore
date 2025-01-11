import { Link } from 'react-router-dom';
import CancelIcon from '../icons/CancelIcon';
import LogoIcon from '../icons/LogoIcon';
import NavContents from './NavContents';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';

interface SidebarType {
    close: () => void;
}
const Sidebar: React.FC<SidebarType> = ({ close }) => {
    return (
        // <section className='w-full h-full md:hidden' id='sidebar'>
        <section className='w-full h-full' id='sidebar'>
            <div className='w-[200px] h-full bg-white overflow-y-scroll scrollbar-thumb-primary scrollbar-thin'>
                <div className='container'>
                    <div className='top-bar flex justify-between items-center'>
                        <Link to='/bstore'>
                            <LogoIcon width={35} height={35} />
                        </Link>
                        <button
                            className='w-[35px] h-[35px] flex justify-center items-center rounded-full transition hover:bg-[#edebf0]'
                            onClick={close}
                        >
                            <CancelIcon />
                        </button>
                    </div>
                    <div className='mt-12'>
                        <NavContents closeSidebar={close} screen='sm' />
                    </div>

                    <div className='social-icons flex mt-10'>
                        <a href='#' className='social-icon'>
                            <FacebookIcon width={23} height={23} />
                        </a>
                        <a href='#' className='social-icon'>
                            <TwitterIcon width={23} height={23} />
                        </a>
                        <a href='#' className='social-icon'>
                            <InstagramIcon width={23} height={23} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
