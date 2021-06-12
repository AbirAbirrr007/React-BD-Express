import React, { useContext } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'

function Navbar() {
    const {qty} = useContext(CartContext)
    return (
        <div className="nav">
        <div className='navbar'>
        <ul>
            <li>
                <Link className='navbar-logo' to="/">BDExpress</Link>
            </li>
        </ul>
        <ul className='navbar-cart-details'>
            <li><Link className='navbar-cart' to="/cart"><MdAddShoppingCart/></Link></li>
            <li className='navbar-qty'>{qty}</li>
        </ul>
            
        </div>
        </div>
    )
}

export default Navbar
