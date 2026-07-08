import { Navigate } from 'react-router-dom'
import { useAdminAuth } from '../services/AdminAuth'

export default function AdminRoute({ children }) {
  const { user } = useAdminAuth()

  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
