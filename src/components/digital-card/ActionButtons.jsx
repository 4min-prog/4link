import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { cardConfig } from '../../config/cardConfig'

const iconMap = {
  Globe: faGlobe,
  MessageCircle: faWhatsapp,
  Phone: faPhone,
  Mail: faEnvelope,
  Briefcase: faLinkedin,
  CodeXml: faGithub,
}

const styleMap = {
  portfolio: 'bg-[#0152CC] text-white hover:bg-[#0152CC]/90',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#25D366]/90',
  call: 'bg-[#001a4d] text-white hover:bg-[#001a4d]/90',
  email: 'bg-primary text-white hover:bg-primary/90',
  outline: 'border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 hover:bg-white/[0.04]',
}

export default function ActionButtons() {
  return (
    <div className="space-y-2.5 lg:grid lg:grid-cols-2 lg:gap-2.5 lg:space-y-0">
      {cardConfig.actionButtons.map((btn) => {
        const faIcon = iconMap[btn.icon]

        return (
          <a
            key={btn.label}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-2xl text-sm font-medium transition-all duration-200 ${styleMap[btn.variant]}`}
          >
            {faIcon && <FontAwesomeIcon icon={faIcon} />}
            <span>{btn.label}</span>
          </a>
        )
      })}
    </div>
  )
}
