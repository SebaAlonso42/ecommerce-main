import React,{useEffect, useState} from "react";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "../itemDetail";
import {useParams} from "react-router-dom";
import '../itemDetailContainer/itemDetailContainer.css';



export const ItemDetailContainer =()=>{

    const[data, setData]=useState({});
    const{detalleId}=useParams();

    useEffect(()=>{
       const querydb=getFirestore();
       const queryDoc=doc(querydb,'productos',detalleId); 
       getDoc(queryDoc)
       .then(res=>setData({id:res.id, ...res.data()}))
    },[detalleId])
    
    return(
        <div className="detalles_producto">
            <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer;