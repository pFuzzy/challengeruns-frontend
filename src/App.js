import Navbar from './components/Navbar';
import Background from './styled-components/Background';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Gamelist from './components/Gamelist';
import Categories from './components/Categories';
import Leaderboards from './components/Leaderboards';

function App() {
  return (
    <Router>
      <Background className='App'>
        <Navbar />
        <Route exact path='/'>
          <Mainpage />
        </Route>
        <Route exact path='/games'>
          <Gamelist />
        </Route>
        <Route exact path='/leaderboards'>
          <Leaderboards />
        </Route>
        <Route exact path='/categories'>
          <Categories />
        </Route>
        <Route exact path='/news'></Route>
        <Route exact path='/forum'></Route>
        <Route exact path='/register'></Route>
        <Route exact path='/login'></Route>
      </Background>
    </Router>
  );
}

export default App;
