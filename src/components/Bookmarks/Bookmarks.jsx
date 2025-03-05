import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks);
    return (
        <div id='bookmarks-container' className='md:w-1/3 hidden shadow-md text-center my-4 bg-[#f8f9fa] py-4'>
            <h4 className='font-bold text-xl text-green-900'>Bookmarked Blog: {bookmarks.length}</h4>
            {
                bookmarks.map(bookmark=> <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;