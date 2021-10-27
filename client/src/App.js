import { Route, Switch } from 'react-router-dom';
import Countries from './Components/Countries';
import Intro from './Components/Intro';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path='/countries'
          render={() => <Countries />}
        />
      </Switch>
      <Switch>
        <Route
          path='/'
          render={() => <Intro />}
        />
      </Switch>
    </div>

  );
}

export default App;
