import { mockFoods } from '../../mock';

const { createContext, useState } = require('react');

export const AppContext = createContext();

export function AppProvider({ children }) {
  // Продукты в корзине
  const [cartItems, setCartItems] = useState([]);

  // Общая цена - Subtotal
  const [total, setTotal] = useState(0);

  // Корзина
  const [foods, setFoods] = useState(mockFoods)

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeById = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  function innerToCart(id) {
    let newList = foods.map(item => {
      if(item.id === id) {
        item.inCart = !item.inCart
      }
      return item;
    })
    setFoods(newList)
  }

  return (
    <AppContext.Provider value={{ cartItems, addToCart, removeById, setTotal, total, foods, setFoods, innerToCart }}>
      {children}
    </AppContext.Provider>
  );
}