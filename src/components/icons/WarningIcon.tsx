import { Svg } from './HamburgerIcon';

const WarningIcon: React.FC<Svg & { color?: string }> = ({
    width,
    height,
    color,
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '46.6'}
            height={height || '40.775'}
            viewBox='0 0 46.6 40.775'
        >
            <path
                id='triangle-exclamation'
                d='M22.608,36.76a.807.807,0,0,1,1.383,0L42.04,66.4a1.319,1.319,0,0,1-1.129,2H5.688a1.321,1.321,0,0,1-1.32-1.32A1.266,1.266,0,0,1,4.56,66.4Zm-3.732-2.275L.828,64.128a5.69,5.69,0,0,0,4.86,8.646H40.911a5.69,5.69,0,0,0,4.86-8.646L27.723,34.485a5.18,5.18,0,0,0-8.847,0Zm7.336,28.1A2.912,2.912,0,1,0,23.3,65.493,2.912,2.912,0,0,0,26.212,62.581Zm-.728-16.747a2.184,2.184,0,1,0-4.369,0v8.737a2.184,2.184,0,1,0,4.369,0Z'
                transform='translate(0 -32)'
                fill={color || 'currentColor'}
            />
        </svg>
    );
};

export default WarningIcon;
