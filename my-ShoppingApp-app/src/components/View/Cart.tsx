import { Project } from "../../Utils/Constant/data"; 
interface CartProps {
  cart: Project[]; 
  updateQuantity: (id: string, quantity: number) => void;   
  removeFromCart: (id: string) => void; 
}


function Cart({ cart, updateQuantity, removeFromCart }: CartProps) {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
                width="100"
                height="100"
              />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>
                  <strong>Budget:</strong> ${item.budget.toLocaleString()}
                </p>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity < 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;