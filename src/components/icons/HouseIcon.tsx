import { Svg } from './HamburgerIcon';

const HouseIcon: React.FC<Svg & { color?: string }> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '31.6'}
            height={height || '28.086'}
            viewBox='0 0 31.6 28.086'
        >
            <path
                id='house'
                d='M14.99.313a1.32,1.32,0,0,1,1.706,0L31.178,12.6a1.316,1.316,0,1,1-1.7,2.008l-1.349-1.141V23.7a4.387,4.387,0,0,1-4.388,4.388H7.941A4.387,4.387,0,0,1,3.553,23.7V13.467L2.209,14.608A1.316,1.316,0,0,1,.508,12.6L14.99.313Zm.85,2.732-9.655,8.19V23.7a1.753,1.753,0,0,0,1.755,1.755h2.633V17.115a2.194,2.194,0,0,1,2.194-2.194h6.144a2.194,2.194,0,0,1,2.194,2.194v8.338H23.74A1.753,1.753,0,0,0,25.5,23.7V11.234ZM13.207,25.453h5.266v-7.9H13.207Z'
                transform='translate(-0.044)'
                fill={'currentColor'}
            />
        </svg>
    );
};

export default HouseIcon;
