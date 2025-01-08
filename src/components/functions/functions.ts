export const formatString = (
    string: string,
    format: 'parse' | 'revert' = 'parse'
): string => {
    switch (format) {
        case 'parse': {
            const regex = /-/gi;
            if (regex.test(string)) {
                string = string.replace(regex, ':::');
            }
            return string.split(' ').join('-');
        }
        case 'revert': {
            string = string.split('-').join(' ');
            const regex = /:::/gi;
            if (regex.test(string)) {
                string = string.replace(regex, '-');
            }
            return string;
        }
        default:
            return string;
    }
};
