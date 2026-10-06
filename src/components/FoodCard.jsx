function FoodCard({ image, title, description }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-[#fff3d8] shadow-lg">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-black text-[#72050b]">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-[#633d32]">
          {description}
        </p>

      </div>

    </article>
  )
}

export default FoodCard