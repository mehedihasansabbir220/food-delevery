import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../contex/hooks/useAuth';

const Update = () => {
    const { user } = useAuth();
    const location = useLocation();
    let history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const { productID } = useParams();
    // console.log(productID)
    const [singleProduct, setSingleProduct] = useState({});
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch(`https://food-delivery-live-server.herokuapp.com/singleProduct/${productID}`)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data)
            })
    }, []);
    const onSubmit = data => {
        console.log(data)
        fetch(`https://food-delivery-live-server.herokuapp.com/update/${productID}`, {
            "method": "PUT",
            "headers": { "content-type": "Application/JSON" },
            "body": JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount === 1) {
                    alert('Update data ScuccessFully')
                    setSingleProduct('result');
                }
            })
        history.push(redirect_uri)
    }

    console.log(singleProduct);
    return (
        <div className='addProduct-container'>
            {
                user.email ?
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder={singleProduct.name} {...register("name", { required: true, maxLength: 20 })} />
                            <input type="text" placeholder={singleProduct.descriptioname} {...register("descriptioname", { required: true, maxLength: 2000 })} />
                            <input placeholder={singleProduct.price} type="number" {...register("price", { min: 0 })} />
                            <input placeholder={singleProduct.image} type="string" {...register("image")} />
                            <input className='btn btn-danger' type="submit" />
                        </form>
                    </>
                    :
                    history.push(redirect_uri)
            }

        </div>
    );
};

export default Update;