import { Routes, Route, Link } from 'react-router-dom';
import AvengersList from './Components/AvengersList';
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
                <Route path = "/avengers" element = {<AvengersList />} />
            </Routes>
      </header>
    </div>
  );
}

export default App;
