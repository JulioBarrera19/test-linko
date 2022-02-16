import './App.scss';
import { Home, Detail } from './pages'
import { Header } from "./components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Detail />} />
        </Routes>
    </Router>
  );
}

export default App;
