import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div onClick={() => setOpen(!open)} className='menu-icon'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <nav className={` navbar absolute ${open ? 'top-6' : 'top-[-170px]'}`}>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;