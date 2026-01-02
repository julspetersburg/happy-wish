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
    'spring': { en: 'Spring and Peace!', ru: 'С Праздником Весны и Мира!' },
    'easter': { en: 'Happy Easter!', ru: 'Со Светлой Пасхой!' },
    'graduation': { en: 'Happy Graduation!', ru: 'С Выпускным!' },
    'default': { en: 'Best Wishes!', ru: 'С Наилучшими Пожеланиями!' }
}

export const THEMES = {
    'new-year': {
        background: '#0f172a', // Midnight Blue
        accent: '#fbbf24', // Warm Gold
        secondary: '#1e40af' // Royal Blue
    },
    'christmas': {
        background: '#14532d', // Rich Forest Green
        accent: '#ef4444', // Festive Red
        secondary: '#fef3c7' // Cream
    },
    'halloween': {
        background: '#1e1b4b', // Deep Purple
        accent: '#fb923c', // Warm Orange
        secondary: '#a78bfa' // Lavender
    },
    'birthday': {
        background: '#be185d', // Vibrant Magenta
        accent: '#fde047', // Sunny Yellow
        secondary: '#f0abfc' // Light Pink
    },
    'valentines': {
        background: '#9f1239', // Deep Rose
        accent: '#fda4af', // Soft Coral Pink
        secondary: '#ffe4e6' // Blush
    },
    'spring': {
        background: '#065f46', // Fresh Emerald
        accent: '#fbbf24', // Sunflower Gold
        secondary: '#d1fae5' // Mint Green
    },
    'easter': {
        background: '#0e7490', // Soft Teal
        accent: '#f472b6', // Pastel Pink
        secondary: '#fef9c3' // Butter Yellow
    },
    'graduation': {
        background: '#1e3a8a', // Noble Blue
        accent: '#fcd34d', // Gold
        secondary: '#dbeafe' // Light Blue
    },
    'default': {
        background: '#1f2937', // Warm Charcoal
        accent: '#06b6d4', // Bright Cyan
        secondary: '#6b7280' // Cool Gray
    }
}
