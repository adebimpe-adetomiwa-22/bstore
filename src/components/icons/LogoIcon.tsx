import { Svg } from './HamburgerIcon';

const LogoIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '46.942'}
            height={height || '30.997'}
            viewBox='0 0 46.942 30.997'
        >
            <g id='logo' transform='translate(58.4 -3.24)'>
                <path
                    id='Path_2'
                    data-name='Path 2'
                    d='M28.031,25.185v2.906H24.156V25.185ZM24.156,31h6.781V0H14.469V1.822l-.678-.182L10.468.751,7.665,0,6.914,2.809,6.248,5.3l-.375,1.4L5.5,8.113,2.179,20.5,1.8,21.9l-.375,1.4L.763,25.8,0,28.6l2.809.751,3.324.89,2.8.757.751-2.809.666-2.494.375-1.4.375-1.4L14.427,10.5l.042-.151V31h9.687ZM21.25,28.091H17.375V25.185H21.25ZM24.156,2.906h3.875V5.812H24.156Zm0,5.812h3.875V22.279H24.156ZM21.25,5.812H17.375V2.906H21.25ZM17.375,22.279V8.718H21.25V22.279ZM6.884,27.437l-3.324-.89.666-2.494,3.324.89Zm1.423-5.3-3.33-.89L8.294,8.857l3.33.89L8.306,22.134Zm4.068-15.2-3.324-.89L9.717,3.56l3.324.89-.666,2.494Z'
                    transform='translate(-58.4 3.24)'
                    fill='#979797'
                />
                <path
                    id='Subtraction_1'
                    data-name='Subtraction 1'
                    d='M11.243,29.441H8.152V24.56h2a5.551,5.551,0,0,0,3.6-1.066,3.579,3.579,0,0,0,1.3-2.912,3.336,3.336,0,0,0-1.282-2.768A5.7,5.7,0,0,0,10.2,16.808H8.152V11.886H9.48a4.871,4.871,0,0,0,3.229-1,3.4,3.4,0,0,0,1.18-2.738c0-2.15-1.628-3.24-4.84-3.24h-.9V.146H-.057V.032h10.7c3.267,0,5.813.607,7.568,1.8a5.829,5.829,0,0,1,2.645,5.086,6.046,6.046,0,0,1-1.61,4.163,8.487,8.487,0,0,1-4.111,2.481v.082a8.188,8.188,0,0,1,5.014,2.317,6.509,6.509,0,0,1,1.876,4.7,7.883,7.883,0,0,1-2.892,6.409A12.153,12.153,0,0,1,11.243,29.441Z'
                    transform='translate(-33.488 3.24)'
                    fill='#f15a24'
                />
            </g>
        </svg>
    );
};

export default LogoIcon;
