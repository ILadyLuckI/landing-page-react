import FoodCard from "./FoodCard";
import prato1 from "../assets/images/prato1.jpg";
import prato2 from "../assets/images/prato2.jpg";
import prato3 from "../assets/images/prato3.jpg";
import { restaurant } from "../data/restaurant";

const foods = [
	// adicionar um id para cada prato
	{
		image: prato1,
		title: 'Entradas',
		description: 'Sabores especiais para começar sua experiência.'
	},
	{
		image: prato2,
		title: 'Especialidades',
		description: 'Receitas inspiradas na tradição da culinária árabe.'
	},
	{
		image: prato3,
		title: 'Para compartilhar',
		description: 'Porque bons momentos ficam ainda melhores juntos.'
	}
	// {
	// 	ADICIONAR MAIS PRATOS AQUI
	// }
]

function Menu() {
  return (
    <section
		id="sabores"
		className="bg-[#fff3d8] px-6 py-20 md:py-28"
	>

      <div className="mx-auto max-w-6xl">

        {/* CABEÇALHO */}

        <div className="text-center text-[#fff3d8]">

			<p className="font-bold uppercase tracking-[0.25em] text-[#f2c56b]">
			Conheça
			</p>

			<h2 className="mt-3 text-4xl font-black md:text-5xl text-[#f2c56b]">
			Nossos sabores
			</h2>

			<p className="mx-auto mt-5 max-w-xl leading-7 text-[#633d32]">
			Uma seleção preparada com carinho para você
			descobrir novos sabores.
		</p>

        </div>


        {/* CARDS */}

		<div className="mx-auto mb-12 max-w-2xl text-center">
			<p className="font-bold uppercase tracking-[0.25em] text-[#9e0712]">
				Sabores do {restaurant.name}
			</p>

			<h2 className="mt-3 text-4xl font-black tracking-tight text-[#3a1510] md:text-5xl">
				Uma experiência à mesa
			</h2>

			<p className="mt-5 leading-7 text-[#633d32]">
				Descubra sabores, aromas e combinações inspiradas
				na culinária árabe.
			</p>
		</div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          {foods.map((food)=>(
			<FoodCard 
			// substituir a key title por id
				key={food.title}
				image={food.image}
				title={food.title}
				description={food.description}
			/>
		  ))}

        </div>

      </div>

    </section>
  )
}

export default Menu