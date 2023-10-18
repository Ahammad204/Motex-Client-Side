import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const Client = () => {
    return (
        <div>

            <div className="md:flex mt-4 justify-between gap-3">

                <div className="mt-7">
                    <h1 className="font-bold text-5xl">Download <span className="text-[#ED1D26]">Our Motex</span> <br />  App For Free</h1>

                    <p className="mt-8 font-medium text-lg">Download our motex app for free... <br /> And enjoy our services from mobile.</p>

                    <div className=" md:flex mt-10 gap-5">
                        
                        <div className="flex gap-3 bg-[#ED1D26] text-white rounded-xl justify-center items-center  btn h-auto hover:bg-[#ED1D26]">
                           <FaGooglePlay className="w-10 h-20"></FaGooglePlay>
                          <div className=""> 
                          <span>Get it on</span><br />
                           <p>Play Store</p>
                          </div>
                          
                        </div>
                        <div className="flex gap-3 bg-[#ED1D26] text-white pl-5 pr-5 rounded-xl justify-center items-center cursor-pointer btn h-auto hover:bg-[#ED1D26]">
                           <FaAppStore className="w-10 h-20"></FaAppStore>
                          <div className=""> 
                          <span>Get it on</span><br />
                           <p>App Store</p>
                          </div>
                          
                        </div>
                        
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