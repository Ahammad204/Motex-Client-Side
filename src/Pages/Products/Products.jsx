/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import banner1 from "../../assets/Imges/Slider/Fordbanner1.jpg"
import banner2 from "../../assets/Imges/Slider/Fordbanner2.jpg"
import banner3 from "../../assets/Imges/Slider/Fordbanner3.jpg"

const Products = () => {
    const [products, setProducts] = useState([]);
    const { name } = useParams();


    //Fetch car data by brand
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/car`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item.brand === name);
            setProducts(filteredProducts);
            console.log(filteredProducts)
            console.log(data)


        };

        fetchData();
    }, [name]);



    return (
        <div>

            <div>
                <div className="carousel w-full h-96">
                    <div id="slide1" className="carousel-item relative w-full h-96">
                        <img src={banner1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-96">
                        <img src={banner2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                   
                </div>
            </div>


            <h1 className="text-center font-bold text-6xl mb-5"> Our Top Quality <span className="text-[#ED1D26]">  Cars</span></h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {products?.map(prod => (
                    <div className="card bg-base-100 shadow-xl" key={prod._id}>
                        <figure><img className="w-full h-72" src={prod.photo} alt={prod.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-extrabold text-3xl">{prod.name}</h2>
                            <p className="text-lg font-medium ">{prod.short}</p>
                            <p className="text-base font-semibold mt-4">BRAND: {prod.brand}</p>
                            <p className="text-base font-semibold ">Car Type: {prod.type}</p>
                            <p className="text-xl font-semibold text-[#ED1D26]">Price: {prod.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#ED1D26] hover:bg-[#ED1D26] text-white">Details</button>
                                <button className="btn bg-[#ED1D26] hover:bg-[#ED1D26] text-white">Update</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
