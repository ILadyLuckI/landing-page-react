import aboutImage from '../assets/images/about.png'
import { restaurant } from '../data/restaurant'

function About() {
  return (
    <section
      id="sobre"
      className="bg-[#fff3d8] px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* IMAGEM */}

        <div className="group relative overflow-hidden rounded-4xl">
              <img
                src={aboutImage}
                alt="Ambiente e culinária do restaurante árabe"
                className="h-112.5 w-full object-cover transition duration-700 group-hover:scale-105"
              />

        <div className="pointer-events-none absolute inset-0 bg-[#9e0712]/10 transition duration-500 group-hover:bg-transparent" />
      </div>


        {/* TEXTO */}

        <div>

          <p className="font-bold uppercase tracking-[0.25em] text-[#9e0712]">
            Nossa história
          </p>

          <h2 className="mt-3 max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-[#3a1510] md:text-5xl">
            Mais do que uma refeição.
            <span className="mt-2 block text-[#9e0712]">
              Uma experiência.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-[#633d32]">
            O {restaurant.name} nasceu para trazer para Antonina uma
            experiência especial através da culinária árabe,
            reunindo sabores, aromas e tradição.
          </p>

          <p className="mt-4 leading-8 text-[#633d32]">
            Cada prato é uma oportunidade de conhecer um pouco
            mais dessa cultura e compartilhar bons momentos
            à mesa.
          </p>

          <div className="mt-8 border-l-4 border-[#f2c56b] pl-5">
            <p className="text-lg font-semibold italic text-[#72050b]">
              "Sabores que atravessam gerações."
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About