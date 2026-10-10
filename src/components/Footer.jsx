import {  MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, MY_WHATSAPP_URL } from '../constants'
import { restaurant } from '../data/restaurant'

function Footer() {
  return (
    <footer className="bg-[#250d09] px-6 py-10 text-[#d9bfa5]">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* MARCA */}

        <div className="text-center md:text-left">

          <p className="text-xl font-black tracking-wide text-[#f2c56b]">
            {restaurant.name}
          </p>

          <p className="mt-1 text-sm">
            {restaurant.category} • {restaurant.city}
          </p>

        </div>


        {/* REDES SOCIAIS */}

        <div className="flex items-center gap-4">         

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-[#3a1510] hover:text-[#f2c56b]"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>

        </div>

      </div>

      {/* CTA PARA NOVOS CLIENTES */}

      <div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-[#5a281d] bg-[#3a1510] px-6 py-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f2c56b]">
          Gostou deste site?
        </p>

        <p className="mt-2 text-lg font-semibold text-[#fff3d8]">
          Posso criar uma página assim para o seu negócio.
        </p>

        <a
          href={MY_WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f2c56b] px-6 py-3 font-bold text-[#72050b] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <MessageCircle size={18} />
          Quero um site como este
        </a>
      </div>

      {/* LINHA */}

      <div className="mx-auto mt-8 max-w-6xl border-t border-[#5a281d] pt-6 text-center">

        <p className="text-xs text-[#9f8070]">
          © {new Date().getFullYear()} Lorem. Todos os direitos reservados.
        </p>

      </div>

    </footer>
  )
}

export default Footer