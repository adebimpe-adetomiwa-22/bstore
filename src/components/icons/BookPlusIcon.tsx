import { Svg } from './HamburgerIcon';

const BookPlusIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '537'}
            height={height || '596'}
            viewBox='0 0 537 596'
        >
            <path
                id='Union_2'
                data-name='Union 2'
                d='M64,596A63.992,63.992,0,0,1,0,532V148A63.989,63.989,0,0,1,64,84H321.749a115.435,115.435,0,0,0-1.125,32H128V468H400a16.018,16.018,0,0,0,16-16V216.587a115.436,115.436,0,0,0,32,.562V452a47.682,47.682,0,0,1-9.025,28.012,48.363,48.363,0,0,1-10.128,10.364A47.859,47.859,0,0,1,416,497.3V564h16a16,16,0,0,1,0,32ZM32,532a32.036,32.036,0,0,0,32,32H384V500H64A32.036,32.036,0,0,0,32,532Zm0-384V476.6a62.6,62.6,0,0,1,15.137-6.363A64.082,64.082,0,0,1,64,468H96V116H64A32.036,32.036,0,0,0,32,148ZM192,340a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-96a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm208.854-55.7A98.325,98.325,0,1,1,439,196,98.047,98.047,0,0,1,400.854,188.3ZM367,97.5A11.513,11.513,0,0,0,378.5,109H427v48.5a11.5,11.5,0,1,0,23,0V109h48.5a11.5,11.5,0,1,0,0-23H450V37.5a11.5,11.5,0,1,0-23,0V86H378.5A11.513,11.513,0,0,0,367,97.5Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default BookPlusIcon;