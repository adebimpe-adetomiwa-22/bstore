import { Svg } from './HamburgerIcon';

const WarningIconLight: React.FC<Svg & { color?: string }> = ({
    width,
    height,
    color,
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '27.704'}
            height={height || '24.241'}
            viewBox='0 0 27.704 24.241'
        >
            <path
                id='triangle-exclamation'
                d='M1.867,53.016a1.016,1.016,0,0,0-.135.5.993.993,0,0,0,1,1h22.25a.993.993,0,0,0,1-1,1.031,1.031,0,0,0-.135-.5L14.961,34.37a1.283,1.283,0,0,0-2.218,0ZM.373,52.139,11.249,33.493a3.015,3.015,0,0,1,5.205,0L27.33,52.139a2.725,2.725,0,0,1-2.354,4.1H2.727a2.725,2.725,0,0,1-2.354-4.1ZM13.852,38.926a.868.868,0,0,1,.866.866v6.926a.866.866,0,0,1-1.731,0V39.792A.868.868,0,0,1,13.852,38.926Zm-1.3,12.12a1.3,1.3,0,1,1,1.3,1.3A1.3,1.3,0,0,1,12.553,51.046Z'
                transform='translate(0 -32)'
                fill={color || 'currentColor'}
            />
        </svg>
    );
};

export default WarningIconLight;
