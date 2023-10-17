import tik from "../../assets/Imges/Car Logo/verified.png"

const AboutUs = () => {
    return (
        <div>
             <h1 className="text-center font-extrabold text-7xl mb-3"> <span className="text-[#ED1D26]">A</span>bout Us </h1> <hr />
            <div className="md:flex mt-4 justify-between gap-3">
                <div >
                    <img src={"https://i.ibb.co/GxNmrT9/01.png"} alt="" />
                </div>
                <div className="mt-7">
                    <h1 className="font-bold text-5xl">World Largest <span className="text-[#ED1D26]">Car</span> <br /> <span className="text-[#ED1D26]">Dealer</span> Marketplace.</h1>

                    <p className="mt-8 font-medium text-lg">At Motex, we are passionate about delivering top-quality  <br /> vehicles and exceptional service. Discover your dream car with us today</p>

                    <div className="flex mt-14">
                        <img className="h-7 mr-3 " src={tik} alt="" />
                        <p>Diverse Vehicle Selection</p>
                    </div>
                    <div className="flex mt-4">
                        <img className="h-7 mr-3 " src={tik} alt="" />
                        <p>Exceptional Customer Service</p>
                    </div>
                    <div className="flex mt-4">
                        <img className="h-7 mr-3 " src={tik} alt="" />
                        <p>24/7 Services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;