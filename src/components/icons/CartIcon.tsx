import { Svg } from './HamburgerIcon';

const CartIcon: React.FC<Svg & { text?: string }> = ({
    width,
    height,
    text,
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '29.647'}
            height={height || '27.588'}
            viewBox='0 0 29.647 25.13'
        >
            <g id='cart' transform='translate(0 0.378)'>
                <path
                    id='Path_11'
                    data-name='Path 11'
                    d='M.9,0H0V1.8H2.86L5.126,13.7l.139.733H19.242v-1.8H6.761l-.342-1.8H18.641l2.443-7.817.564-1.8H4.585l-.09-.47L4.356,0H.9ZM6.073,9.02,4.927,3.007H19.193L17.314,9.02Zm.541,10.222a1.8,1.8,0,1,0-1.8-1.8A1.8,1.8,0,0,0,6.614,19.242Zm12.628-1.8a1.8,1.8,0,1,0-1.8,1.8A1.8,1.8,0,0,0,19.242,17.438Z'
                    transform='translate(0 5.511)'
                    fill='currentColor'
                />
                <circle
                    id='Ellipse_1'
                    data-name='Ellipse 1'
                    cx='8.5'
                    cy='8.5'
                    r='8.5'
                    transform='translate(12.647 -0.378)'
                    fill='#f15a24'
                />
                <text
                    id='_7'
                    data-name='7'
                    transform='translate(19.647 11.622)'
                    fill='#fcf9ff'
                    fontSize='8'
                    fontFamily='SegoeUI, Segoe UI'
                >
                    <tspan x='0' y='0'>
                        {text || 7}
                    </tspan>
                </text>
            </g>
        </svg>
    );
};

export default CartIcon;
