import CancelIcon from '../icons/CancelIcon';
import WarningIconLight from '../icons/WarningIconLight';

const FetchWarning: React.FC<{
    disableWarning: () => void;
}> = ({ disableWarning }) => {
    return (
        <div className='bg-red-100 text-sm'>
            <div className='container flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className=''>
                        <WarningIconLight height={15} />
                    </div>
                    <p>Warning: not connected to the server!</p>
                </div>
                <button
                    className='w-7 h-7 flex rounded-full justify-center items-center transition-all hover:bg-gray-100/50'
                    onClick={disableWarning}
                >
                    <CancelIcon height={11} />
                </button>
            </div>
        </div>
    );
};

export default FetchWarning;
