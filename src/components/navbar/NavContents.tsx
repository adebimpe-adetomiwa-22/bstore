import { Link, NavLink } from 'react-router-dom';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import HouseIcon from '../icons/HouseIcon';
import BookIcon from '../icons/BookIcon';
import PhoneIcon from '../icons/PhoneIcon';
import { useState } from 'react';
import categories from './Categories';

interface NavContentsType {
    color?: string;
    direction?: string;
    space?: number;
    categoryPosition?: string;
    screen?: 'sm' | 'md';
    closeSidebar?: () => void;
}
const NavContents: React.FC<NavContentsType> = ({
    color,
    direction,
    space,
    categoryPosition,
    screen,
    closeSidebar,
}) => {
    const [openCategory, setOpenCategory] = useState<boolean>(false);
    // console.log(space);

    const toggleCategory = (): void => {
        setOpenCategory((prevOpenCategory) => !prevOpenCategory);
    };

    // const closeToggles = (): void => {
    //     toggleCategory();
    //     if (screen === 'sm') {
    //         if (closeSidebar) {
    //             closeSidebar();
    //         }
    //     }
    // };
    const closeCurrentSidebar = () => {
        if (screen === 'sm') {
            if (closeSidebar) {
                closeSidebar();
            }
        }
    };
    return (
        <ul
            className={`text-sm flex flex-${direction || 'col'} ${
                color ? `text-${color}` : 'text-green'
            } ${space ? `gap-7` : 'gap-3'}`}
        >
            <li className='text-inherit'>
                <NavLink
                    to={'/bstore'}
                    onClick={closeCurrentSidebar}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#3c1e69] md:text-secondary'
                            : 'text-[#9e95b1]'
                    }
                >
                    <div className='nav-style'>
                        <p>Home</p>
                        <div>
                            <HouseIcon width={15} height={15} />
                        </div>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/bstore/books'}
                    onClick={closeCurrentSidebar}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#3c1e69] md:text-secondary'
                            : 'text-[#9e95b1]'
                    }
                >
                    <div className='nav-style'>
                        <p>Books</p>
                        <div>
                            <BookIcon width={15} />
                        </div>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/bstore/latest'}
                    onClick={closeCurrentSidebar}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#3c1e69] md:text-secondary'
                            : 'text-[#9e95b1]'
                    }
                >
                    <div className='nav-style'>
                        <p>Latest</p>
                        <div>
                            <BookIcon width={15} />
                        </div>
                    </div>
                </NavLink>
            </li>
            <li>
                <div>
                    <div
                        className='flex items-center gap-1 cursor-pointer text-[#9e95b1] hover:text-primary md:hover:text-secondary relative'
                        onClick={toggleCategory}
                    >
                        <p>Category</p>
                        <div
                            className={
                                'mt-1 transition ' +
                                (openCategory ? '-rotate-180' : 'rotate-0')
                            }
                        >
                            <ChevronDownIcon />
                        </div>
                    </div>
                    <div
                        className={
                            `h-0 overflow-hidden transition-all mt-2 bg-secondary duration-300 ${categoryPosition} ` +
                            (openCategory
                                ? 'h-96 md:h-56 pl-7 md:pl-0 pt-3 md:p-0 md:py-2 '
                                : 'h-0 ') +
                            (categoryPosition
                                ? 'w-32 md:w-72 rounded-md mt-3'
                                : '')
                        }
                    >
                        <ul className='flex flex-col gap-1.5 overflow-y-scroll w-full h-full px-2 scrollbar-thin scrollbar-track-secondary scrollbar-thumb-primary'>
                            {categories.map((category, index) => (
                                <li key={index} className='category-list-style'>
                                    <Link
                                        to={`/bstore/category/${category}`}
                                        onClick={
                                            screen === 'md'
                                                ? toggleCategory
                                                : closeSidebar
                                        }
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <NavLink
                    to={'/bstore/contact'}
                    onClick={closeCurrentSidebar}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#3c1e69] md:text-secondary'
                            : 'text-[#9e95b1]'
                    }
                >
                    <div className='nav-style'>
                        <p>Contact</p>
                        <div>
                            <PhoneIcon width={15} />
                        </div>
                    </div>
                </NavLink>
            </li>
        </ul>
    );
};

export default NavContents;
