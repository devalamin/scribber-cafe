import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { handleTransition } from './utils/common';

const App = () => {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmarks = blog => {
    handleTransition()

    console.log('Adding to bookmark', blog.title);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = time => {
    handleTransition()
    setReadingTime(readingTime + time);
    console.log('inside reading time', time);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex justify-between gap-2 w-11/12 mx-auto'>
        <Blogs
          handleReadingTime={handleReadingTime}
          handleAddBookmarks={handleAddBookmarks}></Blogs>
        <Bookmarks
          readingTime={readingTime}
          bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
};

export default App;