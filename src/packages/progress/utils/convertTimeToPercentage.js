const SECONDS_IN_YEAR = 31536000
export function convertTimeToPercentage () {
    const now = new Date()
    const firstDayOfYear = new Date(now.getUTCFullYear(), 0, 1) // 0 = January
    const timeDifference = (now.getTime() - firstDayOfYear.getTime()) / 1000
    return ((timeDifference / SECONDS_IN_YEAR) * 100).toFixed(2)
}
