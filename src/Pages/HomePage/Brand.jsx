/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Brand = ({brand}) => {

    const {_id,name,photo} = brand || {}

    return (
        <div>
            
           
                {/* Brands-1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="flex-grow">
                        <img src={photo} alt="Toyota" className="rounded-xl w-72 h-60" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title font-extrabold text-3xl">{name}</h2>
                      
                    </div>
                </div>
                {/* Brands-2 */}
              {/*   <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/wQRVs4T/FordLogo.png"} alt="Ford" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold text-3xl mt-11">FORD</h2>
                      
                    </div>
                </div> */}
                {/* Brands-3 */}
             {/*    <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/PhjshD0/bmw-logo-removebg.png"} alt="BMW" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-extrabold text-3xl mt-20">BMW</h2>
                      
                    </div>
                </div> */}
                {/* Brands-4 */}
                {/* <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/qM5f1sZ/mercedes-benz-logo-png-6.png" }alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold text-3xl ">MERCEDES BENZ</h2>
                      
                    </div>
                </div> */}
                {/* Brands-5 */}
              {/*   <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/Zhvt8JK/tesla-logo-A847167-C8-B-seeklogo-com.png"} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold text-3xl ">TESLA</h2>
                      
                    </div>
                </div> */}
                {/* Brands-6 */}
                {/* <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/Mg5Mr66/pngimg-com-honda-PNG102928.png"} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-extrabold text-3xl mt-24">HONDA</h2>
                      
                    </div>
                </div> */}
            </div>
      
    );
};

export default Brand;