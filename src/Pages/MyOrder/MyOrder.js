import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../contex/hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const email = user.email
    let history = useHistory();
    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null)

    useEffect(() => {
        fetch(`https://food-delivery-live-server.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDelete])
    console.log(orders);

    //delete Order
    const handeldeleteOrder = (id) => {
        // console.log(id);
        fetch(`https://food-delivery-live-server.herokuapp.com/buyNow/${id}`, {
            "method": "DELETE",
            "headers": { "content-type": "Application/JSON" },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted Product Scuccesfully')
                    setIsDelete(true)
                }
                else {
                    setIsDelete(false)
                }
            })

    }

    return (
        <div>
            {
                user.email ?
                    <>
                        <h3 className='m-2'>My All Oder here </h3>
                        <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">
                            {
                                orders.map((order, index) =>
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={order.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <small className='d-flex justify-content-around'>
                                                    <p className='text-info'>price :{order.price}</p>
                                                    <p className='text-danger'>{order.status}</p>
                                                </small>
                                                <h5 className="card-title">{order.name}</h5>
                                                <p className="card-text">{order.descriptioname}</p>
                                                <p className='text-danger'>{order.status}</p>
                                            </div>
                                            <div className="card-footer">
                                                <Link to={`/buynow/${order._id}`}>     <button className='btn btn-info mb-2 p-2'>Buy Now</button></Link>
                                                <br />
                                                <button onClick={() => handeldeleteOrder(order._id)} className='btn btn-danger'>Delete Order </button>

                                            </div>
                                        </div>

                                    </div>)

                            }
                        </div>


                    </>
                    :
                    history.push('./login')
            }

        </div>
    );
};

export default MyOrder;