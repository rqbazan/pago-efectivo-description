import React, { useImperativeHandle, useRef } from 'react'
import memoizeOne from 'memoize-one'
import { useDeepCompareMemoize } from '@desync/use-deep-compare-memoize'
import { getPlainHtml } from '~/utils/get-plain-html'

export const Description = React.forwardRef(({ content, logoNames }, ref) => {
  const containerRef = useRef()

  const innerContainerRef = useRef()

  useImperativeHandle(
    ref,
    () => {
      const memoizedGetPlainHtml = memoizeOne(getPlainHtml)

      return {
        getPlainHtml: () => memoizedGetPlainHtml(innerContainerRef.current)
      }
    },
    useDeepCompareMemoize([content, logoNames])
  )

  return (
    <div className="bg-gray-200 px-8 py-6" ref={containerRef}>
      <div style={{ fontSize: 12 }} ref={innerContainerRef}>
        <style>{`
          @media (min-width: 440px) {
            .break\\:grid-cols-auto-4 {
                grid-template-columns: repeat(auto-fill, 4rem);
            }
          }
        `}</style>
        <header className="h-10 mb-8">
          <img
            className="h-full w-auto"
            src="https://res.cloudinary.com/riqra/image/upload/v1590444087/sellers/resources/pagoefectivo-logo.png"
            alt="PagoEfectivo Logo"
          />
        </header>
        <ul className="list-disc ml-5">
          <li>
            {content}{' '}
            <span className="font-semibold">
              <a
                href="https://youtu.be/wh7w1n7_5F0"
                target="__blank"
                className="text-anchor"
              >
                ¿Cómo funciona PagoEfectivo?
              </a>
            </span>
          </li>
        </ul>
        <footer className="grid mt-6 ml-5 gap-2 grid-cols-4 break:grid-cols-auto-4">
          {logoNames.map(name => (
            <div className="h-5 w-16 flex justify-center w-full" key={name}>
              <img
                className="h-full object-contain"
                src={`https://res.cloudinary.com/riqra/image/upload/v1590968100/sellers/resources/pago-efectivo-logos/${name}.png`}
                alt="Logo"
              />
            </div>
          ))}
        </footer>
      </div>
    </div>
  )
})
