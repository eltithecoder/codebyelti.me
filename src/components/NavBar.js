import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Spacer from './Spacer';
import LikeButton from './LikeButton';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <h2>EltiComesToCanada</h2>
            <div className='navbar-links'>
                <LikeButton />
                <Spacer width='10px' />
                <button className='login-button'>Log In</button>
                
            </div>
        </nav>
    );
}