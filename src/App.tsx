import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { CrisisManagement } from './pages/CrisisManagement'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Team } from './pages/Team'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/services/crisis-management"
          element={<CrisisManagement />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
