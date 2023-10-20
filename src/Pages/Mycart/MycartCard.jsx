/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const MycartCard = ({ cart,setCarts,carts }) => {

    const { _id, name, brand, type, price, photo } = cart || {}
    console.log(_id, name, brand, type, price)

    const handleDelete = _id => {

        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://motex-server.vercel.app/cart/${_id}`,{

                    method:'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your car has been deleted.',
                                'success'
                            )
                            const reamaining = carts.filter(cof => cof._id !== _id)
                            setCarts(reamaining)

                        }

                    })
            }
        })

    }

    return (
        <div>

            <div className="card bg-base-100 shadow-xl ">
                <figure><img className="w-full h-96" src={photo} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>


                    <div className="card-actions justify-end">
                        <p className="text-lg font-outfit font-medium">Price: {price}</p>

                        <button onClick={() => handleDelete(_id)} className="btn text-white border-none  bg-[#ED1D26] hover:bg-[#ED1D26] ">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MycartCard;