export default function Card({
  image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
  title = "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  rating = "5.0",
  price = "$599",
}) {
  return (
    <div
      className="
        w-full
        max-w-sm
        bg-white
        dark:bg-black
        border
        border-gray-200
        dark:border-neutral-800
        rounded-2xl
        shadow-lg
        overflow-hidden
      "
    >
      <a href="#">
        <img
          className="p-8 rounded-t-2xl w-full h-64 object-cover"
          src={image}
          alt={title}
        />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5
            className="
              text-xl
              font-semibold
              tracking-tight
              text-gray-900
              dark:text-white
              hover:text-gray-600
              dark:hover:text-gray-300
              transition-colors
            "
          >
            {title}
          </h5>
        </a>

        <div className="flex items-center mt-3 mb-5">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.45 8.92a1.52 1.52 0 0 0 .5.762l3.655 3.564-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>

          <span className="bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
            {rating}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>

          <button
            type="button"
            className="
              text-white
              bg-blue-600
              hover:bg-blue-700
              focus:ring-4
              focus:outline-none
              focus:ring-blue-300
              dark:focus:ring-blue-800
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              cursor-pointer
              transition-colors
            "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}