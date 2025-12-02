import {createContext,useState} from 'react'
//create context object
export const productsContextObj=createContext()

function ProductsContext({children}) {

    //state
    const [productsCount,setProductsCount]=useState(5)
   
    //add item by customer
    //whenever customer add  a product, 
    // the product count need to be decremented by 1
    const addProductByCustomer=()=>{
        setProductsCount(productsCount-1)
    }


  return (
    <div>
        <productsContextObj.Provider value={{productsCount,addProductByCustomer}}>
                {children}
        </productsContextObj.Provider>
    </div>
  )
}

export default ProductsContext