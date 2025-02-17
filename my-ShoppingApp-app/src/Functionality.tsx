
import { useState } from 'react';
import { Project } from './components/data'; 

export const useCart = () => {
  const [cart, setCart] = useState<Project[]>([]);

  const addToCart = (project: Project) => {
    setCart((prevCart) => [...prevCart, project]);
  };

  const removeFromCart = (projectId: string) => {
    setCart((prevCart) => prevCart.filter((project) => project.id !== projectId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};
