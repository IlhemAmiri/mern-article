import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './pages/ArticleList';
import ArticleForm from './pages/ArticleForm';
import ArticleDetails from './pages/ArticleDetails';
import EditArticle from './pages/EditArticle';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/create" element={<ArticleForm />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/edit/:id" element={<EditArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
