import React, { useEffect } from 'react'
import ClipboardJS from 'clipboard'
import { Description } from '~/components/description'
import { Frame } from '~/components/frame'

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
            content="Transferencias bancarias vía PagoEfectivo - Paga en efectivo en Western Union Red Activa, Facilito y Amlacenes TIA a nivel nacional. ¿Cómo funciona PagoEfectivo?"
            footer={
              <footer className="h-5 mt-6 ml-5">
                <img
                  className="h-full w-auto"
                  src="https://res.cloudinary.com/riqra/image/upload/v1590704424/sellers/resources/pagoefectivo-logos-3.png"
                  alt="Logos"
                />
              </footer>
            }
          />
        </Frame>
      </section>
      <section>
        <header className="text-sm font-bold p-2">Peru</header>
        <Frame className="mb-4">
          <Description
            content="Depósitos en Efectivo vía PagoEfectivo - Paga en BBVA, BCP, Interbank, Scotiabank, BanBif, Western Union, Tambo+, Kasnet, Full Carga, Red Digital, Money Gram, Caja Arequipa, Disashop, Banco de la Nación, en cualquier agente o agencia autorizada a nivel nacional a la cuenta de PagoEfectivo."
            footer={
              <footer className="h-12 mt-6 ml-5">
                <img
                  className="h-full w-auto"
                  src="https://res.cloudinary.com/riqra/image/upload/v1590444143/sellers/resources/pagoefectivo-logos-2.png"
                  alt="Logos"
                />
              </footer>
            }
          />
        </Frame>
        <Frame>
          <Description
            content="Transferencias bancarias vía PagoEfectivo - Paga en BBVA, BCP, Interbank, Scotiabank, BanBif, Caja Arequipa, a través de la banca por internet o banca móvil en la opción pago de servicios."
            footer={
              <footer className="h-5 mt-6 ml-5">
                <img
                  className="h-full w-auto"
                  src="https://res.cloudinary.com/riqra/image/upload/v1590444142/sellers/resources/pagoefectivo-logos-1.png"
                  alt="Logos"
                />
              </footer>
            }
          />
        </Frame>
      </section>
    </div>
  )
}
