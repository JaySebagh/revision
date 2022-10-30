import { Routes, Route, Link } from 'react-router-dom';
import AvengersList from './Components/AvengersList';
import Avenger from './Components/Avenger';
import Home from './Components/Home';

function App() {
  return (
    <div>
        <header>
            <nav className="navbar">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/avengers">Avengers</Link></li>
            </nav>
            <Routes>
                <Route exact path = "/" element = {<Home />} />
                <Route path = "/avengers/:hero">
                    <Avenger key = {hero.id} hero = {hero} />
                </Route>
                <Route path = "/avengers">
                    <AvengersList hero = {hero}/>
                </Route>
            </Routes>
        </header>
    </div>
  );
}

export default App;
