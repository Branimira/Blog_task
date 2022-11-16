import React from 'react'
import {useNavigate} from 'react-router-dom'

const SingleBlog = () => {
   const history = useNavigate();
   console.log(history)
   //const item = history.location.state.post;
  return (
    <div>SingleBlog</div>
  )
}

export default SingleBlog