import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Archive from './components/archive/Archive';
import Achievements from './components/achievements/Achievements';
import AboutMe from './components/aboutMe/AboutMe';

import HeaderTop from './components/header/HeaderTop';
import Footer from './components/footer/Footer';
import NotFound from './components/notFound/NotFound';

import Article03 from './components/articles/Article03/Article03';
import Article07 from './components/articles/Article07/Article07';
import Article08 from './components/articles/Article08/Article08';

import './App.css';





function App() {
    return (
        <div className="App">
            <Router>
                <HeaderTop />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/achievements" element={<Achievements />} />
                    {/* <Route path="/aboutme" element={<AboutMe />} /> */}
                    <Route path="/article/3" element={<Article03 />} />
                    <Route path="/article/7" element={<Article07 />} />
                    <Route path="/article/8" element={<Article08 />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;