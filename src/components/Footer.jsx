import {  MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'
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