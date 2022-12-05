import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Articles from './components/articles/Articles';
import Achievements from './components/achievements/Achievements';
import AboutMe from './components/aboutMe/AboutMe';

import HeaderTop from './components/header/HeaderTop';
import Footer from './components/footer/Footer';
import NotFound from './components/notFound/NotFound';

import Article03 from './components/articles/Article03/Article03';
import Article05 from './components/articles/Article05/Article05';
import Article06 from './components/articles/Article06/Article06';
import Article07 from './components/articles/Article07/Article07';
import Article08 from './components/articles/Article08/Article08';

import ScrollToTop from './ScrollToTop';

import './App.css';





function App() {
    return (
        <div className="App">
            <Router>
                <HeaderTop />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/aboutme" element={<AboutMe />} />

                    <Route path="/articles/3" element={<Article03 />} />
                    <Route path="/articles/5" element={<Article05 />} />
                    <Route path="/articles/6" element={<Article06 />} />
                    <Route path="/articles/7" element={<Article07 />} />
                    <Route path="/articles/8" element={<Article08 />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />

                <ScrollToTop />
            </Router>
        </div>
    );
}

export default App;