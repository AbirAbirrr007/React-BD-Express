import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import {CartContext} from '../context/CartContext'
const Products = () => {
  const { products } = useContext(productContext);
  const {dispatch} = useContext(CartContext)
  return (
    <div className="product">
      {products.map((product) => {
        const { img, category, name, price, desc } = product;
        return (
          <>
            <div className="product-card" key={product.id}>
            {product.productStatus === "Hot" ? (
                <div className="hot">Hot</div>
              ) : (
                ""
              )}
              {product.productStatus === "New" ? (
                <div className="new">New</div>
              ) : (
                ""
              )}
              <img className="product-img" src={img} alt={name} />
              <div className="product__details">
                <h4>{name}</h4>
                <b>${price}</b>
                <p>{desc}</p>
              </div>
              <div className="product__Buttons">
                <button className="btn__Buy">Buy Now</button>
                <button className="btn__Add" onClick={()=> dispatch({type:'ADD_TO_CART',id:product.id,product})}>Add To Cart</button>
              </div>
              
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
