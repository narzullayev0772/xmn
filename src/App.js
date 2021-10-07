import Home from "./pages/home/home";
import Upload from "./pages/upload/upload";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/upload">
          <Upload/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
