import React from 'react'
     
const Product = ({product, onAdd}) => {

  return (
    <>
    <div>
    <img className="small" style={{width:'400px', height:'400px'}} src={product.img} alt={product.name} />
    <h3>{product.title}</h3>
    <div>{product.prize}</div>
    <div>
      <button onClick={() => onAdd(product)}>Add To Cart</button>
    </div>
  </div>
    </>
  )
}

export default Product