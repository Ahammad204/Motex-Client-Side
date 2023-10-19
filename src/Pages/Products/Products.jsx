/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const { name } = useParams();

    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/car`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item.brand === name );
            setProducts(filteredProducts);
            console.log(filteredProducts)
            console.log(data)
            

        };
     
        fetchData();
    }, [name]);

    const { _id, name: productName, brand:brandName, type, price, short, rating2, photo } =
    products || {};

    console.log(products)

    return (
        <div>
            <h1 className="text-center font-bold text-6xl mb-5"> Our Top Quality <span className="text-[#ED1D26]">  Cars</span></h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {products.map(prod => (
                    <div className="card bg-base-100 shadow-xl" key={prod._id}>
                        <figure><img src={prod.photo} alt={prod.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{prod.name}</h2>
                            <p>{prod.short}</p>
                            <p>{prod.brand}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
