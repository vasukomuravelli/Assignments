import React from 'react';
import {Link } from 'react-router-dom';

export const Products = () => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3001/products").then((res) => res.json()).then((res) => { setProducts(res) });
    }, []);

    console.log(products);;
    return (
        <div style={{display: 'grid',gridTemplateColumns : "Repeat(4,auto)", margin : "50px"}}>
            {products.map((e) => {
                return (
                <Link to={`/products/${e.id}`}><div>
                    <img src={e.image} alt="products" style={{width : "150px"}}/>
                    <h5>Name : {e.name}</h5>
                    <p>Price : ${e.price}</p>
                </div></Link>)  
            })}
        </div>
    )
}