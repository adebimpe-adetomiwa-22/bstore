import { NavLink, Outlet } from 'react-router-dom';
import HamburgerIcon from '../icons/HamburgerIcon';
import LogoIcon from '../icons/LogoIcon';
import UserIcon from '../icons/UserIcon';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import NavContents from './NavContents';
import Footer from '../footer/Footer';
// import FetchWarning from './FetchWarning';
// import FloatingWarning from './FloatingWarning';
import SearchIcon from '../icons/SearchIcon';
import CartIcon2 from '../icons/CartIcon2';

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    // const [enableWarning, setEnableWarning] = useState<boolean>(true);
    const [cartCount, setCartCount] = useState<number>(0);

    const toggleSidebar = (): void => {
        setOpenSidebar((prevOpenSidebar) => !prevOpenSidebar);
    };

    // const disableWarning = (): void => {
    //     if (enableWarning) {
    //         setEnableWarning(false);
    //     }
    // };

    useEffect(() => {
        const count = localStorage.getItem('books');
        if (!count) return;
        const jsonCount = JSON.parse(count).length;
        setCartCount(jsonCount);
    }, []);
    return (
        <>
            {/* {enableWarning && <FetchWarning disableWarning={disableWarning} />} */}
            {/* <FloatingWarning /> */}
            <div
                className={
                    'sidebar transition w-screen h-screen fixed left-0 top-0 z-10 md:hidden ' +
                    (openSidebar ? 'translate-x-0' : '-translate-x-full')
                }
            >
                <Sidebar close={toggleSidebar} />
            </div>

            <nav className='nav bg-primary' id='nav'>
                <div className='container flex justify-between items-center'>
                    <div
                        className='hamburger icon-hover cursor-pointer md:hidden'
                        onClick={toggleSidebar}
                    >
                        <HamburgerIcon />
                    </div>

                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-secondary'
                                : 'text-[rgb(158,149,171)]'
                        }
                    >
                        <div className='logo cursor-pointer'>
                            <LogoIcon />
                        </div>
                    </NavLink>
                    <div className='hidden md:block'>
                        <NavContents
                            direction='row'
                            space={7}
                            categoryPosition='absolute'
                            screen='md'
                        />
                    </div>
                    <div className='flex items-center'>
                        <NavLink
                            to='/bstore/search'
                            className={({ isActive }) =>
                                isActive ? 'text-secondary' : 'text-[#9e95ab]'
                            }
                        >
                            <div className='user icon-hover cursor-pointer'>
                                <SearchIcon width={20} height={20} />
                            </div>
                        </NavLink>
                        <NavLink
                            to='/bstore/account'
                            className={({ isActive }) =>
                                isActive ? 'text-secondary' : 'text-[#9e95ab]'
                            }
                        >
                            <div className='user icon-hover cursor-pointer'>
                                <UserIcon />
                            </div>
                        </NavLink>
                        <NavLink
                            to='/bstore/cart'
                            className={({ isActive }) =>
                                isActive ? 'text-secondary' : 'text-[#9e95ab]'
                            }
                        >
                            <div className='cart icon-hover cursor-pointer'>
                                <div className='relative'>
                                    <CartIcon2 width={21} />
                                    <div className='w-5 h-5 rounded-full bg-main absolute flex justify-center items-center top-1 -right-2'>
                                        <p className='text-[0.7rem] text-secondary'>
                                            {cartCount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
            <Footer />
        </>
    );
};

export default Navbar;
