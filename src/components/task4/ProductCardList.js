import React, {useEffect, useState} from "react";
import Tooltip from "./Tooltip";
import { ProductCard } from "./ProductCard";

export const ProductCardList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            await fetch("https://my.api.mockaroo.com/coffee.json?key=778301b0")
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Error(')
                }
            })
            .then(result => setProducts(result))
            .catch(err => console.log(err.message))
        } 
            fetchPosts();
        },[]);
             
    return (
        <div className="task4">
            {products.map((product) => 
            <Tooltip key={product.id} product={product} render={(handleMouseMove, isTooltipShown) => <ProductCard product={product} handleMouseMove={handleMouseMove} isTooltipShown={isTooltipShown} />}/>)}
        </div>
    
    )
}
