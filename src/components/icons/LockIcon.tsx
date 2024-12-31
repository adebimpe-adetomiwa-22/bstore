import { Svg } from './HamburgerIcon';
const LockIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '64.962'}
            height={height || '74.242'}
            viewBox='0 0 64.962 74.242'
        >
            <path
                id='lock'
                d='M18.561,18.561v9.28H46.4v-9.28a13.92,13.92,0,0,0-27.841,0Zm-4.64,9.28v-9.28a18.561,18.561,0,0,1,37.121,0v9.28h2.32a11.6,11.6,0,0,1,11.6,11.6v23.2a11.6,11.6,0,0,1-11.6,11.6H11.6A11.6,11.6,0,0,1,0,62.642v-23.2a11.6,11.6,0,0,1,11.6-11.6Zm-9.28,11.6v23.2A6.962,6.962,0,0,0,11.6,69.6H53.362a6.962,6.962,0,0,0,6.96-6.96v-23.2a6.962,6.962,0,0,0-6.96-6.96H11.6A6.962,6.962,0,0,0,4.64,39.441Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default LockIcon;
