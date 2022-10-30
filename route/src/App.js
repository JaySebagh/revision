import { Routes, Route, Link } from 'react-router-dom';

const Home = () => { return <h1>Home Component</h1> },
    About = () => { return <h1>About Component</h1> },
    Contact = () => { return <h1>Contact Component</h1> }

function App() {
  return (
    <div>
        <header>
            <Link to = '/'>Home </Link>
            <Link to = '/about'>About </Link>
            <Link to = '/contact'>Contact</Link>

            <Routes>
                <Route exact path = "/" element = {Home()} />
                <Route path = "/contact" element = {Contact()} />
                <Route path = "/about" element = {About()} />
            </Routes>
        </header>
    </div>
  );
}

export default App;
