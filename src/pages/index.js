import React, { useEffect } from 'react'
import multiline from 'multiline-template'
import ClipboardJS from 'clipboard'
import { Description } from '~/components/description'
import { Frame } from '~/components/frame'

function getLogoNames(start, end) {
  const sequence = Array.from({ length: end - start + 1 }).map(
    (v, i) => start + i
  )

  return sequence.map(i => String(i).padStart(2, '0'))
}

export default function IndexPage() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new ClipboardJS('.btn-copy')
  }, [])

  return (
    <div className="max-w-2xl mx-auto">
      <section className="pb-6 border-b-4 border-gray-800">
        <header className="text-sm font-bold p-2">Ecuador</header>
        <Frame>
          <Description
            logoNames={getLogoNames(15, 18)}
            content={multiline`
              |Transferencias bancarias vía PagoEfectivo - Paga en efectivo
              |en Western Union Red Activa, Facilito y Amlacenes TIA a nivel nacional.
            `}
          />
        </Frame>
      </section>
      <section>
        <header className="text-sm font-bold p-2">Peru</header>
        <Frame className="mb-4">
          <Description
            logoNames={getLogoNames(1, 14)}
            content={multiline`
              |Depósitos en Efectivo vía PagoEfectivo - Paga en BBVA, BCP, Interbank,
              |Scotiabank, BanBif, Western Union, Tambo+, Kasnet, Full Carga, Red Digital,
              |Money Gram, Caja Arequipa, Disashop, Banco de la Nación, en cualquier
              |agente o agencia autorizada a nivel nacional a la cuenta de PagoEfectivo.
            `}
          />
        </Frame>
        <Frame>
          <Description
            logoNames={getLogoNames(1, 5)}
            content={multiline`
              |Transferencias bancarias vía PagoEfectivo - Paga en BBVA, BCP, Interbank,
              |Scotiabank, BanBif, Caja Arequipa, a través de la banca por internet o
              |banca móvil en la opción pago de servicios.
            `}
          />
        </Frame>
      </section>
    </div>
  )
}
