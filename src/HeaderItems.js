import React from 'react';
import dots from './images/dots.png';
import notification from './images/notification.png';
import ico from './images/ico.png';

export function HeaderPoshta() {
    return(
        <a href='#################################' className='HeaderItem'>Почта</a>
    );
}

export function HeaderImages() {
    return(
        <a href='#####################################################' className='HeaderItem'>Картинки</a>
    );
}

export function HeaderDots() {
    return(
        <a href='########' className='HeaderItem'>
            <img src={dots} alt='Dots' height='25' />
        </a>
        
    );
}

export function HeaderNotification() {
    return(
        <a href='##########' className='HeaderItem'>
            <img src={notification} alt='Notification' height='25' />
        </a>
    );
}

export function HeaderIco() {
    return(
        <a href='###########' className='HeaderItem'>
            <img src={ico} alt='Ico' height='50' />
        </a>
    );
}