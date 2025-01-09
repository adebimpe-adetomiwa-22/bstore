const CartAlert = () => {
    return (
        <div className='w-screen bg-secondary h-12 fixed left-0 top-0 z-10'>
            <div className='container w-full'>
                <div className='text-sm w-full'>
                    <span className=''>{'Book'}</span> added to cart
                </div>
            </div>
        </div>
    );
};

export default CartAlert;
