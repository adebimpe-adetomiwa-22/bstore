import { Svg } from './HamburgerIcon';

const EnvelopeIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '58.962'}
            height={height || '44.222'}
            viewBox='0 0 58.962 44.222'
        >
            <path
                id='envelope'
                d='M7.37,67.685A3.681,3.681,0,0,0,3.685,71.37v4.595L26.21,92.479a5.529,5.529,0,0,0,6.541,0L55.277,75.965V71.37a3.681,3.681,0,0,0-3.685-3.685ZM3.685,80.537v20.314a3.681,3.681,0,0,0,3.685,3.685H51.592a3.681,3.681,0,0,0,3.685-3.685V80.537L34.928,95.45a9.228,9.228,0,0,1-10.894,0ZM0,71.37A7.377,7.377,0,0,1,7.37,64H51.592a7.377,7.377,0,0,1,7.37,7.37v29.481a7.377,7.377,0,0,1-7.37,7.37H7.37A7.377,7.377,0,0,1,0,100.851Z'
                transform='translate(0 -64)'
                fill='currentColor'
            />
        </svg>
    );
};

export default EnvelopeIcon;
