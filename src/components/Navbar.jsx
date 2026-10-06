import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { restaurant } from '../data/restaurant'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-[#fff3d8]">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* LOGO */}

        <div>
          <p className="text-2xl font-black tracking-wide text-[#9e0712]">
            {restaurant.name}
          </p>

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#3a1510]">
            {restaurant.category}
          </p>
        </div>


        {/* MENU DESKTOP */}

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#inicio"
            className="text-sm font-semibold text-[#3a1510] transition hover:text-[#9e0712]"
          >
            Início
          </a>

          <a
            href="#sobre"
            className="text-sm font-semibold text-[#3a1510] transition hover:text-[#9e0712]"
          >
            Sobre
          </a>

          <a
            href="#sabores"
            className="text-sm font-semibold text-[#3a1510] transition hover:text-[#9e0712]"
          >
            Sabores
          </a>

          <a
            href="#localizacao"
            className="text-sm font-semibold text-[#3a1510] transition hover:text-[#9e0712]"
          >
            Localização
          </a>

        </nav>


        {/* BOTÃO DESKTOP */}

        <a
          href="https://wa.me/5541987031431"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[#9e0712] px-5 py-3 text-sm font-bold text-[#fff3d8] transition hover:bg-[#72050b] sm:block"
        >
          Fazer pedido
        </a>


        {/* BOTÃO MOBILE */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-[#9e0712] sm:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>


      {/* MENU MOBILE */}

      {menuOpen && (
        <div className="border-t border-[#f2c56b]/30 bg-[#fff3d8] px-6 py-5 sm:hidden">

          <nav className="flex flex-col gap-4">

            <a
              href="#inicio"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-[#3a1510]"
            >
              Início
            </a>

            <a
              href="#sobre"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-[#3a1510]"
            >
              Sobre
            </a>

            <a
              href="#sabores"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-[#3a1510]"
            >
              Sabores
            </a>

            <a
              href="#localizacao"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-[#3a1510]"
            >
              Localização
            </a>

            <a
              href="https://wa.me/5541987031431"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-[#9e0712] px-5 py-3 text-center font-bold text-[#fff3d8]"
            >
              Fazer pedido
            </a>

          </nav>

        </div>
      )}

    </header>
  )
}

export default Navbar