import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
	const { cantidad = 0 } = cart.find(productos => productos.id === item.id) || {};
	const newCart = cart.filter(productos => productos.id !== item.id);
	setCart([...newCart, { ...item, cantidad: cantidad + newQuantity }])
	}

    console.log('carrito', cart);
    
    const clearCart = () => setCart([]);

    //me indica el total a pagar, es la suma de cada producto x su precio. 
    const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
	};

    //totalProducts es para el numerito del cartWidget
	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.cantidad,
			0,
		);

	const isInCart = (id) =>
		cart.find((productos) => productos.id === id) ? true : false;

	const removeProduct = (id) =>
		setCart(cart.filter((productos) => productos.id !== id));

			
	
  

	return (
		<CartContext.Provider
			value={{
				clearCart,
				isInCart,
				removeProduct,
				addProduct,
                totalPrice,
                totalProducts,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
    