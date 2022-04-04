import { React, useRef, useEffect, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import DatePicker from 'react-datepicker2'
import TextField from '@mui/material/TextField'
import MobileTimePicker from '@mui/lab/MobileTimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
const Cart = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    elementRef.current.style.height = `${window.innerHeight}px`
  })
  const [inTime, setInTime] = useState(new Date('2018-01-01T00:00:00.000Z'))
  const [outTime, setOutTime] = useState(new Date('2018-01-01T00:00:00.000Z'))
  const [peopleCount, setPeopleCount] = useState('1')
  const [date, setDate] = useState('')

  const increase = () => {
    setPeopleCount((peopleCount) => parseInt(peopleCount) + 1)
  }
  const decrease = () => {
    if (peopleCount > 1) {
      setPeopleCount((peopleCount) => parseInt(peopleCount) - 1)
    }
  }
  const handleDateChange = (e) => {
    setDate(document.getElementsByClassName('datepicker-input')[0].value)
  }

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
                <FaMinus
                  onClick={decrease}
                  className='mt-1'
                  style={{ color: '#707070' }}
                />
              </div>
              <p className='mx-2 mt-1'>{peopleCount}</p>
              <div
                style={{
                  borderRadius: '4px',
                  height: 'max-content',
                  padding: '2px 5px',
                }}
              >
                <FaPlus
                  onClick={increase}
                  className='mt-1'
                  style={{ color: '#20C900' }}
                />
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
              onChange={handleDateChange}
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

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div className='d-flex'>
                <div>
                  <p>خروج</p>
                  <MobileTimePicker
                    label='.'
                    value={outTime}
                    onChange={(newValue) => {
                      setOutTime(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>

                <div>
                  <p>ورود</p>
                  <MobileTimePicker
                    label='.'
                    value={inTime}
                    onChange={(newValue) => {
                      setInTime(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </div>
            </LocalizationProvider>
          </div>

          <div
            className='d-flex'
            style={{
              justifyContent: 'space-around',
            }}
          >
            <div style={{ position: 'fixed', bottom: '20px' }}>
              <button
                className='mx-2'
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
      </div>
    </>
  )
}

export default Cart
