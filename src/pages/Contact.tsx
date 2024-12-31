import ContactForm from '../components/footer/ContactForm';
import FacebookIcon from '../components/icons/FacebookIcon';
import InstagramIcon from '../components/icons/InstagramIcon';
import TwitterIcon from '../components/icons/TwitterIcon';

const Contact = () => {
    return (
        <section className='contact mt-10' id='contact'>
            <div className='container flex flex-col sm:gap-5 sm:flex-row'>
                <ContactForm />
                <div className='socials flex justify-center items-center mt-5 sm:flex-col'>
                    <a href='#' className='social'>
                        <FacebookIcon width={20} height={20} />
                    </a>
                    <a href='#' className='social'>
                        <TwitterIcon width={20} height={20} />
                    </a>
                    <a href='#' className='social'>
                        <InstagramIcon width={20} height={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
