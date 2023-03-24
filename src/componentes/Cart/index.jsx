import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/index";
import '../ItemCart/itemCart.css';
import '../itemCount/itemCount.css';

const Cart = () => {
	const { cart, totalPrice } = useCartContext();
	
	

	if (cart.length === 0) {
		return (
			<>   <div className="links">
				<p className="p_productos">No hay elementos en el carrito</p>
				<Link to="/" className="agregar_productos">Agregar más Productos</Link>
				</div>
			</>
		);
	}

	return (
		<> 
			<div className="Imagen-total">
			{cart.map((productos) => (
				<ItemCart key={productos.id} productos={productos} />
			))}
			<p className="Imagen-total_detalle">Total a Pagar: {totalPrice()}</p>
			
			<Link to="/PaymentForm"><button className="Imagen-total_boton" >Emitir compra</button></Link>
			</div>
			
		</>
	);
};

export default Cart;