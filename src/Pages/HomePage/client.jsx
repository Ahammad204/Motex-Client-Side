import tik from "../../assets/Imges/Car Logo/verified.png"

const Client = () => {
    return (
        <div>
         
            <div className="md:flex mt-4 justify-between gap-3">
                
                <div className="mt-7">
                    <h1 className="font-bold text-5xl">Download <span className="text-[#ED1D26]">Our Motex</span> <br />  App For Free</h1>

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
                <div className="ml-6">
                    <img src={"https://i.ibb.co/56R3R8C/App.png"} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Client;