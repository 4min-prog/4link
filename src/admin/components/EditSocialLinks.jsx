import { useState } from 'react'

export default function EditSocialLinks({ data, onSave }) {
  const [links, setLinks] = useState(
    data.socialLinks?.map((l) => ({ ...l })) || [{ name: '', url: '', icon: '' }]
  )

  const handleChange = (i, field, value) => {
    const updated = links.map((link, idx) =>
      idx === i ? { ...link, [field]: value } : link
    )
    setLinks(updated)
  }

  const addLink = () => {
    setLinks([...links, { name: '', url: '', icon: 'Globe' }])
  }

  const removeLink = (i) => {
    if (links.length <= 1) return
    setLinks(links.filter((_, idx) => idx !== i))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ socialLinks: links.filter((l) => l.name && l.url) })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      {links.map((link, i) => (
        <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/30">Link #{i + 1}</span>
            {links.length > 1 && (
              <button type="button" onClick={() => removeLink(i)} className="text-xs text-red-400/60 hover:text-red-400 cursor-pointer">
                Kaldir
              </button>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <input
              value={link.name}
              onChange={(e) => handleChange(i, 'name', e.target.value)}
              className="input"
              placeholder="LinkedIn"
            />
            <input
              value={link.icon}
              onChange={(e) => handleChange(i, 'icon', e.target.value)}
              className="input"
              placeholder="Briefcase"
            />
            <input
              value={link.url}
              onChange={(e) => handleChange(i, 'url', e.target.value)}
              className="input col-span-3"
              placeholder="https://..."
            />
          </div>
        </div>
      ))}

      <button type="button" onClick={addLink} className="text-xs text-primary hover:text-primary/80 transition-colors cursor-pointer">
        + Link Ekle
      </button>

      <div>
        <button type="submit" className="btn-primary">Kaydet</button>
      </div>
    </form>
  )
}
