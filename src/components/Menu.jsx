import FoodCard from "./FoodCard";
import prato1 from "../assets/images/prato1.jpg";
import prato2 from "../assets/images/prato2.jpg";
import prato3 from "../assets/images/prato3.jpg";

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
      className="bg-[#9e0712] px-6 py-20 md:py-28"
    >

      <div className="mx-auto max-w-6xl">

        {/* CABEÇALHO */}

        <div className="text-center text-[#fff3d8]">

          <p className="font-bold uppercase tracking-[0.25em] text-[#f2c56b]">
            Conheça
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Nossos sabores
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#f8dfb0]">
            Uma seleção preparada com carinho para você
            descobrir novos sabores.
          </p>

        </div>


        {/* CARDS */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

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