import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center py-3'>
            <h5 className='text-2xl font-bold'>Scribber Cafe</h5>
            <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;