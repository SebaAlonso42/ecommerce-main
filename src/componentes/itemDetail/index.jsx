import React,{useState} from "react";
import '../itemDetail/itemDetail.css';
import ItemCount from "../itemCount/index";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";



export const ItemDetail =({data})=>{

   const [goToCard, setgoToCard]=useState(false);
   const { addProduct } = useCartContext();

    const onAdd = (cantidad)=>{
       setgoToCard(true);
       addProduct(data, cantidad);
    }
    return(
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.imagen} alt=""/>
                <div className="content">
                    <h1 className="content-titulo">{data.title}</h1>
                    <p className="content-titulo">{data.descripcion}</p> 
                    <p className="content-precio">${data.price}</p>
                    {/* aqui establezco el valor inicial del contador y el valor del stock el maximo del contador esta informacion se la paso por props a la funcion del componente ItemCount*/}

                    {
                        goToCard
                        ? <Link to ="/cart" className="terminar_compra">Terminar Compra</Link>
                        :<ItemCount inicial={0} stock={5} onAdd={onAdd}/>
                    }
                   
                    
                </div>

            </div>

        </div>
    );
}

export default ItemDetail;