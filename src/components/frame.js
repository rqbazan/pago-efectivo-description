import React, { useRef, useState, useEffect } from 'react'
import { useTimeoutText } from '~/hooks/use-timeout-text'

export function Frame({ className, children }) {
  const childrenRef = useRef()

  const [buttonText, setButtonText] = useTimeoutText('Copy HTML')

  const [clipboardText, setClipboardText] = useState('')

  useEffect(() => {
    setClipboardText(childrenRef.current.getPlainHtml())
  }, [childrenRef.current?.getPlainHtml() ?? ''])

  return (
    <div className={`relative ${className}`}>
      <div className="absolute right-0 m-4">
        <button
          onClick={() => setButtonText('Copied!')}
          data-clipboard-text={clipboardText}
          type="button"
          className="btn-copy text-sm bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 focus:outline-none"
        >
          {buttonText}
        </button>
      </div>
      {React.cloneElement(children, { ref: childrenRef })}
    </div>
  )
}
