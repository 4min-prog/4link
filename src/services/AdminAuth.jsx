import { createContext, useContext, useState, useCallback } from 'react'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem('4link_admin')
    return stored ? JSON.parse(stored) : null
  })

  const login = useCallback((username, password) => {
    const envUser = import.meta.env.VITE_ADMIN_USERNAME || 'admin'
    const envPass = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

    if (username === envUser && password === envPass) {
      const userData = { username }
      sessionStorage.setItem('4link_admin', JSON.stringify(userData))
      setUser(userData)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem('4link_admin')
    setUser(null)
  }, [])

  return (
    <AdminAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider')
  return ctx
}
