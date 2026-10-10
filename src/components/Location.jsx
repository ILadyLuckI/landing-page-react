import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { restaurant } from '../data/restaurant'

function Location() {
  return (
    <section
      id="localizacao"
      className="bg-[#3a1510] px-6 py-20 text-[#fff3d8] md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 md:grid-cols-2">

          {/* INFORMAÇÕES */}

          <div>

            <p className="font-bold uppercase tracking-[0.25em] text-[#f2c56b]">
              Onde estamos
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Venha conhecer o { restaurant.name}
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#d9bfa5]">
              Estamos esperando por você para uma experiência
              especial de sabores e cultura árabe em Antonina.
            </p>


            {/* ENDEREÇO */}

            <div className="mt-8 flex gap-4">

              <MapPin
                className="mt-1 shrink-0 text-[#f2c56b]"
                size={24}
              />

              <div>
                <p className="font-bold">
                  Endereço
                </p>

                <p className="mt-1 text-[#d9bfa5]">
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.city}
                </p>
              </div>

            </div>


            {/* HORÁRIO */}

            <div className="mt-6 flex gap-4">

              <Clock
                className="mt-1 shrink-0 text-[#f2c56b]"
                size={24}
              />

              <div>
                <p className="font-bold">
                  Horário
                </p>

                <p className="mt-1 text-[#d9bfa5]">
                  Consulte nossos horários
                  <br />
                  antes de visitar.
                </p>
              </div>

            </div>


            {/* BOTÃO */}

            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f2c56b] px-6 py-3 font-bold text-[#72050b] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Ver no Google Maps
              <ArrowRight size={18} />
            </a>

          </div>


          {/* MAPA / ÁREA VISUAL */}

          <div className="group relative flex min-h-87.5 items-center justify-center overflow-hidden rounded-4xl bg-[#5a281d] shadow-xl">

            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-2 border-[#f2c56b]/10 transition duration-700 group-hover:scale-110" />

            <div className="text-center">

              <MapPin
                size={48}
                className="mx-auto text-[#f2c56b]"
              />

              <p className="mt-4 text-xl font-bold">
                {restaurant.city}
              </p>

              <p className="mt-2 text-sm text-[#d9bfa5]">
                {restaurant.address.street}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Location