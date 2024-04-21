import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../Store/cartSlice";
import RestBodyAccordion from "./RestBodyAccordion";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
 // console.log(cartItems.card[0].info);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <p>No items in the carts</p>}
      <RestBodyAccordion items = {cartItems}/>
      
    </div>
  );
};

export default Cart;
