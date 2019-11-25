import React from 'react';
import {HeaderPoshta} from './HeaderItems';
import {HeaderImages} from './HeaderItems';
import {HeaderDots} from './HeaderItems';
import {HeaderNotification} from './HeaderItems';
import {HeaderIco} from './HeaderItems';

function Header() {
    return (
        <div className='header'>
            <HeaderPoshta />
            <HeaderImages />
            <HeaderDots />
            <HeaderNotification />
            <HeaderIco />
        </div>
    );
}

export default Header;