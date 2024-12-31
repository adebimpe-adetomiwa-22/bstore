import { Svg } from './HamburgerIcon';

const ChevronDownIcon: React.FC<Svg & { color?: string }> = ({
    width,
    height,
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '9.449'}
            height={height || '5.252'}
            viewBox='0 0 9.449 5.252'
        >
            <path
                id='chevron-down'
                d='M44.438,173.048a.523.523,0,0,0,.742,0l4.2-4.2a.524.524,0,1,0-.742-.742l-3.828,3.828-3.83-3.83a.524.524,0,1,0-.742.742Z'
                transform='translate(-40.087 -167.95)'
                // fill={color || '#321d52'}
                fill='currentColor'
            />
        </svg>
    );
};

export default ChevronDownIcon;
