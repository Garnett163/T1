import { Route, Routes } from 'react-router-dom';
import PageNotFound from './not-found/PageNotFound';
import HomePage from './home/ui/HomePage';
import BlogPage from './blog/ui/BlogPage';
import ArticlePage from './article/ui/ArticlePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/article/:id" element={<ArticlePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
