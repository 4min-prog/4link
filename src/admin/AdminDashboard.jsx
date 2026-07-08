import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../services/AdminAuth'
import { loadCardData, saveCardData, resetCardData } from '../services/dataService'
import EditProfile from './components/EditProfile'
import EditContact from './components/EditContact'
import EditSocialLinks from './components/EditSocialLinks'
import EditActions from './components/EditActions'
import EditSEO from './components/EditSEO'

const TABS = [
  { id: 'profile', label: 'Profil' },
  { id: 'contact', label: 'Iletisim' },
  { id: 'social', label: 'Sosyal Linkler' },
  { id: 'actions', label: 'Butonlar' },
  { id: 'seo', label: 'SEO' },
]

export default function AdminDashboard() {
  const { user, logout } = useAdminAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile')
  const [data, setData] = useState(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setData(loadCardData())
  }, [])

  const handleSave = useCallback((updated) => {
    const merged = { ...data, ...updated }
    setData(merged)
    saveCardData(merged)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }, [data])

  const handleReset = () => {
    const defaults = resetCardData()
    setData(defaults)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  if (!data) return null

  return (
    <div className="min-h-screen bg-dark text-white">
      <header className="border-b border-white/[0.06] bg-card">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="text-lg font-bold text-primary">4Link</a>
            <span className="text-xs text-white/30">Admin Panel</span>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-xs text-green-400">Kaydedildi</span>
            )}
            <span className="text-xs text-white/40">{user?.username}</span>
            <button
              onClick={logout}
              className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              Cikis
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex gap-1 mb-8 border-b border-white/[0.06] overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-white border-b-2 border-primary'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="ml-auto">
            <button
              onClick={handleReset}
              className="px-3 py-2.5 text-xs text-red-400/60 hover:text-red-400 transition-colors cursor-pointer"
            >
              Sifirla
            </button>
          </div>
        </div>

        {activeTab === 'profile' && <EditProfile data={data} onSave={handleSave} />}
        {activeTab === 'contact' && <EditContact data={data} onSave={handleSave} />}
        {activeTab === 'social' && <EditSocialLinks data={data} onSave={handleSave} />}
        {activeTab === 'actions' && <EditActions data={data} onSave={handleSave} />}
        {activeTab === 'seo' && <EditSEO data={data} onSave={handleSave} />}
      </div>
    </div>
  )
}
