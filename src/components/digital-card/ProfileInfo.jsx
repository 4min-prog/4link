import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { cardConfig } from '../../config/cardConfig'

export default function ProfileInfo() {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-xl font-semibold text-white mb-0.5">
        {cardConfig.name}
      </h1>
      <p className="text-accent text-xs font-medium mb-1.5">
        {cardConfig.title}
      </p>
      <p className="text-white/45 text-xs leading-relaxed mb-3">
        {cardConfig.bio}
      </p>

      <div className="flex items-center justify-center lg:justify-start gap-1.5 text-white/40 text-[11px]">
        <FontAwesomeIcon icon={faMapPin} size="sm" />
        <span>{cardConfig.location}</span>
      </div>
    </div>
  )
}
