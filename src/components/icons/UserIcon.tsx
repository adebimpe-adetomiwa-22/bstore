import { Svg } from './HamburgerIcon';

const UserIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '22.643'}
            height={height || '22.643'}
            viewBox='0 0 22.643 22.643'
        >
            <path
                id='user'
                d='M17.646,16.991a5.66,5.66,0,0,0-4.909-2.839H9.906A5.66,5.66,0,0,0,5,16.991a8.5,8.5,0,0,0,12.648,0ZM0,11.322A11.322,11.322,0,1,1,11.322,22.643,11.322,11.322,0,0,1,0,11.322Zm11.322.708A3.184,3.184,0,1,0,8.137,8.845,3.184,3.184,0,0,0,11.322,12.029Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default UserIcon;
