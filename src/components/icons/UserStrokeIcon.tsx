import { Svg } from './HamburgerIcon';

const UserStrokeIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '53.924'}
            height={height || '61.628'}
            viewBox='0 0 53.924 61.628'
        >
            <path
                id='user'
                d='M38.517,15.407A11.555,11.555,0,1,0,26.962,26.962,11.555,11.555,0,0,0,38.517,15.407Zm-26.962,0A15.407,15.407,0,1,1,26.962,30.814,15.407,15.407,0,0,1,11.555,15.407Zm-7.7,42.369H50.072a17.607,17.607,0,0,0-17.61-17.333h-11A17.623,17.623,0,0,0,3.852,57.776ZM0,58.053A21.457,21.457,0,0,1,21.461,36.591h11A21.457,21.457,0,0,1,53.924,58.053a3.575,3.575,0,0,1-3.575,3.575H3.575A3.575,3.575,0,0,1,0,58.053Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default UserStrokeIcon;
