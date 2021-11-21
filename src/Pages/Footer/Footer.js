import React from 'react';

const Footer = () => {
    return (
        <div >
            <h2 className='text-start m-2'> Popular Cuisines</h2>
            <div class="container m-2 text-danger">
                <div class="row mx-2 text-start ">
                    <div class="col-sm-6 col-md-3 ">
                        <p >American</p>
                        <p>Bakery & Cake</p>
                        <p>Burger</p>
                        <p>Chinese</p>
                        <p> Dessert</p>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <p>Fast food</p>
                        <p>Healthy food</p>
                        <p>Indian</p>
                        <p>Italian</p>
                        <p> Japanese</p>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <p>Korean</p>
                        <p>Mexican</p>
                        <p>Middle Eastern</p>
                        <p>Pizza</p>
                        <p> Seafood</p>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <p>Thai</p>
                        <p>Vegetarian</p>
                        <p>Western</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;