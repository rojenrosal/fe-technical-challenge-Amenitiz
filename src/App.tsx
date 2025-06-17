import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { Profiles } from './pages/Profiles';

function App() {


  return (
   
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:username" element={<Profiles />} />
    </Routes>
    
  )
}

export default App
