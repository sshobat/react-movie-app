import './App.css';
import {Switch, Router} from 'react-router-dom';
import {Header} from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
    // <>
    //   <Switch>
    //     <Route path="/"></Route>
    //     <Route path="/"></Route>
    //   </Switch>
    // </>
  );
}

export default App;
