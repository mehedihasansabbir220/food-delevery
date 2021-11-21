import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className="banner-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 m-3 ">
                        <div className="row card-container">
                            <div className="col-sm-12 m-3 p-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">List your restaurant or shop on foodpanda</h5>
                                        <p className="card-text">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                                            It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                                            Interested? Let's start our partnership today!</p>
                                        <Link to='/login'>
                                            <div className="btn btn-info">OrderNow</div>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h1>Food For Every Mood.
                            Delivered.</h1>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HomeBanner;