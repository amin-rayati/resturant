import { React, useRef, useEffect, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import DatePicker from 'react-datepicker2'
const Cart = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    elementRef.current.style.height = `${window.innerHeight}px`
  })

  return (
    <>
      <div className=' divInfo' ref={elementRef}></div>
      <div
        style={{
          textAlign: 'center',
          top: '0',
          position: 'absolute',
          width: '-webkit-fill-available',
        }}
        className='my-5'
      >
        <div
          className='col-md-11 col-sm-11 col-11 m-auto'
          style={{ justifyContent: 'center' }}
        >
          <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>رزرو میز</p>
          <div
            className='d-flex my-3'
            style={{
              border: '1px solid #c1b7b7',
              borderRadius: '5px',
              backgroundColor: '#fff',
              padding: '15px 15px 10px 15px',
              justifyContent: 'space-between',
            }}
          >
            <div
              className='d-flex'
              style={{
                border: '1px solid #c1b7b74d',
                borderRadius: '5px',
                backgroundColor: '#fff',
                padding: '10px 5px 0 5px',
                width: 'fit-content',
              }}
            >
              <div
                style={{
                  borderRadius: '4px',
                  height: 'max-content',
                  padding: '2px 5px',
                }}
              >
                <FaMinus className='mt-1' style={{ color: '#707070' }} />
              </div>
              <p className='mx-2 mt-1'>2</p>
              <div
                style={{
                  borderRadius: '4px',
                  height: 'max-content',
                  padding: '2px 5px',
                }}
              >
                <FaPlus className='mt-1' style={{ color: '#20C900' }} />
              </div>
            </div>
            <p
              style={{
                fontWeight: 'bolder',
                fontSize: '15px',
                marginTop: '10px',
              }}
            >
              افراد
            </p>
          </div>
          <div className='my-3'>
            <DatePicker
              placeholder='تاریخ رزرو'
              timePicker={false}
              isGregorian={false}
              className='date'
            />
          </div>

          <div
            className='my-3'
            style={{
              border: '1px solid #c1b7b7',
              borderRadius: '5px',
              backgroundColor: '#fff',
              padding: '15px 15px 10px 15px',
            }}
          >
            <p
              style={{
                textAlign: 'end',
                fontWeight: 'bolder',
                fontSize: '15px',
                marginTop: '10px',
              }}
            >
              ساعت
            </p>
          </div>

          <div style={{ justifyContent: 'space-around' }}>
            <button
              style={{
                color: 'white',
                backgroundColor: '#20C900',
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
              }}
            >
              تایید نهایی
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
