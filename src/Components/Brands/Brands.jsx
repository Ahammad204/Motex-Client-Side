/* eslint-disable react/prop-types */
import Brand from "../../Pages/HomePage/Brand";


const Brands = ({ brands }) => {
    return (
        <div>
            <h1 className="text-center font-bold text-6xl mb-5"> Our Top Quality <span className="text-[#ED1D26]">Brands</span></h1>
            <hr  />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

                {

                    
                    
                    brands?.map(brand => <Brand key={brand._id} brand={brand}></Brand>)


                }


            </div>
        </div>
    );
};

export default Brands;