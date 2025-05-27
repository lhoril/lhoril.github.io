import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App