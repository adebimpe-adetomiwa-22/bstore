import { useState } from 'react';
import EnvelopeIcon from '../components/icons/EnvelopeIcon';
import LockIcon from '../components/icons/LockIcon';
import EyeIcon from '../components/icons/EyeIcon';
import EyeSlashIcon from '../components/icons/EyeSlashIcon';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadIcon from '../components/icons/LoadIcon';

interface FormDataType {
    email: string;
    password: string;
}
const Login: React.FC = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<FormDataType>({
        email: '',
        password: '',
    });
    const [inputsFocused, setInputFocused] = useState<{
        email: boolean;
        password: boolean;
    }>({
        email: false,
        password: false,
    });

    const errors = {
        email: 'Email is required.',
        password: 'Password is required.',
    };

    const [empty, setEmpty] = useState<{
        email: boolean;
        password: boolean;
    }>({
        email: true,
        password: true,
    });

    const [inputsView, setInputsView] = useState<{
        password: boolean;
    }>({ password: false });

    const [error, setError] = useState<{ active: boolean; data: string[] }>({
        active: false,
        data: [],
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: { name: string; value: string } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        setEmpty((prevFirstInputs) => ({
            ...prevFirstInputs,
            [name]: value ? true : false,
        }));
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
        const { name } = event.target;
        setInputFocused((prev) => ({ ...prev, [name]: true }));
    };
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        const { name } = event.target;
        setInputFocused((prev) => ({ ...prev, [name]: false }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void =>
        event.preventDefault();

    const togglePassword = (name: 'password'): void => {
        setInputsView((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    // submit data
    const handleClick = (): void => {
        // check errors
        const inputErrors: string[] = [];
        const { email, password } = inputs;

        if (!email) inputErrors.push('email is required.');
        if (!password) inputErrors.push('Password is required.');
        // if (!confirmPassword) inputErrors.push('This field cannot be empty');

        if (inputErrors.length <= 0) {
            // console.log('no errors');
            setLoading(true);
            setError((prev) => ({ ...prev, active: false }));
            submitForm();
        } else {
            setError({ active: true, data: inputErrors });
        }
    };

    const submitForm = async (): Promise<void> => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/api/v1/users/login',
                inputs
            );

            const { data: responseData } = response;

            // stop loading
            setLoading(false);

            // add to local storage
            // const checkUser = localStorage.getItem('user');
            // if (checkUser) return;

            localStorage.setItem('user', JSON.stringify(responseData));
            navigate('/account');
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError({
                    active: true,
                    data: [error.response?.data || 'Server error'],
                });
            } else {
                setError({
                    active: true,
                    data: ['An unknown error occurred'],
                });
            }
            // Stop loading
            setLoading(false);
        }
    };

    // const submitForm = async (): Promise<void> => {
    //     try {
    //         const response = await fetch(
    //             'http://127.0.0.1:5000/api/v1/users/login',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(inputs),
    //             }
    //         );
    //         if (!response.ok) {
    //             throw new Error(response.statusText);
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //         setError({
    //             active: true,
    //             data: ['Email or password is not correct.'],
    //         });
    //     }
    // };

    return (
        <div>
            <div className='container mt-10 text-primary flex justify-center'>
                <div className='flex flex-col gap-9 items-center w-[350px] md:w-[400px]'>
                    <div className='form-title border-b border-primary border-opacity-20 pb-2 w-full text-center'>
                        <h3 className='text-lg font-semibold text-primary'>
                            View Your Books
                        </h3>
                    </div>
                    {error.active && (
                        <div className='error text-sm bg-red-100 w-full p-2 rounded-md'>
                            {error.data.map((err, index) => (
                                <p key={index}>{err}</p>
                            ))}
                        </div>
                    )}
                    <form
                        className='form text-sm flex flex-col gap-3 w-full'
                        onSubmit={handleSubmit}
                    >
                        <div className='form-group'>
                            <label
                                htmlFor='email'
                                className={
                                    '' +
                                    (inputsFocused.email
                                        ? 'form-label-active'
                                        : '')
                                }
                            >
                                Email
                            </label>
                            <div className='form-input-style'>
                                <div
                                    className={
                                        'form-input-icon ' +
                                        (inputsFocused.email
                                            ? 'input-icon-focus'
                                            : '')
                                    }
                                >
                                    <EnvelopeIcon width={15} height={15} />
                                </div>
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                    value={inputs.email}
                                    className={
                                        '' +
                                        (inputsFocused.email
                                            ? 'form-input-focus'
                                            : '')
                                    }
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {!empty.email && <small>{errors.email}</small>}
                        </div>
                        <div className='form-group'>
                            <label
                                htmlFor='password'
                                className={
                                    '' +
                                    (inputsFocused.password
                                        ? 'form-label-active'
                                        : '')
                                }
                            >
                                Password
                            </label>
                            <div className='form-input-style'>
                                <div
                                    className={
                                        'form-input-icon ' +
                                        (inputsFocused.password
                                            ? 'input-icon-focus'
                                            : '')
                                    }
                                >
                                    <LockIcon width={15} height={15} />
                                </div>
                                <input
                                    type={
                                        inputsView.password
                                            ? 'text'
                                            : 'password'
                                    }
                                    name='password'
                                    id='password'
                                    value={inputs.password}
                                    className={
                                        'password-field' +
                                        (inputsFocused.password
                                            ? ' form-input-focus'
                                            : '')
                                    }
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <div
                                    className={
                                        'input-view-style' +
                                        (inputsFocused.password
                                            ? ' active'
                                            : '')
                                    }
                                    onClick={() => togglePassword('password')}
                                >
                                    {inputsView.password ? (
                                        <EyeSlashIcon width={15} height={15} />
                                    ) : (
                                        <EyeIcon width={15} height={15} />
                                    )}
                                </div>
                            </div>
                            {!empty.password && (
                                <small>{errors.password}</small>
                            )}
                        </div>
                        <div className='form-group'>
                            <button
                                type='submit'
                                id='submit-form'
                                onClick={handleClick}
                                className={
                                    `submit-button` +
                                    (loading ? ' disabled' : '')
                                }
                                disabled={loading}
                            >
                                <span>
                                    {loading ? 'Loging In...' : 'Login'}
                                </span>
                                {loading && (
                                    <span className='submit-button-load-icon'>
                                        <LoadIcon width={15} height={15} />
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>
                    <div className='flex gap-2 text-sm text-primary'>
                        <p>New member? </p>{' '}
                        <Link
                            to={'/bstore/signup'}
                            className='text-main opacity-80 transition hover:opacity-100'
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
