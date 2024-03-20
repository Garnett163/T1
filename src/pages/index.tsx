import { Route, Routes } from 'react-router-dom';
import HomePage from './home/ui/HomePage';
import BlogPage from './blog/ui/BlogPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}

export default Router;
