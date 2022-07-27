import React from 'react'
 import Product from './Product'
const Main = ({products , onAdd}) => {
  
  return (
       <>
       {products?.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
       </>
  )
}

export default Main