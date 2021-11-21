import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import useAuth from '../../contex/hooks/useAuth';


const AllProducts = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null)
    const location = useLocation();
    let history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    useEffect(() => {
        fetch(`https://food-delivery-live-server.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })

    }, [isDelete]);
    // console.log(products);

    const handleDelet = (id) => {
        // console.log(id);
        fetch(`https://food-delivery-live-server.herokuapp.com/deletProduct/${id}`, {
            "method": "DELETE",
            "headers": { "content-type": "Application/JSON" },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setIsDelete(true)
                    alert('Delete Secussfully ')
                    console.log(alert);

                }
                else {
                    setIsDelete(false)
                }

                // console.log(data.deletedCount)
            })
    }
    const handelAddtoCart = index => {
        // console.log(index);
        const data = products[index]
        const email = user.email;
        const status = 'pending'
        data.email = email
        data.status = status
        // console.log(data)
        fetch(`https://food-delivery-live-server.herokuapp.com/addOrder`, {
            method: "POST",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify(data)
        })
        history.push(redirect_uri)
    }
    return (
        <>
            <div>
                <h3>There Are All Product hear</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-2">
                    {
                        products.map((product, index) =>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={product.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p>Price : {product.price}</p>
                                        <p className="card-text">{product.descriptioname}</p>

                                    </div>
                                    <div className="card-footer">

                                        <button onClick={() => handleDelet(product._id)} className="btn btn-danger p-2">Delet A Iteam </button>
                                        <br />
                                        <Link to={`/update/${product._id}`}>
                                            <button className='btn btn-success m-2'>Upadate Product
                                            </button>
                                        </Link>
                                        <br />
                                        <Link to='/myOrders'>
                                            <button onClick={() => handelAddtoCart(index)} className=' btn btn-primary m-2'>Add to Cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>

            </div>
        </>
    );
};

export default AllProducts;