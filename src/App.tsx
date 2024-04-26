import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AllTodos from './pages/AllTodos';
import DeletedTodos from './pages/DeletedTodos';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/allTodos" replace />}
          />
          <Route path="/allTodos" element={<AllTodos />} />
          <Route path="/deletedTodos" element={<DeletedTodos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
