import { Svg } from './HamburgerIcon';

const SearchIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '13.064'}
            height={height || '13.061'}
            viewBox='0 0 13.064 13.061'
        >
            <path
                id='magnifying-glass'
                d='M9.389,5.307A4.082,4.082,0,1,0,5.307,9.389,4.082,4.082,0,0,0,9.389,5.307ZM8.6,9.468A5.306,5.306,0,1,1,9.468,8.6l3.416,3.416a.612.612,0,0,1-.865.865Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default SearchIcon;
