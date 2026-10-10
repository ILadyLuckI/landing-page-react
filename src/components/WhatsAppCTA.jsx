import { WHATSAPP_URL } from '../constants'
import { restaurant } from '../data/restaurant'

function WhatsAppCTA() {
  return (
    <section className="px-6 py-20 md:py-28">

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl bg-[#f2c56b]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border-2 border-[#9e0712]/10" />

        <div className="px-8 py-14 text-center md:px-16 md:py-20">

          <p className="font-bold uppercase tracking-[0.25em] text-[#9e0712]">
            Faça seu pedido
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#72050b] md:text-5xl">
            Deu vontade?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#633d32]">
            Experimente os sabores da culinária árabe
            e viva uma experiência especial no {restaurant.name}.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#9e0712] px-8 py-4 font-bold text-[#fff3d8] shadow-lg shadow-[#72050b]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#72050b] hover:shadow-xl"
          >
            <span>💬</span>
            Pedir pelo WhatsApp
          </a>

        </div>

      </div>

    </section>
  )
}

export default WhatsAppCTA