import { React, useEffect, useRef } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import qr from '../../assets/img/qr-code.png'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
const Home = () => {
  const elementRef = useRef(null)
  const { pathname } = useLocation()
  const activePath = pathname.split('/')[1]

  useEffect(() => {
    elementRef.current.style.height = `${window.innerHeight}px`
  })

  return (
    <>
      <div className='text-center div' ref={elementRef}></div>
      <div
        style={{
          textAlign: 'center',
          top: '30%',
          position: 'absolute',
          width: '-webkit-fill-available',
        }}
      >
        <img src={qr} alt='qr' style={{ width: '15%' }} />
        <p
          className='mt-3'
          style={{ fontWeight: 'bolder', color: 'white', fontSize: '20px' }}
        >
          منوی دیجیتال
        </p>
        <div className='mt-3 mx-auto' style={{ width: 'fit-content' }}>
          <LinkContainer
            to={`/info/${activePath}`}
            style={{
              color: 'white',
              borderBottom: '1px solid white',
              padding: '10px',
            }}
          >
            <p>En</p>
          </LinkContainer>
          <LinkContainer to={`/info/${activePath}`} style={{ color: 'white' }}>
            <p>فارسی</p>
          </LinkContainer>
        </div>
      </div>
    </>
  )
}

export default Home
