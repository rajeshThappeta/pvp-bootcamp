import { useContext, useState } from "react";
import { productsContextObj } from "../contexts/ProductsContext";

function Customer1() {
  const { productsCount, addProductByCustomer } = useContext(productsContextObj);
  const [productsInCart,setProductsInCart]=useState(0)

  const getProductsOfCart=()=>{
    if(productsCount>0){

      setProductsInCart(productsInCart+1)
      addProductByCustomer()
    }
  }

  return (
    <div className="p-5 mt-5 bg-info text-center">
      <h1>Customer -1</h1>
      <p className="fs-1">No of products in Cart : {productsInCart}</p>
      <button className="btn btn-success" 
              onClick={getProductsOfCart} 
              disabled={productsCount === 0}>
        Add to Cart
      </button>
    </div>
  );
}

export default Customer1;
