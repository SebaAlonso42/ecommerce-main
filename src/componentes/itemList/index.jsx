import Item from '../item';
import React from 'react';

const ItemList =({data=[]})=>{
    return(
        data.map(productos=><Item key={productos.id} info={productos}/>)
    )
}

export default ItemList;