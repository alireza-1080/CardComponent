import { useState } from 'react';
import './App.css'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { LiaComments } from "react-icons/lia";

function App() {
  const [isItLiked, setIsItLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(12)

  const likeClickHandler = () => {
    setIsItLiked(!isItLiked)
  }

  return (
    <>
      <div className="card--container">
        <div className="card--action-icons-container">
          <div className="comment--icon-container">
            <span className='comment--counter'>{commentCount}</span>
            <LiaComments className='icon comment-icon' />
          </div>
          <div className="like--icon-container">
            {isItLiked ? <FaHeart className='icon like-icon' onClick={likeClickHandler}/> : <FaRegHeart className='icon like-icon' onClick={likeClickHandler}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
