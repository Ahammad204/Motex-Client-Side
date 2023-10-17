

const Brand = () => {
    return (
        <div>
            <h1 className="text-center font-extrabold text-7xl mb-3"> <span className="text-[#ED1D26]">B</span>rands </h1>
            <hr  />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {/* Brands-1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/qr7QGtQ/Toyota-Logo.jpg"} alt="Toyota" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title font-extrabold text-3xl">TOYOTA</h2>
                      
                    </div>
                </div>
                {/* Brands-2 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/wQRVs4T/FordLogo.png"} alt="Ford" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold text-3xl mt-11">FORD</h2>
                      
                    </div>
                </div>
                {/* Brands-3 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/PhjshD0/bmw-logo-removebg.png"} alt="BMW" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-extrabold text-3xl mt-20">BMW</h2>
                      
                    </div>
                </div>
                {/* Brands-4 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/qM5f1sZ/mercedes-benz-logo-png-6.png" }alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold text-3xl ">MERCEDES BENZ</h2>
                      
                    </div>
                </div>
                {/* Brands-5 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/Zhvt8JK/tesla-logo-A847167-C8-B-seeklogo-com.png"} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold text-3xl ">TESLA</h2>
                      
                    </div>
                </div>
                {/* Brands-6 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={"https://i.ibb.co/Mg5Mr66/pngimg-com-honda-PNG102928.png"} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-extrabold text-3xl mt-24">HONDA</h2>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;