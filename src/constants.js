export const HOLIDAYS = [
    { id: 'new-year', label: 'New Year', icon: '🎆' },
    { id: 'christmas', label: 'Christmas', icon: '🎄' },
    { id: 'halloween', label: 'Halloween', icon: '🎃' },
    { id: 'birthday', label: 'Birthday', icon: '🎂' },
    { id: 'valentines', label: "Valentine's", icon: '❤️' },
    { id: 'spring', label: "Spring&Peace", icon: '🕊' },
    { id: 'easter', label: 'Easter', icon: '🐰' },
    { id: 'graduation', label: 'Graduation', icon: '🎓' }
]

export const TONES = [
    { id: 'sincere', label: 'Sincere' },
    { id: 'funny', label: 'Funny' },
    { id: 'rhyming', label: 'Rhyming Poem' },
    { id: 'haiku', label: 'Haiku' },
    { id: 'short', label: 'Short & Sweet' },
    { id: 'formal', label: 'Formal' },
    { id: 'emoji', label: 'Emoji Overload' }
]

export const HEADERS = {
    'new-year': { en: 'Happy New Year!', ru: 'С Новым Годом!' },
    'christmas': { en: 'Merry Christmas!', ru: 'С Рождеством!' },
    'halloween': { en: 'Happy Halloween!', ru: 'С Хэллоуином!' },
    'birthday': { en: 'Happy Birthday!', ru: 'С Днем Рождения!' },
    'valentines': { en: 'Happy Valentine\'s Day!', ru: 'С Днем Святого Валентина!' },
    'spring': { en: 'Spring and Peace!', ru: 'Мир! Труд! Май!' },
    'easter': { en: 'Happy Easter!', ru: 'Со Светлой Пасхой!' },
    'graduation': { en: 'Happy Graduation!', ru: 'С Выпускным!' },
    'default': { en: 'Best Wishes!', ru: 'С Наилучшими Пожеланиями!' }
}

export const THEMES = {
    'new-year': {
        background: '#020617', // Very Dark Navy
        accent: '#facc15', // Bright Gold
        secondary: '#1e293b' // Slate
    },
    'christmas': {
        background: '#052e16', // Darkest Forest Green
        accent: '#dc2626', // Bright Red
        secondary: '#f0fdf4' // Mint White
    },
    'halloween': {
        background: '#2e1065', // Midnight Violet
        accent: '#f97316', // Neon Orange
        secondary: '#0f172a' // Dark Slate
    },
    'birthday': {
        background: '#831843', // Deep Maroon/Berry
        accent: '#fef08a', // Pale Yellow
        secondary: '#fce7f3' // Pale Pink
    },
    'valentines': {
        background: '#881337', // Deep Crimson
        accent: '#fbcfe8', // Soft Pink
        secondary: '#9f1239'
    },
    'spring': {
        background: '#451a03', // Dark Espresso
        accent: '#f59e0b', // Amber
        secondary: '#78350f'
    },
    'easter': {
        background: '#064e3b', // Deep Emerald
        accent: '#f472b6', // Pink
        secondary: '#fef3c7' // Soft Yellow
    },
    'graduation': {
        background: '#172554', // Deepest Blue
        accent: '#facc15', // Gold
        secondary: '#bfdbfe'
    },
    'default': {
        background: '#18181b', // Zinc 900
        accent: '#22d3ee', // Cyan
        secondary: '#52525b'
    }
}
