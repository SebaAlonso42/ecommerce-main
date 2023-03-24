import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  yellow } from '@mui/material/colors';
import { useCartContext } from "../../context/CartContext";



const CartWidget=()=>{
    const { totalProducts } = useCartContext();
    return(
        <div className="cart">
            <ShoppingCartIcon fontSize="large" sx={{ color: yellow[500] }}/>
            <span className="item__total">{totalProducts() || ""}</span>
          </div>
    )
}

export default CartWidget;