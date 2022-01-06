import React from 'react';
import {useParams,Navigate } from 'react-router-dom';

export const Productdetails = () => {
    const {id} = useParams();
    const [product, setProduct] = React.useState({});
    React.useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`).then((res) => res.json()).then((res) => setProduct(res));
    }, [id]);
    console.log(product);
    
    // if (Object.keys(product).length===0) {
    //     return <Navigate to={"*"}/>
    // }
    return (
        <div>
            <img src={product.image} alt="selected" />
            <h2>Name : {product.name}</h2>
            <h4>Price : ${ product.price}</h4>
        </div>
    )
}