import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';

const App = () => {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmarks = blog => {
    console.log('Adding to bookmark', blog.title);
    const newBookmarks = [...bookmarks,blog];
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