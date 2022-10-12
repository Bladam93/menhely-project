import React from 'react'
import Youtube from "react-player"
import './Videos.css'


const Videos = () => {
  return (
    <div className='videos'>
        <div>
        <Youtube url="https://www.youtube.com/watch?v=zYtv_skJjUo" controls={true} />
        </div>
        <div>
        <Youtube url="https://www.youtube.com/watch?v=zYtv_skJjUo" controls={true} />
        </div>
    </div>
  )
}

export default Videos