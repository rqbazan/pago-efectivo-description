import React from 'react'
import multiline from 'multiline-template'
import { Description } from '~/components/description'
import { Frame } from '~/components/frame'

export default function IndexPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <section className="pb-6 border-b-4 border-gray-800">
        <header className="text-sm font-bold p-2">Ecuador</header>
        <Frame>
          <Description
            logoNames={[
              'wester-union-red-activa',
              'facilito',
              'almacenes-tia',
              'ponle-mas'
            ]}
            content={multiline`
              |Transferencias bancarias vía PagoEfectivo - Paga en efectivo
              |en Western Union Red Activa, Facilito, Almacenes TIA y Ponle+ a nivel nacional.
            `}
          />
        </Frame>
      </section>
      <section>
        <header className="text-sm font-bold p-2">Peru</header>
        <Frame className="mb-4">
          <Description
            logoNames={[
              'bbva',
              'bcp',
              'interbank',
              'scotiabank',
              'ban-bif',
              'western-union',
              'tambo',
              'kasnet',
              'full-carga',
              'red-digital',
              'money-gram',
              'caja-arequipa',
              'disashop',
              'banco-de-la-nacion'
            ]}
            content={multiline`
              |Depósitos en Efectivo vía PagoEfectivo - Paga en BBVA, BCP, Interbank,
              |Scotiabank, BanBif, Western Union, Tambo+, Kasnet, Full Carga, Red Digital,
              |Money Gram, Caja Arequipa, Disashop y Banco de la Nación, en cualquier
              |agente o agencia autorizada a nivel nacional a la cuenta de PagoEfectivo.
            `}
          />
        </Frame>
        <Frame>
          <Description
            logoNames={[
              'bbva',
              'bcp',
              'interbank',
              'scotiabank',
              'ban-bif',
              'caja-arequipa'
            ]}
            content={multiline`
              |Transferencias bancarias vía PagoEfectivo - Paga en BBVA, BCP, Interbank,
              |Scotiabank, BanBif y Caja Arequipa, a través de la banca por internet o
              |banca móvil en la opción pago de servicios.
            `}
          />
        </Frame>
      </section>
    </div>
  )
}
