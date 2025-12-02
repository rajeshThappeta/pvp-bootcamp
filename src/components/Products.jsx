import {useContext} from 'react'
import { productsContextObj } from '../contexts/ProductsContext'

function Products() {

  //read data from ProductsContext
  const {productsCount}=useContext(productsContextObj)

  

  return (
    <div className='text-center bg-primary'>
      <h1 className='display-3 text-warning'>Products</h1>
        <p className="display-5 text-white">Avaialability : {productsCount}</p>
    </div>
  )
}

export default Products