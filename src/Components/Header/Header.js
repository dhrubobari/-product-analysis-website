import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
        <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/review">Reviews</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        </nav>
        </div>
    );
};

export default Header;