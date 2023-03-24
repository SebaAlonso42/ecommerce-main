import React, { useState } from 'react';
import 'react-credit-cards-2/es/styles-compiled.css';
import Cards from 'react-credit-cards-2';
import { useCartContext } from "../../context/CartContext";
import '../Tarjeta/paymentform.css'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const PaymentForm = () => {

  const { cart, totalPrice,  clearCart } = useCartContext();
    const initialStateValues={
      number: "",
      expiry: "",
      cvc: "",
      name: "",
    }

    const[values, setValues]=useState(initialStateValues);
    const navegar = useNavigate()
    //capturar los cambios de los input
    const handleInputChange=e=>{
      const {name,value}=e.target;
      setValues({...values, [name]:value})
    }
    
    const order = {
      datosPago:values,
      items: cart.map((productos) => ({
        id: productos.id,
        title: productos.title,
        price: productos.price,
        cantidad: productos.cantidad,
      })),
      total: totalPrice(),
      
    };
  
    const datosUsuario = () => {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, {
        
        item: order,})
        
        .then(({ id }) => {
          navegar(`/GraciasCompra/${id}`) 

        });
        
    };

    const handleSubmit=e=>{
    e.preventDefault();
    datosUsuario()
    clearCart();
    }
    
    return (
      <>
      <div className='card' id='PaymentForm'>
        <div className='card-body'>
        <Cards
          number={values.number}
          name={values.name}
          expiry={values.expiry}
          cvc={values.cvc}
          
          
          
        />
        <form >
            <div className='form-group'>
                <label htmlFor='number'>Número de la Tarjeta</label>
                <input
                 type="text"
                 name='number'
                 maxLength="16"
                 id='number'
                 className='form-control'
                 onChange={handleInputChange}
                 
                />

            </div>
            <div className='form-group'>
                <label htmlFor='name'>Nombre</label>
                <input
                 type="text"
                 name='name'
                 id='name'
                 className='form-control'
                 onChange={handleInputChange}
                 
                />

            </div>
            <div className='form-row'>
                <div className='form-group_fecha col-md-6'>
                    <label htmlFor='expiry'>Fecha de Expiración</label>
                    <input
                    type="text"
                    maxLength="5"
                    name='expiry'
                    id='expiry'
                    className='form-control'
                    onChange={handleInputChange}
                    
                   
                    />

                </div>
                <div className='form-group_fecha col-md-6'>
                    <label htmlFor='cvc'>CVC</label>
                    <input
                    type="text"
                    maxLength="4"
                    name='cvc'
                    id='cvc'
                    className='form-control'
                    onChange={handleInputChange}
                   
                    />

                </div>
            </div>
           <button className="btn btn-success btn-block btn-lg pagar" onClick={handleSubmit} 
               >Pagar</button>
           
           
        </form>
        </div>
        
      </div>
     
    </>
    );
  }

  export default PaymentForm;