import Swal from "sweetalert2";

const AppProduct = () => {
    const handleAddCar = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCar = { name, quantity, supplier, taste, details, category, photo }

        console.log(newCar);

        //send data to the server
        fetch('https://coffee-store-server-m5ktpjh01-kazi-ahammad-ullahs-projects.vercel.app/coffee', {

            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(newCar)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }

            })

        // form.reset();

    }

    return (
        <div className=" p-24">
            <h2 className="text-3xl font-extrabold">Add a car</h2>
            <form onSubmit={handleAddCar}>

                {/* Name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Supplier and test */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Category and details */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Form Photo Url */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input className="btn btn-block text-white bg-[#ED1D26] hover:bg-[#ED1D26] " type="submit" value="Add Car" />
            </form>
        </div>
    );
};

export default AppProduct;