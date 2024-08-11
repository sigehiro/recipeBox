import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipe from './AddRecipe';
import Top from './Top';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Top />
        <Routes>
          <Route path="/" element={<AddRecipe />} />
          {/* You can add more Route components here for other pages */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


