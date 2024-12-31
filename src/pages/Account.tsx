import { useEffect, useState } from 'react';
import NoUser from '../components/account/NoUser';
import UserInfo from '../components/account/UserInfo';

const Account = () => {
    const [userAvailable, setUserAvailable] = useState<boolean | null>(null);

    useEffect(() => {
        const userString = localStorage.getItem('user');
        if (userString) {
            setUserAvailable(true);
        } else {
            setUserAvailable(false);
        }

        console.log(userString);
    }, []);

    return userAvailable ? <UserInfo /> : <NoUser />;
};

export default Account;
