import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import { THEMES, HEADERS } from '../constants'

export default function WishCard({ wish, holidayId, recipient, language, onBack }) {
  const [copied, setCopied] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const cardRef = useRef(null)

  const theme = THEMES[holidayId] || THEMES['default']
  const headerText = HEADERS[holidayId]?.[language === 'Russian' ? 'ru' : 'en'] || (language === 'Russian' ? 'Поздравляем!' : 'Happy Holidays!')

  const handleCopy = () => {
    navigator.clipboard.writeText(wish)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSaveImage = async () => {
    if (!cardRef.current) return
    setIsSaving(true)
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2, // Reduced from 3 for stability
        useCORS: true,
        logging: true
      })

      const link = document.createElement('a')

      // Safe filename generation
      let filename = 'holiday-wish.png'
      try {
        const cleanHoliday = holidayId || 'holiday'
        const cleanRecipient = (recipient && typeof recipient === 'string' && language !== 'Russian')
          ? `_for_${recipient.replace(/[^a-z0-9]/gi, '_')}`
          : ''
        filename = `${cleanHoliday}_Wish${cleanRecipient}.png`
      } catch (e) {
        console.warn("Filename generation failed, using default", e)
      }

      link.download = filename
      link.href = canvas.toDataURL('image/png')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

    } catch (err) {
      console.error("Failed to save image", err)
      alert("Failed to save image. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  // Styles based on theme
  const containerStyle = {
    padding: '3rem',
    background: theme.background,
    borderRadius: 'var(--radius-lg)',
    border: `1px solid ${theme.accent}40`,
    boxShadow: `0 20px 50px -12px ${theme.accent}60`,
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: '#ffffff' // Force white text for contrast
  }

  return (
    <div className="fade-in" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>

      <div ref={cardRef} style={containerStyle}>
        {/* Decorative elements removed for solid design */}


        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{
            marginBottom: '2rem',
            fontSize: '2rem',
            fontWeight: '800', // Bold header
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            letterSpacing: '-0.02em',
            color: theme.accent // Make header pop with the accent color
          }}>
            {headerText}
          </h3>

          <p style={{
            fontSize: '1.4rem',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.7',
            marginBottom: '2.5rem',
            fontWeight: '600', // Increased weight for readability
            textShadow: '0 2px 4px rgba(0,0,0,0.8)', // Stronger shadow for contrast
            opacity: 0.95
          }}>
            "{wish}"
          </p>

          <div className="no-print" data-html2canvas-ignore style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopy}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'rgba(0,0,0,0.3)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
                backdropFilter: 'blur(5px)'
              }}
            >
              {copied ? 'Copied! ✓' : 'Copy Text 📋'}
            </button>

            <button
              onClick={handleSaveImage}
              disabled={isSaving}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'rgba(0,0,0,0.3)',
                color: 'white',
                cursor: 'pointer',
                backdropFilter: 'blur(5px)'
              }}
            >
              {isSaving ? 'Saving...' : 'Save Image 🖼️'}
            </button>

            <button
              onClick={onBack}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: theme.accent,
                color: theme.background, // Contrast text on accent button
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: `0 4px 15px ${theme.accent}60`
              }}
            >
              Make Another ↺
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
