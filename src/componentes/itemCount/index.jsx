import './itemCount.css';


import React, { useState, useEffect} from 'react';

export const ItemCount=({inicial, stock, onAdd})=>{

    {/* los valores de inicial y stock las recibo del componente ItemListContainer */}

        const [contador,setContador]=useState((inicial));

        const menos=()=>{
            setContador(contador - 1);
        }

        const aumentar=()=>{
            setContador(contador + 1);
        }

        useEffect(()=>{
            setContador((inicial));
        }, [inicial])

    return(
        <div className='contador'>
            {/* con disable le coloco un limite al contador, en este caso cuando sea menor a 1 */}
            <button className='menos'  disabled={contador <=1} onClick={menos}>-</button>
            <span>{contador}</span>
            <button className='mas' disabled={contador >= stock} onClick={aumentar}>+</button>
            <div>
                {/*Si el stock es menor a cero entonces el boton de agregar al carrito queda desactivado  y si es mayor a cero entonces recibe la funcion de onAdd que lo recibe del componente ItemListContainer*/}
                <button className='agregar' disabled={stock<=0} onClick={()=> onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;