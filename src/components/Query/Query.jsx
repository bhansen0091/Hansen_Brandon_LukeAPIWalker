// import RoutingHub from '../RoutingHub/RoutingHub';
import PersonCard from '../DisplayCards/PersonCard';
import PlanetCard from '../DisplayCards/PlanetCard';
import FilmCard from '../DisplayCards/FilmCard';
import { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import Axios from 'axios';


const Query = (props) => {

    const [info, setInfo] = useState("");

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
            .then(res => setInfo(res.data))
            .catch(() => navigate("/error"));
    }, [props])

    return(
        <div>
            {
                props.category === "people" ? 
                    <PersonCard results = {info} /> :
                        props.category === "planets" ? 
                            <PlanetCard results = {info} /> :
                                props.category === "films" ? 
                                    <FilmCard results = {info} /> :
                                        null
            }
        </div>
    )
}

export default Query;