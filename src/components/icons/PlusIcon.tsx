import { Svg } from './HamburgerIcon';

const PlusIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '141.054'}
            height={height || '141.054'}
            viewBox='0 0 141.054 141.054'
        >
            <path
                id='plus'
                d='M94.665,56.138a8.138,8.138,0,1,0-16.276,0v54.252H24.138a8.138,8.138,0,0,0,0,16.276H78.389v54.252a8.138,8.138,0,1,0,16.276,0V126.665h54.252a8.138,8.138,0,1,0,0-16.276H94.665Z'
                transform='translate(-16 -48)'
                fill='currentColor'
            />
        </svg>
    );
};

export default PlusIcon;
