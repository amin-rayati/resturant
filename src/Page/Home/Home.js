import { React, useEffect, useRef } from 'react'
import qr from '../../assets/img/qr-code.png'
const Home = () => {
  const elementRef = useRef(null)

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
          <p
            style={{
              color: 'white',
              borderBottom: '1px solid white',
              padding: '10px',
            }}
          >
            En
          </p>
          <p style={{ color: 'white' }}>فارسی</p>
        </div>
      </div>
    </>
  )
}

export default Home
