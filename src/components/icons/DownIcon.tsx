import { Svg } from './HamburgerIcon';
const DownIcon: React.FC<Svg & { color?: string }> = ({
    width,
    height,
    color,
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '7.895'}
            height={height || '3.251'}
            viewBox='0 0 7.895 3.251'
        >
            <path
                id='Path_4'
                data-name='Path 4'
                d='M52.212,179.234a.374.374,0,0,1-.429,0l-3.644-2.788a.2.2,0,0,1,0-.328.374.374,0,0,1,.429,0L52,178.741l3.43-2.624a.375.375,0,0,1,.429,0,.2.2,0,0,1,0,.328Z'
                transform='translate(-48.05 -176.05)'
                fill={color || '#9e95ab'}
            />
        </svg>
    );
};

export default DownIcon;
