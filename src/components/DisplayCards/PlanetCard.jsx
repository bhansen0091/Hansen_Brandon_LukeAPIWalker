


const PlanetCard = ({results}) => {
    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6 border">
                    <h1>{results.name}</h1>
                    <div className="row mb-3">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">Climate: {results.climate}</li>
                                <li className="list-group-item">Terrain: {results.terrain}</li>
                                <li className="list-group-item">Pop: {results.population}</li>
                                <li className="list-group-item">Gravity: {results.gravity}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard;