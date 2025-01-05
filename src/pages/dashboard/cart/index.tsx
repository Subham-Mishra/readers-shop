import { FaPlusSquare, FaTrash } from "react-icons/fa";
import { useShoppingCart } from "~/hooks/useCart";
import type { CartItem } from "~/iterfaces";
import { findBookById } from "~/utils";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, getTotalPrice, changeQuantity } =
    useShoppingCart();

  return (
    <div className="h-[calc(100vh-4rem)] p-4 bg-slate-700 text-gray-200">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 ">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item: CartItem) => (
                <li
                  key={item.bookId}
                  className="flex items-center justify-between py-2"
                >
                  <div className="w-[50rem]">
                    <h2 className="text-lg font-semibold">
                      {findBookById(item.bookId)?.name}
                    </h2>
                  </div>
                  <div className="w-96">
                    <p className="text-lg">
                      Rs.
                      {findBookById(item.bookId)?.price
                        ? findBookById(item.bookId)!.price * item.quantity
                        : "N/A"}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center cursor-pointer w-96">
                    Quantity: {item.quantity}{" "}
                    <FaPlusSquare
                      onClick={() =>
                        changeQuantity(item.bookId, item.quantity + 1)
                      }
                    />
                  </div>
                  <div className="w-60">
                    <button
                      onClick={() =>
                        item.quantity == 1
                          ? removeFromCart(item.bookId)
                          : changeQuantity(item.bookId, item.quantity - 1)
                      }
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="my-4 py-2 pr-20 flex justify-end gap-4 border-t border-gray-800">
              <p className="font-semibold">Total:</p>
              <p className="text-xl">${getTotalPrice()}</p>
            </div>
            <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
