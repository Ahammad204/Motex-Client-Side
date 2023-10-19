/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Product = ({ prod }) => {

    const { _id, name: productName, brand, type, price, short, rating2, photo } =
        prod || {};

        console.log(prod)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;