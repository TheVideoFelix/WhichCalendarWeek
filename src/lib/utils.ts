// Get the week number of a given date
export const getWeek = (date: Date): number => {
    const onejan = new Date(date.getFullYear(), 0, 1)
    return Math.ceil((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7)
}

// Get the start and end date of a week
export const getWeekStartEnd = (date: Date): { start: Date, end: Date } => {
    const today = new Date(date)

    const dayOfWeek = today.getDay()
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1

    const startDate = new Date(today.setDate(today.getDate() - daysToSubtract))
    startDate.setHours(0, 0, 0, 0) // Start of the day

    const endDate = new Date(startDate.getTime())
    endDate.setDate(startDate.getDate() + 6) // End of the day

    return {start: startDate, end: endDate}
}

// Format a date as dd.mm.yyyy
export const formatDate = (date: Date): string => {
    if (!date) return ''
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()
    return `${dd}.${mm}.${yyyy}`
}
