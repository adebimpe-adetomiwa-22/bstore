import { Svg } from './HamburgerIcon';

const AngleDownIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '82.797'}
            height={height || '45.151'}
            viewBox='0 0 82.797 45.151'
        >
            <path
                id='angle-down'
                d='M86.79,188.107a3.778,3.778,0,0,0,5.317,0l37.646-37.646a3.76,3.76,0,0,0-5.317-5.317L89.448,180.131,54.462,145.144a3.76,3.76,0,0,0-5.317,5.317L86.79,188.107Z'
                transform='translate(-48.05 -144.05)'
                fill='currentColor'
            />
        </svg>
    );
};

export default AngleDownIcon;
