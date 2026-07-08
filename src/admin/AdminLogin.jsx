import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../services/AdminAuth'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAdminAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('Kullanici adi ve sifre gerekli.')
      return
    }

    if (login(username, password)) {
      navigate('/admin')
    } else {
      setError('Kullanici adi veya sifre hatali.')
    }
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-card border border-white/[0.06] rounded-3xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-1">Admin Panel</h1>
            <p className="text-sm text-white/40">4Link yonetim paneline hos geldiniz</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-white/50 mb-1.5">Kullanici Adi</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="admin"
              />
            </div>

            <div>
              <label className="block text-xs text-white/50 mb-1.5">Sifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Giris Yap
            </button>
          </form>

          <a
            href="/"
            className="block text-center text-xs text-white/30 hover:text-white/50 mt-6 transition-colors"
          >
            &larr; Ana Sayfaya Don
          </a>
        </div>
      </div>
    </div>
  )
}
