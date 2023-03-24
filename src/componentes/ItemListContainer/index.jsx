import React, {useState, useEffect}from "react";
import { yellow } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import '../itemCount/itemCount.css';
import {getFirestore, collection, getDocs,query, where} from 'firebase/firestore';
import ItemList from "../itemList";
import { useParams } from "react-router-dom";




 const ItemListContainer=(props)=>{

    const [data, setData]=useState([]);

    const{categoriaId}=useParams();
       
    useEffect(()=>{
        const querydb=getFirestore();
        const queryCollection=collection(querydb,'productos');
        //para filtrar
        if(categoriaId){
            const queryFilter=query(queryCollection,where ('category', '==',categoriaId ))
            getDocs(queryFilter)
                .then(res=>setData(res.docs.map(productos=>({id:productos.id, ...productos.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res=>setData(res.docs.map(productos=>({id:productos.id, ...productos.data()}))))
        }

        
    },[categoriaId])

    
    return(
        <>
        
        <div>
            <PersonIcon className="avatar" sx={{ color: yellow[500] }} fontSize="large"/>


        </div>
        
        <div className="item">
            <ItemList data={data}/>
        </div>
        
        </>
        
    );
}

export default ItemListContainer;