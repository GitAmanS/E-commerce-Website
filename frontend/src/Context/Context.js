import { createContext, useState, useContext, useEffect } from 'react';

const Context = createContext();


const ContextProvider = ({ children }) => {
  const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    const [cart, setCart] = useState([]);

    const addToCart=(item)=>{
      setCart((oldcart)=>{
        return [...oldcart, item];
      })
    }


    const removeFromCart=(item)=>{
      setCart((oldcart)=>{
        return oldcart.form((item1)=>{return item1 !== item})
      })
    }
    
  
    return (
        <Context.Provider value={{ cartElements, cart, setCart, addToCart, removeFromCart}}>
          {children}
        </Context.Provider>
      );

};




const useData = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
  
export { ContextProvider, useData };