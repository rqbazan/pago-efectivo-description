import CSSSteal from 'css-steal'
import minify from 'string-minify'

function getCSS(el, blockedSelectors) {
  return CSSSteal(el)
    .toJS()
    .filter(item => !blockedSelectors.some(s => s === item.selector))
    .map(item => {
      const cssRules = Object.keys(item.styles)
        .map(ruleName => `${ruleName}: ${item.styles[ruleName]};`)
        .join('')

      return `${item.selector}{${cssRules}}`
    })
    .join('')
}

export function getPlainHtml(originalEl, blockedSelectors = ['img']) {
  const rootEl = originalEl.cloneNode(true)

  const style = document.createElement('style')

  style.innerHTML = getCSS(rootEl, blockedSelectors)

  rootEl.insertBefore(style, rootEl.firstChild)

  return minify(rootEl.outerHTML)
}
