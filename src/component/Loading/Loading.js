import React from 'react'
import { Spinner } from 'react-bootstrap'
import Fade from '@mui/material/Fade'

const Loading = () => {
  return (
    <div className='text-center' style={{ position: 'relative', top: '120px' }}>
      <div class='wrapper'>
        <div class='circle'></div>
        <div class='circle'></div>
        <div class='circle'></div>
        <div class='shadow'></div>
        <div class='shadow'></div>
        <div class='shadow'></div>
      </div>
    </div>
  )
}

export default Loading
