import { Svg } from './HamburgerIcon';

const SendIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '17.138'}
            height={height || '17.137'}
            viewBox='0 0 17.138 17.137'
        >
            <path
                id='Path_14'
                data-name='Path 14'
                d='M17.157,1.328A1.071,1.071,0,0,0,15.566.237l-15,8.57A1.06,1.06,0,0,0,.033,9.8a1.078,1.078,0,0,0,.656.924l4.7,1.955v3.113a1.441,1.441,0,0,0,2.564.9l1.768-2.209h0l3.823,1.593a1.072,1.072,0,0,0,1.473-.824L17.16,1.328ZM8.687,14.056,7.114,16.025a.372.372,0,0,1-.288.137.367.367,0,0,1-.368-.368V13.125l2.23.931ZM10.13,13.5,6.9,12.148,15.9,2.453,13.956,15.091,10.133,13.5Zm4.981-11.77-9.27,9.983L1.1,9.734Z'
                transform='translate(-0.031 -0.096)'
                fill='currentColor'
            />
        </svg>
    );
};

export default SendIcon;
