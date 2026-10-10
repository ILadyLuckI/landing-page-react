import { restaurant } from '../data/restaurant'

function FoodCard({ image, title, description }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-[#fff3d8] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-[#9e0712]/10" />
      </div>

      <div className="p-6 md:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9e0712]">
          {restaurant.name}
        </p>

        <h3 className="mt-2 text-2xl font-black text-[#72050b]">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-[#633d32]">
          {description}
        </p>
      </div>

    </article>
  )
}

export default FoodCard