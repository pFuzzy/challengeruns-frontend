import Navbar from './components/Navbar';
import Background from './styled-components/Background';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Games from './components/Games';

function App() {
  return (
    <Router>
      <Background className='App'>
        <Navbar />
        <Route exact path='/'>
          <Mainpage />
        </Route>
        <Route exact path='/games'>
          <Games />
        </Route>
        <Route exact path='/leaderboards'></Route>
        <Route exact path='/categories'></Route>
        <Route exact path='/news'></Route>
        <Route exact path='/forum'></Route>
        <Route exact path='/register'></Route>
        <Route exact path='/login'></Route>
      </Background>
    </Router>
  );
}

export default App;
