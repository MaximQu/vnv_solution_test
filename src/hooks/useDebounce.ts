import { useEffect, useState } from "react"

const useDebounce = <T>(value: T, timeoutTime?: number):T => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), timeoutTime || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, timeoutTime])

    return debouncedValue
}
export default useDebounce