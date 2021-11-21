
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../contex/hooks/useAuth";
import './AddProducts.css'

const AddProducts = () => {
    const { user } = useAuth();
    const location = useLocation();
    let history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
        fetch(`https://food-delivery-live-server.herokuapp.com/addProducts`, {
            method: "POST",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify(data)
        });
        if (data.descriptioname) {
            alert('added Productat')
            history.push(redirect_uri)
        }
        console.log(data)
    }



    /*  fetch(`http://localhost:5000/addProducts`, {
         method: "POST",
         headers: { "content-type": "Application/JSON" },
         body: JSON.stringify(data)
     }) */

    return (
        <>
            <div className='addProduct-container'>
                {
                    /*  user.email ? */
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Product name' {...register("name", { required: true, maxLength: 200 })} />
                            <input type="text" placeholder='Product description' {...register("descriptioname", { required: true, maxLength: 2000 })} />
                            <input placeholder='Product price' type="number" {...register("price", { min: 0 })} />
                            <input placeholder='Product Image Link' type="string" {...register("image")} />
                            <input className='btn btn-danger' type="submit" />
                        </form>
                    </> /* :
                        history.push(redirect_uri) */
                }
                {/*  <h4>I am Product</h4> */}
            </div>
        </>
    );
};

export default AddProducts;