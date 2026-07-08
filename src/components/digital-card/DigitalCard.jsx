import ProfileHeader from './ProfileHeader'
import ProfileInfo from './ProfileInfo'
import SocialLinks from './SocialLinks'
import ActionButtons from './ActionButtons'
import QRCodeSection from './QRCodeSection'
import ShareSaveButtons from './ShareSaveButtons'
import { cardConfig } from '../../config/cardConfig'

export default function DigitalCard() {
  return (
    <div className="w-full max-w-[360px] lg:max-w-3xl">
      <div className="bg-card rounded-3xl overflow-hidden border border-white/[0.06]">
        <ProfileHeader />

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[34%] px-5 pb-5 lg:pb-5 lg:pt-1 lg:border-r lg:border-white/[0.06] lg:pr-5">
            <div className="-mt-1 lg:mt-0">
              <ProfileInfo />
            </div>
          </div>

          <div className="lg:w-[66%] px-5 pb-6 lg:pb-6 space-y-4 lg:pl-5">
            <SocialLinks />
            <div className="h-px bg-white/[0.06]" />
            <ActionButtons />
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
              <QRCodeSection />
              <div className="flex-1 lg:self-end">
                <ShareSaveButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-white/30 mt-4 tracking-wide">
        {cardConfig.footerText}
      </p>
    </div>
  )
}
