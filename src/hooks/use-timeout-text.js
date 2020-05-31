import { useRef, useState, useEffect } from 'react'

export function useTimeoutText(initialText) {
  const timerIdRef = useRef()

  const [text, setText] = useState(initialText)

  useEffect(() => {
    return () => clearTimeout(timerIdRef.current)
  }, [])

  return [
    text,
    newText => {
      setText(newText)

      timerIdRef.current = setTimeout(() => {
        setText(initialText)
      }, 1000)
    }
  ]
}
