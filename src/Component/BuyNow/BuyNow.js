import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';

const BuyNow = () => {
    const { id } = useParams()
    let history = useHistory()
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const [isBuy, setIsBuy] = useState(null)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        /*  alert('thanks for Your Order')
         console.log(data);
         history.push('./home') */
        fetch(`https://food-delivery-live-server.herokuapp.com/placeOrder/${id}`, {
            method: 'DELETE',
            headers: { 'contente-type': "Application/JSON" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    console.log(data);
                    alert('thanks for Your Order')
                    setIsBuy(true)
                    history.push(redirect_uri)
                }
                else {
                    setIsBuy(false)
                }
            })
    }
    console.log(id);
    return (
        <div className='addProduct-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='First Name' {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <input placeholder='Last Name' {...register("lastName", { required: true })} />
                {errors.lastName && "Last name is required"}
                <input placeholder='Address' {...register("Address", { required: true })} />
                {errors.lastName && "Last name is required"}
                <input type='number' placeholder='Contact Number' {...register("ContactNumber", { required: true })} />
                {errors.lastName && "Last name is required"}

                <input className='btn btn-info' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default BuyNow;