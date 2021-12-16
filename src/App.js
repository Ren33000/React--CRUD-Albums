import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReadAlbums from './component/ReadAlbums';
// import AddAlbums from './component/AddAlbums';
// import EditAlbums from './component/EditAlbums';
import React, {useState} from 'react';

function App() {

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums', {
      method: 'POST',
      body: JSON.stringify({
        name: 'foo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

  const [ albums, setAlbums ] = useState([])
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path ="/">
            <ReadAlbums albums={albums}/>
          </Route>
          {/* <Route path ="/add" component= {AddAlbums} />
          <Route path ="/edit/:id" component= {EditAlbums}  /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
