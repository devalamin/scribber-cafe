import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';

const App = () => {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmarks = blog => {
    const bookMarkContainer = document.getElementById('bookmarks-container');
    bookMarkContainer.classList.remove('hidden');
    bookMarkContainer.classList.add('transition-width', 'duration-1000');
    const blogContainer = document.getElementById('blogs-container');
    blogContainer.classList.remove('md:w-full')
    blogContainer.classList.add('md:w-2/3', 'transition-width', 'duration-1000')
    // blogContainer.classList.add('')

    console.log('Adding to bookmark', blog.title);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex justify-between gap-2 w-11/12 mx-auto'>
        <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
};

export default App;