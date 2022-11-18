import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Archive from './components/Archive';
import Achievement from './components/Achievement';
import AboutMe from './components/AboutMe';

import HeaderTop from './components/HeaderTop';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import Article08 from './components/articles/Article08';

import './App.css';





function App() {
    return (
        <div className="App">
            <Router>
                <HeaderTop />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/achievement" element={<Achievement />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/article/8" element={<Article08 />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;