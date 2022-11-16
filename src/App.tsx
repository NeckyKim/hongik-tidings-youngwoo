import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import HeaderTop from './components/HeaderTop';
import Footer from './components/Footer';

import Article08 from './components/articles/Article08';

import './App.css';



function App() {
    return (
        <div className="App">
            <Router>
                <HeaderTop />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/article/8" element={<Article08 />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;