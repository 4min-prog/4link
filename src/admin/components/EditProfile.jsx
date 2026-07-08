import { useState } from 'react'

export default function EditProfile({ data, onSave }) {
  const [form, setForm] = useState({
    username: data.username || '',
    name: data.name || '',
    title: data.title || '',
    bio: data.bio || '',
    profileImage: data.profileImage || '',
    coverImage: data.coverImage || '',
    footerText: data.footerText || '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <Section title="Kullanici Adi">
        <input name="username" value={form.username} onChange={handleChange} className="input" />
      </Section>

      <Section title="Isim">
        <input name="name" value={form.name} onChange={handleChange} className="input" />
      </Section>

      <Section title="Unvan">
        <input name="title" value={form.title} onChange={handleChange} className="input" />
      </Section>

      <Section title="Kisa Aciklama">
        <textarea name="bio" value={form.bio} onChange={handleChange} rows={3} className="input" />
      </Section>

      <Section title="Profil Fotografi (yol)">
        <input name="profileImage" value={form.profileImage} onChange={handleChange} className="input" placeholder="/my.jpg" />
      </Section>

      <Section title="Kapak Fotografi (yol)">
        <input name="coverImage" value={form.coverImage} onChange={handleChange} className="input" placeholder="/og-image.jpg" />
      </Section>

      <Section title="Alt Metin">
        <input name="footerText" value={form.footerText} onChange={handleChange} className="input" />
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
