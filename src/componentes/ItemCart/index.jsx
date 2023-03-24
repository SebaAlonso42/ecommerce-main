import React from 'react';

import { useCartContext } from '../../context/CartContext';
import './itemCart.css';



const ItemCart = ({ productos }) => {
    const { removeProduct } = useCartContext();
    return (
       <>
       <div className='container-Imagen'>
            <div className='Imagen'>
                <img  src={productos.imagen} alt={productos.title} />
           </div>
                <div className='Imagen-Detalles'>
                   <p className='Imagen-detalles-titulo'>{productos.title}</p>
                   <p className='Imagen-detalles-titulo'>{productos.descripcion}</p>    
                   <p  className='Imagen-detalles-cantidad'>Cantidad: {productos.cantidad}</p> 
                   <p>Precio $ {productos.price}</p> 
                   <p>Subtotal: ${productos.cantidad * productos.price}</p> 
                    <button className='boton' onClick={() => removeProduct(productos.id)}>Eliminar</button>
                </div>
       </div>
            
            
       </>
        
    )
}

export default ItemCart