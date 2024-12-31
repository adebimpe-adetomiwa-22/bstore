import { Svg } from './HamburgerIcon';

const TrashIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '45.397'}
            height={height || '51.882'}
            viewBox='0 0 45.397 51.882'
        >
            <path
                id='trash'
                d='M13.7,1.794l-.73,1.449H3.243a3.243,3.243,0,0,0,0,6.485H42.154a3.243,3.243,0,0,0,0-6.485H32.426L31.7,1.794A3.23,3.23,0,0,0,28.8,0H16.6A3.23,3.23,0,0,0,13.7,1.794ZM42.154,12.971H3.243L5.391,47.322a4.867,4.867,0,0,0,4.854,4.56H35.152a4.867,4.867,0,0,0,4.854-4.56Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default TrashIcon;
