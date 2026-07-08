import { cardConfig } from '../config/cardConfig'

const STORAGE_KEY = '4link_card_data'

function getDefaultData() {
  return {
    username: cardConfig.username,
    name: cardConfig.name,
    title: cardConfig.title,
    bio: cardConfig.bio,
    coverImage: cardConfig.coverImage,
    profileImage: cardConfig.profileImage,
    phone: { ...cardConfig.phone },
    email: cardConfig.email,
    location: cardConfig.location,
    website: cardConfig.website,
    socialLinks: cardConfig.socialLinks.map(s => ({ ...s })),
    actionButtons: cardConfig.actionButtons.map(b => ({ ...b })),
    profileUrl: cardConfig.profileUrl,
    footerText: cardConfig.footerText,
  }
}

export function loadCardData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return getDefaultData()
}

export function saveCardData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function resetCardData() {
  localStorage.removeItem(STORAGE_KEY)
  return getDefaultData()
}
