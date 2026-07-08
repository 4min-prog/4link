import { useState } from 'react'

export default function EditContact({ data, onSave }) {
  const [form, setForm] = useState({
    phone: data.phone?.display || '',
    phoneHref: data.phone?.href || '',
    email: data.email || '',
    location: data.location || '',
    website: data.website || '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      phone: {
        display: form.phone,
        href: form.phoneHref || `tel:${form.phone.replace(/\s/g, '')}`,
      },
      email: form.email,
      location: form.location,
      website: form.website,
      profileUrl: form.website,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <Section title="Telefon">
        <input name="phone" value={form.phone} onChange={handleChange} className="input" placeholder="+90 507 214 03 64" />
      </Section>

      <Section title="Telefon Linki">
        <input name="phoneHref" value={form.phoneHref} onChange={handleChange} className="input" placeholder="tel:+905072140364" />
      </Section>

      <Section title="E-posta">
        <input name="email" value={form.email} onChange={handleChange} className="input" placeholder="email@example.com" />
      </Section>

      <Section title="Konum">
        <input name="location" value={form.location} onChange={handleChange} className="input" placeholder="Sehir, Ulke" />
      </Section>

      <Section title="Web Sitesi">
        <input name="website" value={form.website} onChange={handleChange} className="input" placeholder="https://..." />
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
