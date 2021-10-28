import { Route, Switch } from 'react-router-dom';
import Countries from './Components/Countries';
import Country from './Components/Country';
import Intro from './Components/Intro';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact path='/'
          render={() => <Intro />}
        />
      </Switch>

      <Switch>
        <Route
          path='/countries'
          render={() => <Countries />}
        />
      </Switch>

      <Switch>
        <Route
          exact path='/countries/:id'
          render={() => <Country />}
        />
      </Switch>

    </div>

  );
}

export default App;
