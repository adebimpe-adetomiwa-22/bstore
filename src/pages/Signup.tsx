import { useEffect, useState } from 'react';
import UserStrokeIcon from '../components/icons/UserStrokeIcon';
import EnvelopeIcon from '../components/icons/EnvelopeIcon';
import LockIcon from '../components/icons/LockIcon';
import EyeIcon from '../components/icons/EyeIcon';
import EyeSlashIcon from '../components/icons/EyeSlashIcon';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadIcon from '../components/icons/LoadIcon';
import url from '../globals/url';

interface FormDataType {
    name: string;
    email: string;
    password: string;
    'confirm-password': string;
}
const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<FormDataType>({
        name: '',
        email: '',
        password: '',
        'confirm-password': '',
    });
    const [inputsFocused, setInputFocused] = useState<{
        name: boolean;
        email: boolean;
        password: boolean;
        'confirm-password': boolean;
    }>({
        name: false,
        email: false,
        password: false,
        'confirm-password': false,
    });

    const errors = {
        name: 'Name is required.',
        email: 'Email is required.',
        password: 'Password is required.',
        'confirm-password': 'Passwords does not match',
    };

    const [empty, setEmpty] = useState<{
        name: boolean;
        email: boolean;
        password: boolean;
        'confirm-password': boolean;
    }>({
        name: true,
        email: true,
        password: true,
        'confirm-password': true,
    });

    const validation: {
        email: string;
        password: string;
        'confirm-password': string;
    } = {
        email: 'Invalid email address.',
        password: 'password must be 8 or more characters.',
        'confirm-password': 'Passwords does not match',
    };

    const [isValidated, setIsValideted] = useState<{
        email: boolean;
        password: boolean;
        'confirm-password': boolean;
    }>({ email: true, password: true, 'confirm-password': true });

    const validationRegex: {
        email: RegExp;
        password: RegExp;
    } = {
        email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
        password: /.{8}/,
    };

    const [inputsView, setInputsView] = useState<{
        password: boolean;
        'confirm-password': boolean;
    }>({ password: false, 'confirm-password': false });

    const [error, setError] = useState<{ active: boolean; data: string[] }>({
        active: false,
        data: [],
    });
    const [passValidated, setPassValidated] = useState<boolean>(true);
    const [confirmPassStart, setConfirmPassStart] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: { name: string; value: string } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        setEmpty((prevFirstInputs) => ({
            ...prevFirstInputs,
            [name]: value ? true : false,
        }));

        if (name in validationRegex) {
            const regex = validationRegex[name as 'email' | 'password'];
            const result = regex.test(value);
            setIsValideted((prev) => ({ ...prev, [name]: result }));
        }

        if (name === 'confirm-password') {
            setConfirmPassStart(true);
        }
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

    const togglePassword = (name: 'password' | 'confirm-password'): void => {
        setInputsView((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    // submit data
    const handleClick = (): void => {
        // check errors
        const nmRegex = {
            email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
            password: /.{8}/,
        };
        const inputErrors: string[] = [];
        const {
            name,
            email,
            password,
            'confirm-password': confirmPassword,
        } = inputs;

        if (!name) inputErrors.push('Name is required');
        if (!email) inputErrors.push('email is required');
        if (!password) inputErrors.push('Password is required');
        // if (!confirmPassword) inputErrors.push('This field cannot be empty');

        if (email)
            if (!nmRegex.email.test(email))
                inputErrors.push('Invalid email address.');
        if (password) {
            if (!nmRegex.password.test(password))
                inputErrors.push('Password must be 8 or more characters.');
            if (confirmPassword !== password)
                inputErrors.push('Passwords does not match.');
        }

        if (inputErrors.length <= 0) {
            setLoading(true);
            setError((prev) => ({ ...prev, active: false }));
            submitForm();
        } else {
            setError({ active: true, data: inputErrors });
        }
    };

    const submitForm = async (): Promise<void> => {
        try {
            const response = await axios.post(`${url}/users/signup`, inputs);

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
    //     // console.log(inputs);
    //     try {
    //         const response = await fetch(
    //             'http://127.0.0.1:5000/api/v1/users/signup',
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
    //             data: ['Email has already been used by another user'],
    //         });
    //     }
    // };

    useEffect(() => {
        if (!confirmPassStart) return;
        const { password, 'confirm-password': confirmPassword } = inputs;
        if (password !== confirmPassword) {
            setPassValidated(false);
        } else {
            setPassValidated(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputs.password, inputs['confirm-password']]);

    return (
        <div>
            <div className='container mt-10 text-primary flex justify-center'>
                <div className='flex flex-col gap-9 items-center w-[350px] md:w-[400px]'>
                    <div className='form-title border-b border-primary border-opacity-20 pb-2 w-full text-center'>
                        <h3 className='text-lg font-semibold text-primary'>
                            Get More Books
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
                                htmlFor='name'
                                className={
                                    '' +
                                    (inputsFocused.name
                                        ? 'form-label-active'
                                        : '')
                                }
                            >
                                Name
                            </label>
                            <div className='form-input-style'>
                                <div
                                    className={
                                        'form-input-icon ' +
                                        (inputsFocused.name
                                            ? 'input-icon-focus'
                                            : '')
                                    }
                                >
                                    <UserStrokeIcon width={15} height={15} />
                                </div>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={inputs.name}
                                    className={
                                        '' +
                                        (inputsFocused.name
                                            ? 'form-input-focus'
                                            : '')
                                    }
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {!empty.name && <small>{errors.name}</small>}
                        </div>
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
                            {empty.email && !isValidated.email && (
                                <small>{validation.email}</small>
                            )}
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
                            {empty.password && !isValidated.password && (
                                <small>{validation.password}</small>
                            )}
                        </div>
                        <div className='form-group'>
                            <label
                                htmlFor='confirm-password'
                                className={
                                    '' +
                                    (inputsFocused['confirm-password']
                                        ? 'form-label-active'
                                        : '')
                                }
                            >
                                Confirm Password
                            </label>
                            <div className='form-input-style'>
                                <div
                                    className={
                                        'form-input-icon ' +
                                        (inputsFocused['confirm-password']
                                            ? 'input-icon-focus'
                                            : '')
                                    }
                                >
                                    <LockIcon width={15} height={15} />
                                </div>
                                <input
                                    type={
                                        inputsView['confirm-password']
                                            ? 'text'
                                            : 'password'
                                    }
                                    name='confirm-password'
                                    id='confirm-password'
                                    value={inputs['confirm-password']}
                                    className={
                                        'password-field' +
                                        (inputsFocused['confirm-password']
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
                                        (inputsFocused['confirm-password']
                                            ? ' active'
                                            : '')
                                    }
                                    onClick={() =>
                                        togglePassword('confirm-password')
                                    }
                                >
                                    {inputsView['confirm-password'] ? (
                                        <EyeSlashIcon width={15} height={15} />
                                    ) : (
                                        <EyeIcon width={15} height={15} />
                                    )}
                                </div>
                            </div>
                            {!passValidated && (
                                <small>Passwords does not match.</small>
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
                                    {loading ? 'Signing up...' : 'Signup'}
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
                        <p>Already a member? </p>{' '}
                        <Link
                            to={'/bstore/login'}
                            className='text-main opacity-80 transition hover:opacity-100'
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
