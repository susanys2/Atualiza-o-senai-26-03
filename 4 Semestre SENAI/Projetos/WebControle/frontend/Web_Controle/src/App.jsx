import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Principal from './pages/Principal'

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 to-purple-600">
      <Router>
        <Routes>
          {/* Todas as rotas internas ficam dentro do layout principal */}
          <Route path="/*" element={<Principal />} />
        </Routes>
      </Router>
    </div>
  )
}