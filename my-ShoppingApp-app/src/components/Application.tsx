import { useState } from "react";
import { useCart } from "../Hooks/Product";
import Home from "./View/Home";
import Cart from "./View/Cart";
import "../Style.css";

function Application() {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Project Dashboard</div>
        <nav className="nav">
          <ul>
            <li onClick={() => setShowCart(false)}>Home</li>
            <li onClick={() => setShowCart(true)}>Cart ({cart.length})</li>
            <li>Profile</li>
            <li>Login/Signup</li>
          </ul>
        </nav>
      </header>

      <main>
        {showCart ? (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ) : (
          <Home addToCart={addToCart} cart={cart} />
        )}
      </main>
    </div>
  );
}

export default Application;