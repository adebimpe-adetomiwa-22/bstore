import { useState } from 'react';
import SendIcon from '../icons/SendIcon';

interface FormType {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    // const [name, setName] = useState<string>('');
    // const [email, setEmail] = useState<string>('');
    // const [message, setMessage] = useState<string>('');
    const [formData, setFormData] = useState<FormType>({
        name: '',
        email: '',
        message: '',
    });

    const handleFormEvent = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [targetName]: targetValue,
        }));
    };
    return (
        <div className='contact-form text-primary text-sm'>
            <div className='container'>
                <form
                    className='form flex flex-col w-full sm:w-[400px] gap-3'
                    onSubmit={handleFormEvent}
                >
                    <input
                        className='contact-form-input-style'
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        className='contact-form-input-style'
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <textarea
                        rows={7}
                        className='contact-form-input-style'
                        // placeholder='Good day, I have a proeject...'
                        placeholder='Message...'
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    <button className='bg-main text-secondary py-2 rounded-md flex justify-center items-center gap-2 transition hover:bg-opacity-85'>
                        <span>Send</span>
                        <div>
                            <SendIcon />
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
