import { useState } from 'react'

export default function EditSEO({ data, onSave }) {
  const [form, setForm] = useState({
    profileUrl: data.profileUrl || '',
    ogTitle: data.ogTitle || '',
    ogDescription: data.ogDescription || '',
    ogImage: data.ogImage || data.coverImage || '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      profileUrl: form.profileUrl,
      ogTitle: form.ogTitle,
      ogDescription: form.ogDescription,
      ogImage: form.ogImage,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <Section title="QR Kod / Profil URL">
        <input name="profileUrl" value={form.profileUrl} onChange={handleChange} className="input" placeholder="https://..." />
      </Section>

      <Section title="Open Graph Baslik">
        <input name="ogTitle" value={form.ogTitle} onChange={handleChange} className="input" placeholder="Sayfa basligi" />
      </Section>

      <Section title="Open Graph Aciklama">
        <textarea name="ogDescription" value={form.ogDescription} onChange={handleChange} rows={3} className="input" placeholder="Sayfa aciklamasi" />
      </Section>

      <Section title="Open Graph Gorsel (yol)">
        <input name="ogImage" value={form.ogImage} onChange={handleChange} className="input" placeholder="/og-image.jpg" />
      </Section>

      <button type="submit" className="btn-primary">Kaydet</button>
    </form>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <label className="block text-xs text-white/50 mb-1.5">{title}</label>
      {children}
    </div>
  )
}
