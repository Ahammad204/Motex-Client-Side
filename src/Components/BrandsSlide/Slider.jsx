
import Swal from "sweetalert2";

const Slider = () => {
    const handleAddBrand = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const photo2 = form.photo2.value;
        const photo3 = form.photo3.value;

        const newBrandSlider = { name, photo,photo2,photo3 }

        console.log(newBrandSlider);

        //send data to the server
        fetch('https://motex-server-gm0kszbfc-kazi-ahammad-ullahs-projects.vercel.app/slide', {

            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(newBrandSlider)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }

            })

        // form.reset();

    }

    return (
        <div className=" p-10">
            <h2 className="text-3xl font-extrabold text-center mb-6">Add a Brand Slider</h2> <hr />
            <form onSubmit={handleAddBrand} className="mt-4">

                {/* Name and Slider row */}
                <div className=" mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand slider img</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand slider img</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo2" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand slider img</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo3" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>






                <input className="btn btn-block text-white bg-[#ED1D26] hover:bg-[#ED1D26] " type="submit" value="Add Brand" />
            </form>
        </div>
    );
};/*  */

export default Slider;