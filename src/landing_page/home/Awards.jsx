import React from 'react';

function Awards () {
    return (  
        <div className="container mt-3">
            <div className="row">
                <div className="col-6 P-5 mt-5 mb-5">
                   <img src="media/images/largestBroker.svg" alt="largestBroker" style={{width :"70%"}}/>
                </div>
                <div className="col-6 p-5 ">
                 <h1 className='fs-3'>Largest stock broker in India</h1>
                 <p className='fs-8'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily bt trading and investing in:</p>
                 <div className="row">
                    <div className="col-6 mt-2">
                    <ul>
                    <li>
                        <p>Future and Options</p>
                    </li>
                    <li>
                        <p> Commodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>
                 </ul>
                    </div>
                    <div className="col-6 mt-2">
                    <ul>
                    <li>
                        <p>Stocks & IPOs</p>
                    </li>
                    <li>
                        <p> Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bonds and Govt. Securities </p>
                    </li>
                 </ul>
                    </div>
                 </div>
                 <img src="media\images\pressLogos.png" alt="" style={{width :"100%"}} />
               </div>
            </div>
        </div>
    );
}

export default Awards ;