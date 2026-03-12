import "./Catalog.css";
import Product from "../components/Product";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog(){
    const [products, setProdcuts] = useState([]);
    // const prodcuts = [];
    useEffect(()=>
        {
            // load you data
            let service = new DataService();
            let data = service.getProducts();
            setProdcuts(data);
    },[]); // the empty array [] means this effect runs only ONCE

    return(
        <div className="catalog">
            <h1>Check our amazing products</h1>
            {products.map(prod => <Product key={prod._id} data={prod}/>)}
        </div>
    )
}

export default Catalog;