import Swal from "sweetalert2";

const AddBrands = () => {

    

    const handleAddBrand = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;

        const newBrand = { name,photo }

        console.log(newBrand);

        //send data to the server
        fetch('http://localhost:5000/brand', {

            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(newBrand)

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
            <h2 className="text-3xl font-extrabold text-center mb-6">Add a car</h2> <hr />
            <form onSubmit={handleAddBrand} className="mt-4">

                {/* Name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand img</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
             

               

              

                <input className="btn btn-block text-white bg-[#ED1D26] hover:bg-[#ED1D26] " type="submit" value="Add Brand" />
            </form>
        </div>
    );
};

export default AddBrands;