import React from 'react';

function Awards () {
    return (  
        <div className="  max-w-[1400px] p-24 mx-auto">
            <div className=" flex gap-50 justify-between ">
                <div className="flex-1">
                   <img src="images/largestBroker.svg" alt="largestBroker" className='w-[80%]'/>
                </div>
                <div className="flex-1 mt-3 ">
                 <h1 className='text-3xl font-semibold'>Largest stock broker in India</h1>
                 <p className='py-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily bt trading and investing in:</p>
                 <div className="grid items-center px-4 grid-cols-2">
                    <div className="">
                    <ul className='list-disc text-slate-800 '>
                    <li className='my-2'>
                        <p className='text-nowrap'>Future and Options</p>
                    </li>
                    <li className='my-2'>
                        <p className='text-nowrap'> Commodity derivatives</p>
                    </li>
                    <li className='my-2'>
                        <p className='text-nowrap'>Currency derivatives</p>
                    </li>
                 </ul>
                    </div>
                    <div className="col-6 mt-2">
                    <ul className='list-disc text-slate-800' >
                    <li className='my-2'>
                        <p>Stocks & IPOs</p>
                    </li>
                    <li className='my-2'>
                        <p className='text-nowrap'> Direct mutual funds</p>
                    </li>
                    <li className='my-2'>
                        <p className='text-nowrap'>Bonds and Govt. Securities </p>
                    </li>
                 </ul>
                    </div>
                 </div>
                 <img src="images\pressLogos.png" alt="" className='w-[100%] mt-2' />
               </div>
            </div>
        </div>
    );
}

export default Awards ;