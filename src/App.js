import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReadAlbums from './component/ReadAlbums';
import AddAlbums from './component/AddAlbums';
import EditAlbums from './component/EditAlbums';


function App() {
  return (
    <div className="App">
        <Router> 
          <Switch>
            <Route exact path ="/" component= {ReadAlbums} />
            <Route path ="/add" component= {AddAlbums} />
            <Route path ="/edit/:id" component= {EditAlbums}  />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
