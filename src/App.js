import Navbar from './components/Navbar';
import Background from './styled-components/Background';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <Router>
      <Background className='App'>
        <Navbar />
        <Route exact path='/'>
          <Mainpage />
        </Route>
      </Background>
    </Router>
  );
}

export default App;
