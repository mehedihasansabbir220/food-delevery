import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../contex/hooks/useAuth';
import './Header.css'
import logo from '../../../Images/pizza-gedb8fdeb7_1280.png'
import icon from '../../../Images/icon.jpg'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <div className="header position-static">
                <img className="logo" src={logo} alt="" />
                <nav>
                    <img className='icon' src={icon} alt="" width="40" height="40" />
                    <NavLink className='m-2 p-2' to="/home">Home</NavLink>
                    <NavLink className='m-2 p-2' to="/about">about</NavLink>
                    <NavLink className='m-2 p-2' to="/allOrders">All Orders </NavLink>
                    <NavLink className='m-2 p-2' to="/addProducts">add Products</NavLink>
                    {
                        user.email ?
                            <>

                                {/*     <NavLink to="/update/:id">Update</NavLink> */}
                                <NavLink to="/myOrders">Addmin Dashboard </NavLink>
                                <button className='btn btn-info m-2 p-2' onClick={logOut}>log out</button>

                            </>

                            :
                            <NavLink to="/login">Login</NavLink>}
                    {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                </nav>
            </div>
        </>

    );
};

export default Header;