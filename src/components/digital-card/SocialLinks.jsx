import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { cardConfig } from '../../config/cardConfig'

const iconMap = {
  Briefcase: faLinkedin,
  CodeXml: faGithub,
  Instagram: faInstagram,
  MessageCircle: faWhatsapp,
}

export default function SocialLinks() {
  return (
    <div className="flex justify-center lg:justify-start gap-3">
      {cardConfig.socialLinks.map((link) => {
        const faIcon = iconMap[link.icon]
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08] text-white/50 hover:text-white hover:border-white/20 transition-colors duration-200"
            aria-label={link.name}
          >
            {faIcon && <FontAwesomeIcon icon={faIcon} size="lg" />}
          </a>
        )
      })}
    </div>
  )
}
