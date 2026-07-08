import { useState } from 'react'

const VARIANTS = ['portfolio', 'whatsapp', 'call', 'email', 'outline']
const ICON_OPTIONS = ['Globe', 'MessageCircle', 'Phone', 'Mail', 'Briefcase', 'CodeXml']

export default function EditActions({ data, onSave }) {
  const [buttons, setButtons] = useState(
    data.actionButtons?.map((b) => ({ ...b })) || []
  )

  const handleChange = (i, field, value) => {
    const updated = buttons.map((btn, idx) =>
      idx === i ? { ...btn, [field]: value } : btn
    )
    setButtons(updated)
  }

  const moveUp = (i) => {
    if (i === 0) return
    const updated = [...buttons]
    ;[updated[i - 1], updated[i]] = [updated[i], updated[i - 1]]
    setButtons(updated)
  }

  const moveDown = (i) => {
    if (i === buttons.length - 1) return
    const updated = [...buttons]
    ;[updated[i], updated[i + 1]] = [updated[i + 1], updated[i]]
    setButtons(updated)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ actionButtons: buttons })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      {buttons.map((btn, i) => (
        <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/30">Button #{i + 1}</span>
            <div className="flex gap-2">
              <button type="button" onClick={() => moveUp(i)} className="text-xs text-white/30 hover:text-white cursor-pointer">▲</button>
              <button type="button" onClick={() => moveDown(i)} className="text-xs text-white/30 hover:text-white cursor-pointer">▼</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              value={btn.label}
              onChange={(e) => handleChange(i, 'label', e.target.value)}
              className="input"
              placeholder="Portfolio"
            />
            <select
              value={btn.variant}
              onChange={(e) => handleChange(i, 'variant', e.target.value)}
              className="input"
            >
              {VARIANTS.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            <select
              value={btn.icon}
              onChange={(e) => handleChange(i, 'icon', e.target.value)}
              className="input"
            >
              {ICON_OPTIONS.map((icon) => (
                <option key={icon} value={icon}>{icon}</option>
              ))}
            </select>
            <input
              value={btn.href}
              onChange={(e) => handleChange(i, 'href', e.target.value)}
              className="input"
              placeholder="https://..."
            />
          </div>
        </div>
      ))}

      <button type="submit" className="btn-primary">Kaydet</button>
    </form>
  )
}
