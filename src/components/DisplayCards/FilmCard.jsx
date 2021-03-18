


const FilmCard = ({results}) => {
    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6 border">
                    <h1>{results.title}</h1>
                    <div className="row mb-3">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">Episode #: {results.episode_id}</li>
                                <li className="list-group-item">Release: {results.release_date}</li>
                                <li className="list-group-item">Director: {results.director}</li>
                                <li className="list-group-item">Producer(s): {results.producer}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmCard;