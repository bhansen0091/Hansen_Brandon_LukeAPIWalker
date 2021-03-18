import React from 'react';
import obi_wan from '../Imgs/obi-wan.jpg';


const ErrorDisplay = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="col-6">
                <img src={obi_wan} alt="Obi-Wan"/>
                <p>These are not the droids you are looking for.</p>
            </div>
        </div>
    )
}

export default ErrorDisplay;