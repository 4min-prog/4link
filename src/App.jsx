import { Routes, Route } from 'react-router-dom'
import DigitalCard from './components/digital-card/DigitalCard'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import AdminRoute from './admin/AdminRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-dark text-white flex items-center justify-center px-4 py-8">
          <DigitalCard />
        </div>
      } />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      } />
    </Routes>
  )
}
