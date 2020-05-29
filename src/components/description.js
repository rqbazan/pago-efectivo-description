import React from 'react'

export function Description({ content, logoNames }) {
  return (
    <div className="bg-gray-200 px-8 py-6">
      <div className="pagoefectivo" style={{ fontSize: 12 }}>
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
            <span className="font-semibold text-anchor">
              <a href="https://youtu.be/wh7w1n7_5F0" target="__blank">
                ¿Cómo funciona PagoEfectivo?
              </a>
            </span>
          </li>
        </ul>
        <footer className="grid mt-6 ml-5 gap-2 grid-cols-4 break:grid-cols-auto-4">
          {logoNames.map(name => (
            <div className="h-5 w-16 flex justify-center w-full" key={name}>
              <img
                className="h-full object-contain"
                src={`https://res.cloudinary.com/riqra/image/upload/v1590708129/sellers/resources/pago-efectivo-logos/${name}.png`}
                alt="Logo"
              />
            </div>
          ))}
        </footer>
      </div>
    </div>
  )
}
