import { Svg } from './HamburgerIcon';

const FacebookIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '32.813'}
            height={height || '32.691'}
            viewBox='0 0 32.813 32.691'
        >
            <path
                id='facebook'
                d='M32.813,16.407A16.407,16.407,0,1,0,12.446,32.332V21.418H9.062V16.407h3.384v-2.16c0-5.582,2.525-8.171,8.011-8.171a18.058,18.058,0,0,1,3.57.41v4.537c-.385-.038-1.057-.064-1.9-.064-2.692,0-3.73,1.019-3.73,3.666v1.782h5.358l-.923,5.012H18.393V32.691a16.4,16.4,0,0,0,14.42-16.285Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default FacebookIcon;
