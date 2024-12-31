import { Link } from 'react-router-dom';
import HeroImage from '../../assets/images/jessica-ruscello-OQSCtabGkSY-unsplash@2x.png';
const Hero = () => {
    return (
        <section className='hero h-72 pt-20 md:h-full' id='hero'>
            <div className='container flex flex-col items-center lg:flex-row lg:justify-around lg:items-start'>
                <div className='flex flex-col items-center lg:items-start lg:justify-start'>
                    <h1 className='text-[26px] text-center text-secondary'>
                        WELCOME TO{' '}
                        <span className='text-main font-semibold'>B-STORE</span>{' '}
                        LIBRARY
                    </h1>
                    <h2 className='text-[24px] text-tertiary'>
                        Knowledge Is Power
                    </h2>
                    <div className='mt-5'>
                        <Link to={'/bstore/signup'}>
                            <button className='btn-hover text-[14px] w-[102px] h-[27px] bg-main text-secondary'>
                                Start Reading
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:block mt-10 w-full lg:w-auto lg:mt-0'>
                    <img
                        src={HeroImage}
                        className='h-56 w-full object-cover object-center rounded-md'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
