/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [slider, setSlider] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { name } = useParams();


    //Fetch car data by brand
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/car`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item.brand === name);
            setProducts(filteredProducts);
            setIsLoading(false);

        };

        fetchData();
    }, [name]);


    //Fetch slider data by brand
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/slide`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item.name === name);
            setSlider(filteredProducts);
            console.log(filteredProducts)
            console.log(data)
            setIsLoading(false);
        };

        fetchData();
    }, [name]);

    console.log(slider)

    return (
        <div>
            {products.length > 0 ? (

                <div>

                    <div>

                        <div className="">
                            {slider?.map(slide => (
                                <div className="carousel w-full h-96" key={slide._id} >
                                    <div id="slide1" className="carousel-item relative w-full h-96">
                                        <img src={slide.photo} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide3" className="btn btn-circle">❮</a>
                                            <a href="#slide2" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide2" className="carousel-item relative w-full h-96">
                                        <img src={slide.photo2} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide1" className="btn btn-circle">❮</a>
                                            <a href="#slide3" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide3" className="carousel-item relative w-full">
                                        <img src={slide.photo3} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide2" className="btn btn-circle">❮</a>
                                            <a href="#slide1" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                    <h1 className="text-center font-bold text-6xl mb-5 mt-5"> Our Top Quality <span className="text-[#ED1D26]">  Cars</span></h1>
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


            ) : (

                <div>
                {isLoading ? (
                    <div className="flex justify-center items-center mt-20">
                        <div className="hero w-2/3 h-2/3">
                            <div className=""></div>
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                <span className="loading loading-bars loading-lg"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
              
                    <div className="flex justify-center items-center mt-20">
                    <div className="hero w-2/3 h-2/3" >
                        <div className=""></div>
                        <div className="hero-content text-center ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hey Car Hunter</h1>
                                <p className="mb-5 text-xl">There is noting to show <br /> Can you want to add Something</p>
                                <Link to={"/addProduct"}><button className="btn text-white bg-[#ED1D26] hover:bg-[#ED1D26]">Add Car</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>

            )



            }
        </div>
    );
};

export default Products;
