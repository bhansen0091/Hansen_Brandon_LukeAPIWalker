import { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import Axios from 'axios';

const PersonCard = ({results}) => {

    const [homeWorld, setHomeWorld] = useState("");
    const [isLinkLoaded, setIsLinkLoaded] = useState(false);

    useEffect(() => {
        if (results.homeworld !== undefined) {
            Axios.get(`${results.homeworld}`)
                .then(res => setHomeWorld(res.data))
                .then(() => setIsLinkLoaded(true))
                .catch(() => navigate("/error"));
        }
    }, [results])

    const getID = (url) => {
        if (typeof url !== "string") return "";
        
        let idRaw = "";
        for (var i = url.length-1; i > 0; i--) {
            if (url[i] !== "/") {
                if (!isNaN(url[i])) {
                    idRaw = url[i] + idRaw;
                }
            }
        }
        
        return "/planets/" + idRaw
    }

    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6 border">
                    <h1>{results.name}</h1>
                    <div className="row mb-3">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">Height: {results.height}cm</li>
                                <li className="list-group-item">Hair Color: {results.hair_color}</li>
                                <li className="list-group-item">Eyes: {results.eye_color}</li>
                                <li className="list-group-item">Birth: {results.birth_year}</li>
                                <li className="list-group-item">Home World: 
                                    <Link to={getID(results.homeworld)}>
                                        {homeWorld.name} 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonCard;