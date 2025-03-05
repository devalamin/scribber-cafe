import React from 'react';

const Bookmark = ({ bookmark }) => {
    const { title, author_name } = bookmark
    return (
        <div className='bg-[#e9ecef] rounded-md p-4 my-3 mx-4'>
            <p className='text-start font-bold text-xl text-teal-800'>{title}: <span className='text-sm'>{author_name}</span></p>
        </div>
    );
};

export default Bookmark;