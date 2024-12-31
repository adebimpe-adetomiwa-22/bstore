export interface Svg {
    width?: number;
    height?: number;
}
const HamburgerIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '21'}
            height={height || '15'}
            viewBox='0 0 21 15'
        >
            <g
                id='hambuger_menu'
                data-name='hambuger menu'
                transform='translate(-588 -28)'
            >
                <rect
                    id='Rectangle_42'
                    data-name='Rectangle 42'
                    width='21'
                    height='3'
                    rx='1.5'
                    transform='translate(588 40)'
                    fill='#9e95ab'
                />
                <rect
                    id='Rectangle_41'
                    data-name='Rectangle 41'
                    width='21'
                    height='3'
                    rx='1.5'
                    transform='translate(588 34)'
                    fill='#9e95ab'
                />
                <rect
                    id='Rectangle_40'
                    data-name='Rectangle 40'
                    width='21'
                    height='3'
                    rx='1.5'
                    transform='translate(588 28)'
                    fill='#9e95ab'
                />
            </g>
        </svg>
    );
};

export default HamburgerIcon;
