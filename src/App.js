import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App(){
  return( 
     <Router>
        <div className='max-w-screen-md mx-auto pt-20'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="about" element={<About/>}/>
            <Route exact path="article" element={<Article/>}/>
            <Route exact path="article_list" element={<ArticleList/>}/>
          </Routes>
        </div>
     </Router>
  );
}

export default App;
