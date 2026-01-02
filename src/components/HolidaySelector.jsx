import { HOLIDAYS } from '../constants'

export default function HolidaySelector({ selectedHoliday, onSelect }) {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '1rem',
        marginTop: '1rem'
    }

    const cardStyle = (isSelected) => ({
        background: isSelected ? 'rgba(139, 92, 246, 0.3)' : 'rgba(30, 41, 59, 0.5)',
        border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
        borderRadius: 'var(--radius-sm)',
        padding: '1.5rem',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'all 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '120px'
    })

    // Add hover effect logic via CSS or inline for simplicity in this MVP
    // Ideally, use a CSS module or updating index.css with a class

    return (
        <div className="fade-in">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>
                Select Occasion
            </label>
            <div style={gridStyle}>
                {HOLIDAYS.map((holiday) => (
                    <div
                        key={holiday.id}
                        role="button"
                        aria-pressed={selectedHoliday === holiday.id}
                        onClick={() => onSelect(holiday.id)}
                        style={cardStyle(selectedHoliday === holiday.id)}
                        className="holiday-card"
                    >
                        <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem', display: 'block' }}>
                            {holiday.icon}
                        </span>
                        <span style={{ fontWeight: selectedHoliday === holiday.id ? '600' : '400' }}>
                            {holiday.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
