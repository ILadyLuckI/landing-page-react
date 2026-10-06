import heroImage from '../assets/images/hero.png'
import { restaurant } from '../data/restaurant'
import { WHATSAPP_URL } from '../constants'

function Hero() {
  return (
    <section
    id="inicio"
    className="relative overflow-hidden bg-[#9e0712] pt-28"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full border border-[#f2c56b]/10" />  
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* TEXTO */}

        <div className="text-[#fff3d8]">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#f2c56b]">
            {restaurant.city}
          </p>

          <h1 className="mt-4 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            O SABOR DA
            <span className="mt-2 block text-[#f2c56b]">
              CULINÁRIA ÁRABE
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#f8dfb0] md:text-lg">
            Uma experiência de sabores, tradição e acolhimento
            no coração de Antonina.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-[#f2c56b] px-7 py-4 font-bold text-[#72050b] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Pedir pelo WhatsApp
          </a>

        </div>


        {/* IMAGEM */}

        <div className="relative">

          <div className="absolute -inset-4 rounded-full bg-[#f2c56b]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-4xl border-8 border-[#f2c56b]/80 shadow-2xl">

            <img
              src={heroImage}
              alt="Pratos da culinária árabe"
              className="h-112.5 w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero