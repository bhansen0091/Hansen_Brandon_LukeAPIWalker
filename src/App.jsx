import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import { Router, navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Query from './components/Query/Query';
import { useState } from 'react';
import './App.css';

function App() {

  const [options] = useState(["people", "planets", "films"]);

  const [id, setID] = useState("");

  const [query, setQuery] = useState("people");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${query}/${id}`);
    setID("");
  }

  return (
    <div className="App">
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="my-5 form-inline">

          <div className="form-group mr-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <label htmlFor="query" className="input-group-text">Category:</label>
              </div>
              <select
                className="custom-select"
                name="category"
                onChange={(e) => setQuery(e.target.value)}>
                {
                  options.map((opt, i) => 
                    <option
                      value={opt}
                      key={i}
                      >{opt}
                    </option>
                  )
                }
              </select>
            </div>
          </div>

          <div className="form-group mr-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <label htmlFor="id" className="input-group-text">ID:</label>
              </div>
              <input 
                type="text" 
                name="id"
                className="form-control"
                value={id}
                onChange={(e) => setID(e.target.value)}
              />
            </div>
          </div>
          <input type="submit" value="Search" className="btn btn-dark" />
        </form>
      </div>
      <Router>
        <Query path="/:category/:id" />
        <ErrorDisplay path="/error" />
      </Router>
    </div>
  );
}

export default App;
