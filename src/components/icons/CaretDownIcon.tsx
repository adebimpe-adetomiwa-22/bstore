import { Svg } from './HamburgerIcon';
const CaretDownIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '76.918'}
            height={height || '46.151'}
            viewBox='0 0 76.918 46.151'
        >
            <path
                id='caret-down'
                d='M39.805,229.93a2.044,2.044,0,0,1-1.346.529,1.93,1.93,0,0,1-1.346-.529L8.221,202.648A1.717,1.717,0,0,1,9.4,199.692H67.5A1.713,1.713,0,0,1,69.2,201.4a1.746,1.746,0,0,1-.529,1.25Zm5.288,5.6,28.868-27.282a9.387,9.387,0,0,0-6.442-16.225L9.4,192a9.4,9.4,0,0,0-6.442,16.249l28.868,27.282a9.709,9.709,0,0,0,13.268,0Z'
                transform='translate(0 -192)'
                fill='currentColor'
            />
        </svg>
    );
};

export default CaretDownIcon;
