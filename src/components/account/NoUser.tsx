import { Link } from 'react-router-dom';
import HouseIcon from '../icons/HouseIcon';

const NoUser = () => {
    return (
        <div>
            <div className='container text-sm'>
                {/* <h2 className='title text-semibold'>Welcome</h2> */}
                <div className='login-signup flex gap-2 mt-10'>
                    <Link to={'/bstore/signup'}>
                        <button className='account-button bg-main text-secondary hover:opacity-90 border border-main'>
                            Register
                        </button>
                    </Link>
                    <Link to={'/bstore/login'}>
                        <button className='account-button border border-main text-main hover:bg-tertiary/20'>
                            Login
                        </button>
                    </Link>
                </div>
                <div className='back-home mt-10'>
                    <Link to={'/bstore'}>
                        <button className='transition-all flex items-center gap-2 border border-primary py-1 px-2 rounded-md bg-primary text-secondary bg-opacity-85 hover:bg-opacity-100'>
                            <span className=''>
                                <HouseIcon width={20} height={20} />
                            </span>
                            <span>Home</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoUser;
