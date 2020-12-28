import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import GameList from './components/GameList';
import Categories from './components/Categories';
import Leaderboards from './components/Leaderboards';
import Game from './components/Game';
import Run from './components/Run';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/'>
        <Mainpage />
      </Route>
      <Route exact path='/games'>
        <GameList />
      </Route>
      <Route exact path='/leaderboards'>
        <Leaderboards />
      </Route>
      <Route exact path='/categories'>
        <Categories />
      </Route>
      <Route exact path='/news'></Route>
      <Route exact path='/forum'></Route>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route exact path='/login'></Route>
      <Route exact path='/games/:gameId' component={Game} />
      <Route exact path='/games/:gameId/:runId' component={Run} />
    </Router>
  );
}

export default App;
