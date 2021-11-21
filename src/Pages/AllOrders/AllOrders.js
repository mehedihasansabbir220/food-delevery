import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    const [isDelete, setIsDelete] = useState(null)
    useEffect(() => {
        fetch(`https://food-delivery-live-server.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [isDelete])
    // console.log(allOrders);
    const handelAllOrderDelete = (id) => {
        fetch(`https://food-delivery-live-server.herokuapp.com/AllOrderDelete/${id}`, {
            method: "DELETE",
            headers: { "content-type": "Application/JSON" }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('delete Done ')
                    setIsDelete(true)
                }
                else {
                    setIsDelete(false)
                }
            })
        // console.log(id);
    }
    return (
        <>
            <h3>I am All Orders </h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    allOrders.map(allorder =>
                        <div className="col">
                            <div className="card h-100">
                                <img src={allorder.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <small className='d-flex justify-content-around'><p className='text-danger'>Price :{allorder.price}</p> <p className='text-info'>{allorder.status}</p> </small>
                                    <h5 className="card-title">{allorder.name}</h5>
                                    <p className="card-text">{allorder.descriptioname}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-around">
                                    <Link to={`/buynow/${allorder._id}`}>
                                        <button className='btn btn-info'>Buy Now </button>
                                    </Link>
                                    <button onClick={() => handelAllOrderDelete(allorder._id)} className='btn btn-warning'>Delete Order </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default AllOrders;