import { Svg } from './HamburgerIcon';

const CaretUpIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '76.919'}
            height={height || '46.151'}
            viewBox='0 0 76.919 46.151'
        >
            <path
                id='caret-up'
                d='M37.113,136.221a2.044,2.044,0,0,1,1.346-.529,1.93,1.93,0,0,1,1.346.529L68.7,163.5a1.717,1.717,0,0,1-1.178,2.957H9.4a1.713,1.713,0,0,1-1.707-1.707,1.746,1.746,0,0,1,.529-1.25Zm-5.288-5.6L2.957,157.9A9.4,9.4,0,0,0,9.4,174.151H67.52a9.4,9.4,0,0,0,9.4-9.4,9.272,9.272,0,0,0-2.957-6.827L45.093,130.62a9.709,9.709,0,0,0-13.268,0Z'
                transform='translate(0 -128)'
                fill='currentColor'
            />
        </svg>
    );
};

export default CaretUpIcon;
