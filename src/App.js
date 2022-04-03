import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Review from './component/Review/Review';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
