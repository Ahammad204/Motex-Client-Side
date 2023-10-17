import { Link } from "react-router-dom";
import Time from './Time';


const Banner = () => {
    return (
        <div>
            <div className="">
                <div
                    className="hero bg-cover "
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co/hWknz4f/2010-i123-005-car-headlights-AD-composition.jpg)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <p className="mb-5 text-4xl md:text-9xl font-extrabold  text-white">
                                PH Mot<span className="text-[#ED1D26]">e</span>x
                            </p>
                            <div className="">
                                <p className="text-3xl md:text-6xl  font-semibold text-white">
                                    Best way to find your <span className="text-[#ED1D26]">Dream</span> car
                                </p>

                                <p className="mt-6 mb-3 font-bold text-lg text-center">
                                    Discover the Road to Your Dream Car at Motex: Where Driving Excellence Begins!
                                </p>
                                <p className="text-2xl md:text-5xl text-center text-white">
                                    Winter Offer Remaining
                                </p>
                               <div className="lg:pl-10 mt-4">  <Time ></Time></div>

                                <Link
                                    to="/about"
                                    className="block md:inline-block mt-4"
                                >
                                    <button className="btn bg-[#ED1D26] hover:bg-[#ED1D26] text-white border-none ">
                                        Discover Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;