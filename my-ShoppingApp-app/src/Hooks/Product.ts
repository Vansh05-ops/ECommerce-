import { useState } from 'react';
import { Project } from '../Utils/Constant/data'; 

export const useCart = () => {
  const [cart, setCart] = useState<ProjectWithQuantity[]>([]);

  type ProjectWithQuantity = Project & { quantity: number };

  const addToCart = (project: Project) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === project.id);
      if (existingItem) return prevCart;  
      return [...prevCart, { ...project, quantity: 1 }];
    });
  };

  const updateQuantity = (projectId: string, newQuantity: number) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === projectId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (projectId: string) => {
    setCart((prevCart) => prevCart.filter((project) => project.id !== projectId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, updateQuantity, removeFromCart, clearCart };
};
