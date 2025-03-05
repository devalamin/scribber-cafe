import React from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';

const App = () => {
  return (
    <div>
      <Header></Header>
     <div className='md:flex justify-between gap-2 w-11/12 mx-auto'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </div>
  );
};

export default App;