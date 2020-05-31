import CSSSteal from 'css-steal'

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

export function getPlainHtml(originalEl) {
  const rootEl = originalEl.cloneNode(true)

  const stylesMap = getStylesMap(rootEl)

  // eslint-disable-next-line no-inner-declarations
  function setInlineStyles(el) {
    setInlineStyle(el, stylesMap)

    for (let i = 0; i < el.childNodes.length; i++) {
      setInlineStyles(el.childNodes[i])
    }
  }

  setInlineStyles(rootEl)

  return rootEl.outerHTML
}
