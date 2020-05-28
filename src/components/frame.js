import React, { useRef, useState, useEffect } from 'react'
import CSSSteal from 'css-steal'

function useTimeoutText(initialText) {
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

function getStylesMap(el) {
  const css = CSSSteal(el)

  const selectorStyles = css.toJS()

  return selectorStyles.reduce((acc, { selector, styles }) => {
    if (!selector.includes(',')) {
      acc[selector] = styles
    } else {
      selector
        .split(',')
        .map(s => s.trim())
        .forEach(s => {
          acc[s] = styles
        })
    }

    return acc
  }, {})
}

function setInlineStyle(el, stylesMap) {
  const tagName = el.nodeName.toLowerCase()

  const inlineStyles = {
    ...stylesMap[tagName]
  }

  if (el.classList) {
    el.classList.forEach(name => {
      Object.assign(inlineStyles, stylesMap[`.${name}`])
    })
  }

  if (el.style) {
    Object.assign(el.style, inlineStyles)
  } else {
    // eslint-disable-next-line no-param-reassign
    el.style = inlineStyles
  }

  if (el.removeAttribute) {
    el.removeAttribute('class')
  }
}

export function Frame({ className, children }) {
  const childrenRef = useRef()

  const [buttonText, setButtonText] = useTimeoutText('Copy HTML')

  const [clipboardText, setClipboardText] = useState('')

  useEffect(() => {
    const [original] = childrenRef.current.querySelectorAll('.pagoefectivo')

    const rootEl = original.cloneNode(true)

    const stylesMap = getStylesMap(rootEl)

    function setInlineStyles(el) {
      setInlineStyle(el, stylesMap)

      for (let i = 0; i < el.childNodes.length; i++) {
        setInlineStyles(el.childNodes[i])
      }
    }

    setInlineStyles(rootEl)

    const temp = document.createElement('div')

    temp.appendChild(rootEl)

    setClipboardText(temp.innerHTML)
  }, [children])

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
      <div ref={childrenRef}>{children}</div>
    </div>
  )
}
