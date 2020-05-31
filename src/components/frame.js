import React, { useRef } from 'react'
import { useTimeoutText } from '~/hooks/use-timeout-text'

export function Frame({ className, children }) {
  const childrenRef = useRef()

  const [buttonText, setButtonText] = useTimeoutText('Copy HTML')

  function onCopyClick() {
    const textarea = document.createElement('textarea')

    textarea.value = childrenRef.current.getPlainHtml()

    document.body.appendChild(textarea)

    textarea.select()

    document.execCommand('copy')

    document.body.removeChild(textarea)

    setButtonText('Copied!')
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute right-0 m-4">
        <button
          onClick={onCopyClick}
          disabled={
            typeof document !== 'undefined' &&
            !document.queryCommandSupported('copy')
          }
          type="button"
          className="text-sm bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 focus:outline-none"
        >
          {buttonText}
        </button>
      </div>
      {React.cloneElement(children, { ref: childrenRef })}
    </div>
  )
}
