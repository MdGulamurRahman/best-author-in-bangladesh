import React from 'react';
import './Header.css'
import logo from '../../favicon.png'
import book from '../../book.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const element = <FontAwesomeIcon icon={faSignInAlt} />
const Header = () => {
    const {user, logoutHandler} = useAuth()
    const history = useHistory()
    const loginHandler = ()=>{
        history.push('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="books">
                <img src={book} alt="" width="40" height="30" className="align-text-top d-inline-block"/>
                    <span className="nav-book"> Books</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="mx-auto mb-2 navbar-nav mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/order">Order Review</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/features">Features</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                    {user.email?
                    <button onClick={logoutHandler} className="btn btn-info" type="submit"><span className="text-danger">{element}</span> Logout</button>
                    :
                    <button onClick={loginHandler} className="btn btn-info" type="submit">{element} Login</button>}
                </form>
                </div>
            </div>
        </nav>
            <div className="header-container">
            <img src={logo} alt="" />
            <h1 className="text-info">The best book Author in Bangladesh</h1>
            <p className="text-white-50">We have tried to show the books of the best writers in Bangladesh who have won the Nobel Prize</p>
            <h1>Total Sells: <span className="million">50Million</span></h1>
        </div>
        </div>
        
    );
};

export default Header;