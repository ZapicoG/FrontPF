import React from 'react';
import Product from '../product/product';

const Products = ({product}) => {
    return ( 
        <div>
            {
                product && product.map((e)=>(
                    <Product
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    />
                ))
            }
        </div>
     );
}
 
export default Products;