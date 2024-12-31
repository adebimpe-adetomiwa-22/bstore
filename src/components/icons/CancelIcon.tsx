import { Svg } from './HamburgerIcon';

const CancelIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '14.083'}
            height={height || '14.083'}
            viewBox='0 0 14.083 14.083'
        >
            <path
                id='Union_1'
                data-name='Union 1'
                d='M14.052,15.622,8.906,10.476,3.759,15.622a1.11,1.11,0,0,1-1.57-1.57L7.336,8.906,2.19,3.759a1.11,1.11,0,0,1,1.57-1.57L8.906,7.336,14.052,2.19a1.11,1.11,0,0,1,1.57,1.57L10.476,8.906l5.146,5.146a1.111,1.111,0,0,1-1.57,1.57Z'
                transform='translate(-1.864 -1.864)'
                fill='#321d52'
            />
        </svg>
    );
};

export default CancelIcon;
