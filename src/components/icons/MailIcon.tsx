import { Svg } from './HamburgerIcon';

const MailIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '21.218'}
            height={height || '15.914'}
            viewBox='0 0 21.218 15.914'
        >
            <path
                id='Path_9'
                data-name='Path 9'
                d='M2.652,65.326a1.325,1.325,0,0,0-1.326,1.326v1.654l8.106,5.943a1.99,1.99,0,0,0,2.354,0l8.106-5.943V66.652a1.325,1.325,0,0,0-1.326-1.326ZM1.326,69.951v7.31a1.325,1.325,0,0,0,1.326,1.326H18.566a1.325,1.325,0,0,0,1.326-1.326v-7.31l-7.323,5.367a3.321,3.321,0,0,1-3.92,0ZM0,66.652A2.655,2.655,0,0,1,2.652,64H18.566a2.655,2.655,0,0,1,2.652,2.652V77.261a2.655,2.655,0,0,1-2.652,2.652H2.652A2.655,2.655,0,0,1,0,77.261Z'
                transform='translate(0 -64)'
                fill='currentColor'
            />
        </svg>
    );
};

export default MailIcon;
