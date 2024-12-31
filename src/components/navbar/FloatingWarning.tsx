import { useState } from 'react';
import WarningIconLight from '../icons/WarningIconLight';
import CancelIcon from '../icons/CancelIcon';

const FloatingWarning: React.FC = () => {
    const [showWarning, setShowWarning] = useState<boolean>(false);
    // const [customWidth, setCustomWidth] = useState<string>('0px');
    const checkWarning = (): void => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
        // console.log(showWarning);
    };
    return (
        <div className='fixed bottom-3 right-3 text-sm z-10'>
            <div className='container'>
                <div
                    className={
                        `h-10 flex items-center rounded-md p-2 overflow-hidden transition-all absolute bottom-3 right-12 bg-red-300 ` +
                        (showWarning ? 'w-64' : 'w-0 opacity-0')
                    }
                >
                    <p>Warning: not connected to the server!</p>
                </div>
                <button
                    className='w-10 h-10 bg-red-300 flex justify-center items-center rounded-full absolute bottom-3 right-1'
                    onClick={checkWarning}
                >
                    {/* <WarningIconLight height={17} /> */}
                    {showWarning ? (
                        <CancelIcon height={17} />
                    ) : (
                        <WarningIconLight height={17} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default FloatingWarning;
