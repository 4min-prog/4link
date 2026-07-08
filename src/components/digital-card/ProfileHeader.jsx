import { cardConfig } from '../../config/cardConfig'

export default function ProfileHeader() {
  return (
    <div className="relative">
      <div
        className="h-28 md:h-32 lg:h-24 bg-gradient-to-br from-primary/30 to-accent/10"
        style={
          cardConfig.coverImage
            ? { backgroundImage: `url(${cardConfig.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : undefined
        }
      />
      <div className="relative -mt-10 lg:-mt-8 flex justify-center mb-0">
        <div className="w-20 h-20 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-dark shadow-[0_0_20px_rgba(0,128,129,0.35)]">
          <img
            src={cardConfig.profileImage}
            alt={cardConfig.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
