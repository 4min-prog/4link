import { QRCodeSVG } from 'qrcode.react'
import { cardConfig } from '../../config/cardConfig'

export default function QRCodeSection() {
  return (
    <div className="text-center lg:text-left">
      <div className="inline-block border border-white/[0.08] rounded-xl p-2.5">
        <div className="w-20 h-20 rounded-lg overflow-hidden bg-white p-1.5">
          <QRCodeSVG
            value={cardConfig.profileUrl}
            size={68}
            bgColor="#ffffff"
            fgColor="#05050A"
            level="M"
            includeMargin={false}
          />
        </div>
      </div>
      <p className="text-[10px] text-white/30 mt-1.5 tracking-widest uppercase">
        Telefon kamerasiyla tara
      </p>
    </div>
  )
}
