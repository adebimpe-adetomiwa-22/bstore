import { Svg } from './HamburgerIcon';

const EyeSlashIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '96'}
            height={height || '76.796'}
            viewBox='0 0 96 76.796'
        >
            <path
                id='eye-slash'
                d='M3.867.529a2.422,2.422,0,0,0-3.375.4A2.408,2.408,0,0,0,.9,4.308L92.086,76.3a2.4,2.4,0,0,0,2.985-3.765ZM90.8,40.259a4.77,4.77,0,0,0,0-3.69A59.725,59.725,0,0,0,76.848,16.907C69.8,10.337,60.1,4.818,47.977,4.818a39.613,39.613,0,0,0-20.083,5.519l4.094,3.225A34.533,34.533,0,0,1,47.977,9.618c10.559,0,19.153,4.8,25.617,10.8a54.819,54.819,0,0,1,12.778,18,53.3,53.3,0,0,1-7.424,12.223l3.765,2.97A57.606,57.606,0,0,0,90.8,40.259ZM13.241,23.221A57.606,57.606,0,0,0,5.157,36.569a4.77,4.77,0,0,0,0,3.69A59.725,59.725,0,0,0,19.105,59.921C26.154,66.491,35.858,72.01,47.977,72.01a39.613,39.613,0,0,0,20.083-5.519l-4.094-3.225A34.533,34.533,0,0,1,47.977,67.21c-10.559,0-19.153-4.8-25.617-10.8a54.819,54.819,0,0,1-12.778-18A53.3,53.3,0,0,1,17.006,26.19ZM47.977,57.612a19.042,19.042,0,0,0,7.109-1.365l-4.634-3.66a15.029,15.029,0,0,1-2.475.21A14.392,14.392,0,0,1,33.609,39.284l-4.634-3.66a18.739,18.739,0,0,0-.195,2.775,19.2,19.2,0,0,0,19.2,19.2Zm19.2-19.2A19.2,19.2,0,0,0,40.868,20.581l4.634,3.66a15.029,15.029,0,0,1,2.475-.21A14.392,14.392,0,0,1,62.345,37.544l4.634,3.66a18.739,18.739,0,0,0,.195-2.775Z'
                transform='translate(0.02 -0.022)'
                fill='currentColor'
            />
        </svg>
    );
};

export default EyeSlashIcon;
