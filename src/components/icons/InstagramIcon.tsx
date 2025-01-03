import { Svg } from './HamburgerIcon';

const InstagramIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '46.449'}
            height={height || '46.438'}
            viewBox='0 0 46.449 46.438'
        >
            <path
                id='instagram'
                d='M23.155,43.138A11.906,11.906,0,1,0,35.061,55.044,11.887,11.887,0,0,0,23.155,43.138Zm0,19.647A7.741,7.741,0,1,1,30.9,55.044a7.755,7.755,0,0,1-7.741,7.741Zm15.17-20.134a2.777,2.777,0,1,1-2.777-2.777A2.771,2.771,0,0,1,38.325,42.651Zm7.886,2.819c-.176-3.72-1.026-7.015-3.751-9.73s-6.01-3.565-9.73-3.751c-3.834-.218-15.326-.218-19.16,0-3.71.176-7,1.026-9.73,3.741S.275,41.739.088,45.459c-.218,3.834-.218,15.326,0,19.16.176,3.72,1.026,7.015,3.751,9.73s6.01,3.565,9.73,3.751c3.834.218,15.326.218,19.16,0,3.72-.176,7.015-1.026,9.73-3.751s3.565-6.01,3.751-9.73c.218-3.834.218-15.315,0-19.149ZM41.257,68.733a7.837,7.837,0,0,1-4.414,4.414c-3.057,1.212-10.31.933-13.689.933s-10.642.269-13.689-.933a7.837,7.837,0,0,1-4.414-4.414c-1.212-3.057-.933-10.31-.933-13.689S3.85,44.4,5.052,41.356a7.837,7.837,0,0,1,4.414-4.414c3.057-1.212,10.31-.933,13.689-.933s10.642-.269,13.689.933a7.837,7.837,0,0,1,4.414,4.414c1.212,3.057.933,10.31.933,13.689S42.47,65.686,41.257,68.733Z'
                transform='translate(0.075 -31.825)'
                fill='currentColor'
            />
        </svg>
    );
};

export default InstagramIcon;
