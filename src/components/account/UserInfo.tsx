import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
    _id: string;
    _v: number;
    name: string;
    email: string;
    password: string;
}

const UserInfo = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);

    const logout = (): void => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    useEffect(() => {
        const userString = localStorage.getItem('user');
        if (userString) {
            setUser(JSON.parse(userString));
        }
    }, []);

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);
    return (
        <div>
            <div className='container text-sm text-primary'>
                <div className=''>
                    <h3 className='title'>
                        <span className='opacity-70'>Welcome </span>
                        <span className='font-semibold text-lg'>
                            {user?.name}
                        </span>
                    </h3>
                </div>

                <div className='logout mt-10'>
                    <button
                        className='bg-red-500 text-secondary py-1 px-2 rounded-md transition-all hover:opacity-90'
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
