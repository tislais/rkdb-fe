import Header from './components/Header';
import Side from './components/Side';
import Main from './components/Main';
import MyMachines from './components/MyMachines';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className={div}>
        <Side />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/machines" component={MyMachines} />
        </Switch>
        
        </div>
    </ Router>
  );
}

const div = `
  h-full 
  w-full
  grid 
  grid-cols-12 
  xl:max-w-screen-xl
  mx-auto
`;

export default App;
