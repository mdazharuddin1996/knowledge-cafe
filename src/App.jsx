
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToReadingTime = (id,time) => {
    console.log(id,time,'clicked')
    const newReadingTime = parseFloat(readingTime) + parseFloat(time);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);

    setBookmarks(remainingBookmarks)

;
    setReadingTime(newReadingTime)
  }

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };


  return (
    <>
      <div>
        <Header></Header>
        <main className='md:flex w-9/12 mx-auto justify-between'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks}
          handleAddToReadingTime={handleAddToReadingTime}
          
          ></Blogs>
          <Bookmarks bookmarks={bookmarks}
            readingTime={readingTime}
            ></Bookmarks>
      </main>
      </div>
    </>
  )
}

export default App
