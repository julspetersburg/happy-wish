import { useState } from 'react'
import { TONES } from '../constants'

export default function WishForm({ onGenerate, isGenerating }) {
    const [tone, setTone] = useState(TONES[0].id)
    const [recipient, setRecipient] = useState('')
    const [details, setDetails] = useState('')
    const [language, setLanguage] = useState('English')

    const handleSubmit = (e) => {
        e.preventDefault()
        onGenerate({ tone, recipient, details, language })
    }

    const inputStyle = {
        width: '100%',
        padding: '0.8rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--color-border)',
        background: 'rgba(15, 23, 42, 0.5)',
        color: 'var(--color-text-main)',
        marginBottom: '1rem',
        fontSize: '1rem',
        fontFamily: 'inherit'
    }

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        color: 'var(--color-text-muted)',
        fontSize: '0.9rem'
    }

    // Tone chips style
    const toneContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem'
    }

    return (
        <form onSubmit={handleSubmit} className="fade-in" style={{ marginTop: '2rem' }}>

            {/* Language Selection */}
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Language</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['English', 'Russian'].map((lang) => (
                        <button
                            key={lang}
                            type="button"
                            onClick={() => setLanguage(lang)}
                            style={{
                                flex: 1,
                                padding: '0.6rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--color-border)',
                                background: language === lang ? 'var(--color-primary)' : 'rgba(30, 41, 59, 1)',
                                color: 'var(--color-text-main)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                opacity: language === lang ? 1 : 0.7,
                                fontWeight: language === lang ? '600' : '400'
                            }}
                        >
                            {lang === 'English' ? '🇬🇧 English' : '🇷🇺 Russian'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tone Selection */}
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Tone</label>
                <div style={toneContainerStyle}>
                    {TONES.map((t) => (
                        <button
                            key={t.id}
                            type="button"
                            onClick={() => setTone(t.id)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                border: 'none',
                                background: tone === t.id ? 'var(--color-primary)' : 'rgba(30, 41, 59, 1)',
                                color: 'var(--color-text-main)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                opacity: tone === t.id ? 1 : 0.7
                            }}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Recipient */}
            <div>
                <label style={labelStyle}>Who is this for? (Optional)</label>
                <input
                    type="text"
                    placeholder="e.g. Mom, Best Friend, Boss"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    style={inputStyle}
                />
            </div>

            {/* Details */}
            <div>
                <label style={labelStyle}>Extra Details or Keywords</label>
                <textarea
                    placeholder="e.g. loves cats, moving to a new house, bad year but hopeful"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical' }}
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isGenerating}
                style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    background: 'var(--color-primary)',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: isGenerating ? 'not-allowed' : 'pointer',
                    marginTop: '1rem',
                    opacity: isGenerating ? 0.7 : 1,
                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
                }}
            >
                {isGenerating ? 'Generating Magic... ✨' : 'Create My Wish 🚀'}
            </button>

        </form>
    )
}
