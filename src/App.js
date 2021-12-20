import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReadAlbums from './component/ReadAlbums';
import AddAlbums from './component/AddAlbums';
// import EditAlbums from './component/EditAlbums';
import React, {useState, useEffect} from 'react';

function App() {
  const [ albums, setAlbums ] = useState([])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setAlbums(data)
    });
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path ="/">
            <ReadAlbums albums={albums}/>
          </Route>
          <Route path ="/add">
            <AddAlbums setAlbums={setAlbums} albums={albums}/> 
          </Route>
          {/* <Route path ="/edit/:id" component= {EditAlbums}  /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;