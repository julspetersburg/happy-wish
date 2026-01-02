import { useState, useEffect } from 'react'
import './index.css'
import HolidaySelector from './components/HolidaySelector'
import WishForm from './components/WishForm'
import WishCard from './components/WishCard'
import { HOLIDAYS, TONES } from './constants'

function App() {
  const [apiKey, setApiKey] = useState('')
  const [step, setStep] = useState(1) // 1: Config, 2: Form, 3: Result
  const [formData, setFormData] = useState({ holiday: '', tone: '', recipient: '', details: '' })
  const [generatedWish, setGeneratedWish] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    const envKey = import.meta.env.VITE_OPENAI_API_KEY
    if (envKey) {
      setApiKey(envKey)
      setStep(2)
    }
  }, [])

  const handleHolidaySelect = (holidayId) => {
    console.log("Selected Holiday:", holidayId)
    setFormData(prev => ({ ...prev, holiday: holidayId }))
  }

  const handleGenerate = async (data) => {
    // Basic validation
    if (!formData.holiday) {
      alert('Please select a holiday!')
      return
    }

    setIsGenerating(true)
    const holidayLabel = HOLIDAYS.find(h => h.id === formData.holiday)?.label || formData.holiday
    const prompt = `Write a creative ${data.tone} holiday wish for ${holidayLabel}${data.recipient ? ` specifically for ${data.recipient}` : ''}. ${data.details ? `Include these details: ${data.details}` : ''}. Output the wish in ${data.language || 'English'}. Keep it short, punchy, and under 60 words.`

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a creative holiday wish generator. Output only the wish text, no intro or outro."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.7,
        })
      })

      const result = await response.json()

      if (result.error) {
        throw new Error(result.error.message)
      }

      setGeneratedWish(result.choices[0].message.content.trim())
      setFormData(prev => ({ ...prev, ...data })) // Save full form data
      setStep(3)
    } catch (error) {
      console.error("Error generating wish:", error)
      alert(`Error: ${error.message}`)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleBack = () => {
    setStep(2)
    setGeneratedWish('')
  }

  return (
    <div className="container fade-in">
      <header>
        <h1>Holiday Wishes AI</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Create magical, personalized greetings in seconds.
        </p>
      </header>

      <main style={{ width: '100%', maxWidth: '800px' }}>
        {step === 1 && (
          <div className="card" style={{ padding: '2rem', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Setup</h3>
            <p style={{ marginBottom: '1rem' }}>Please add your OpenAI API Key to a <code>.env</code> file as <code>VITE_OPENAI_API_KEY</code> to continue.</p>
            <p>Or verify your environment setup.</p>
          </div>
        )}

        {step === 2 && (
          <div className="card" style={{ padding: '2rem', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Design Your Wish</h2>

            <HolidaySelector
              selectedHoliday={formData.holiday}
              onSelect={handleHolidaySelect}
            />

            <WishForm
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>
        )}

        {step === 3 && (
          <WishCard
            wish={generatedWish}
            holidayId={formData.holiday}
            recipient={formData.recipient}
            language={formData.language}
            onBack={handleBack}
          />
        )}
      </main>
    </div>
  )
}

export default App
