import { Share2, UserPlus } from 'lucide-react'
import { cardConfig } from '../../config/cardConfig'

export default function ShareSaveButtons() {
  const handleSave = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${cardConfig.name}
EMAIL:${cardConfig.email}
END:VCARD`
    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${cardConfig.name.replace(/\s/g, '_')}.vcf`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: cardConfig.name,
        text: `${cardConfig.name} - ${cardConfig.title}`,
        url: cardConfig.website,
      })
    } else {
      navigator.clipboard.writeText(cardConfig.website)
    }
  }

  return (
    <div className="flex gap-2.5">
      <button
        onClick={handleSave}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200 text-sm font-medium cursor-pointer"
      >
        <UserPlus size={16} />
        <span>Kaydet</span>
      </button>
      <button
        onClick={handleShare}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200 text-sm font-medium cursor-pointer"
      >
        <Share2 size={16} />
        <span>Paylas</span>
      </button>
    </div>
  )
}
