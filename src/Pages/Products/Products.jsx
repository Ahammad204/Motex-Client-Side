/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";


const Products = () => {

    const [products, setProducts] = useState({})
    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`http://localhost:5000/car`);
            const data = await response.json();
            const index = data.findIndex((item) => item.name === name);
            setProducts(data[index]);

        };

        fetchData();
    }, [name]);



    const { _id,name:productName,brand,type,price, short ,rating2,photo} =
    products || {}; 

    return (
        <div>
           <h1 className="text-center font-bold text-6xl mb-5"> Our Top Quality <span className="text-[#ED1D26]">{productName} Cars</span></h1>
            <hr  />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

                {

                    products?.map(prod => <Product key={prod.productName} prod = {prod} ></Product> )

                }


            </div>
        </div>
    );
};

export default Products;