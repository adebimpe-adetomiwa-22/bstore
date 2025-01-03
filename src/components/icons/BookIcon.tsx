import { Svg } from './HamburgerIcon';

const BookIcon: React.FC<Svg> = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '15.539'}
            height={height || '17.759'}
            viewBox='0 0 15.539 17.759'
        >
            <path
                id='book'
                d='M0,3.052A3.052,3.052,0,0,1,3.052,0H13.6a1.944,1.944,0,0,1,1.942,1.942v9.989a1.945,1.945,0,0,1-1.11,1.755v2.407h.277a.832.832,0,0,1,0,1.665H2.775A2.774,2.774,0,0,1,0,14.984a2.437,2.437,0,0,1,.014-.277H0ZM2.775,13.874a1.11,1.11,0,0,0,0,2.22h9.989v-2.22Zm-1.11-1.433a2.753,2.753,0,0,1,1.11-.232H13.6a.278.278,0,0,0,.277-.277V1.942a.278.278,0,0,0-.277-.277H3.052A1.387,1.387,0,0,0,1.665,3.052ZM5.272,3.885h6.1a.832.832,0,1,1,0,1.665h-6.1a.832.832,0,0,1,0-1.665Zm0,2.775h6.1a.832.832,0,1,1,0,1.665h-6.1a.832.832,0,1,1,0-1.665Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default BookIcon;
