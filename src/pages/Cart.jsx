import { useOutletContext, Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  

  // Function to remove a specific item by ID
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  const CartShimmer = () => (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-gray-100 rounded-xl"></div>
        ))}
      </div>
    </div>
  );

  // If cart is null or undefined while loading
  if (!cart) return <CartShimmer />;

  // Empty State
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Your cart is empty</h2>
        <Link
          to="/"
          className="mt-4 text-indigo-600 font-medium hover:underline"
        >
          Go back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Items in your cart</h1>
        <span className="text-gray-500 font-medium">
          {cart.length} Products
        </span>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm transition-hover hover:shadow-md"
          >
            {/* Product Image */}
            <div className="w-20 h-20 shrink-0 bg-gray-50 rounded-lg p-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 capitalize">
                {item.category}
              </p>
              <p className="text-sm font-bold text-indigo-600 mt-2">
                ${item.price}
              </p>
            </div>

            {/* Remove Action */}
            <button
              onClick={() => removeItem(item.id)}
              className="group flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <span className="hidden sm:inline">Remove</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
