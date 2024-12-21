import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './UI/Nav.jsx';
import HomePage from '../../pages/HomePage.jsx';

const pages = ['Home', 'About Me', 'Portfolio', 'Contact', 'Resume'];

export default function Nav({currentPage, setCurrentPage, handleCloseNavMenu}) {
    return (
        <ul className='nav nav-tabs' style={{paddingRight: '35px', paddingTop: '22px'}}>
            <li className='navItem'>
                <a
                id='nav-link'
                href='#Home'
                onClick={() => setCurrentPage('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                > 
                Home
                </a>
            </li>
            <li className='navItem'>
                <a
                id='nav-link'
                href='#About Me'
                onClick={() => setCurrentPage('About Me')}
                className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                > 
                About Me
                </a>
            </li>
            <li className='navItem'>
                <a
                id='nav-link'
                href='#Portfolio'
                onClick={() => setCurrentPage('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                > 
                Portfolio
                </a>
            </li>
            <li className='navItem'>
                <a
                id='nav-link'
                href='#Contact'
                onClick={() => setCurrentPage('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                > 
                Contact
                </a>
            </li>
            <li className='navItem'>
                <a
                id='nav-link'
                href='#Resume'
                onClick={() => setCurrentPage('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                > 
                Resume
                </a>
            </li>

        </ul>
    );
}