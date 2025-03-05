import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    console.log(bookmarks);
    return (
        <div id='bookmarks-container' className='md:w-1/3 hidden shadow-md text-center my-4 bg-[#f8f9fa] py-4'>
            <div className='text-center p-2 bg-slate-50 mb-4 text-blue-900 text-xl'>
                <h5>Time Spent On Reading: {readingTime} min</h5>
            </div>
            <h4 className='font-bold text-xl text-green-900'>Bookmarked Blog: {bookmarks.length}</h4>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;