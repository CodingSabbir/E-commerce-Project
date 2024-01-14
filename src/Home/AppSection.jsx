import React from 'react';
const title='Shop Anytime , Anywhere '
const desc='Take Shop on your any device with this app and connect to any of your websites'
const button='Sign up for Free'
const AppSection = () => {
    return (
        <div>
            <div className=" bg-gray-900">
    <div className="max-w-2xl mx-auto text-white pt-5 pb-1 md:py-10">
        <div className="text-center">
            <button className='border px-2 py-1 rounded-sm mb-4 hover:bg-blue-700'>{button}</button>
            <h3 className="text-3xl mb-3">{title} </h3>
            <p> {desc} </p>
            <div className="flex justify-center my-10">
                <button className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </button>
                <button className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                    </div>
                </button>
            </div>
        </div>
      
    </div>
</div>
        </div>
    );
};

export default AppSection;