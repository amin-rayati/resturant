import { React, useRef, useEffect, useState } from 'react'
import banner from '../../assets/img/banner.jpg'
import OrderTypeSlider from '../../component/Slider/OrderTypeSlider'
import { ImLocation2 } from 'react-icons/im'
import { AiFillClockCircle, AiFillInstagram, AiFillStar } from 'react-icons/ai'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { intlFormat } from 'date-fns'
import { RequestUtils } from '../../Utils/RequestUtils'
const Info = () => {
  const elementRef = useRef(null)
  const { pathname } = useLocation()
  const resBarcode = pathname.split('/')[1]
  const [info, setInfo] = useState('')

  const resturantInfo = async () => {
    const res = await RequestUtils.resturantInfo(resBarcode)
    setInfo(res.data)
  }
  useEffect(() => {
    elementRef.current.style.height = `${window.innerHeight}px`
  })
  useEffect(() => {
    resturantInfo()
  }, [resBarcode])

  return (
    <>
      <div className='divInfo' ref={elementRef}></div>
      <div
        key={info.id}
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
          <img
            src={info.image}
            alt={info.brandName}
            style={{ width: '100%', borderRadius: '15px', height: '200px' }}
          />
          <div className=' my-3'>
            <OrderTypeSlider id={info.id} />
          </div>
          <div className='my-3' style={{ textAlign: 'right' }}>
            <p
              className='mt-2'
              style={{ fontWeight: 'bolder', fontSize: '20px' }}
            >
              {info.brandName}
            </p>
            <div className='my-3'>
              <div className='d-flex mt-2' style={{ justifyContent: 'right' }}>
                <p className='mx-2'> کرج، چالوس، کیلومتر12</p>
                <ImLocation2 size={20} />
              </div>
              <div className='mt-2' style={{ justifyContent: 'right' }}>
                <AiFillClockCircle size={20} />

                <div
                  className='d-flex my-3'
                  style={{ justifyContent: 'right' }}
                >
                  {info ? info.workTime.saturday.night_end : null}
                  <p className='mx-1'>تا</p>
                  {info ? info.workTime.saturday.night_start : null}
                  <p className='mx-1'>از</p>
                  <p className='mx-1'>-</p>
                  {info ? info.workTime.saturday.noon_end : null}
                  <p className='mx-1'>تا</p>
                  {info ? info.workTime.saturday.noon_start : null}
                  <p className='mx-1'>از</p>
                  <p className='mx-1'>-</p>
                  {info ? info.workTime.saturday.morning_end : null}
                  <p className='mx-1'>تا</p>
                  {info ? info.workTime.saturday.morning_start : null}
                  <p className='mx-1'>از</p>
                  <p className='mx-1'>:</p>
                  <p>همه روزه </p>
                </div>
              </div>
              <div className='d-flex mt-2' style={{ justifyContent: 'right' }}>
                <p className='mx-2'>{info.telephone}</p>
                <AiFillInstagram size={20} />
              </div>
            </div>
          </div>
          <div
            className='my-3  py-3 px-4'
            style={{
              textAlign: 'right',
              background: '#7c7c7c38',
              borderRadius: '15px',
            }}
          >
            <p
              className='mt-2'
              style={{
                fontWeight: 'bolder',
                fontSize: '20px',
              }}
            >
              درباره ما
            </p>
            <p className='my-3 ' style={{ color: 'black' }}>
              {info ? info.details : null}
            </p>
          </div>
          <div
            className='my-3  py-3 px-4'
            style={{
              textAlign: 'right',
              background: '#fff',
              borderRadius: '15px',
              boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
            }}
          >
            <p
              className='mt-2'
              style={{
                fontWeight: 'bolder',
                fontSize: '20px',
              }}
            >
              نظرات و پیشنهادات
            </p>
            <div className='mt-4'>
              <div className='d-flex' style={{ justifyContent: 'right' }}>
                <div className='d-flex'>
                  <AiFillStar
                    className='mx-2'
                    style={{ color: '#FFC107', marginTop: '2px' }}
                  />

                  <p>5</p>
                </div>
                <p className='mx-3'>1400/15/2</p>
                <p style={{ fontWeight: 'bolder', fontSize: '15px' }}>امین</p>
              </div>
              <p className='my-3 ' style={{ color: 'black' }}>
                اصالت یکی از مواردی است که ما در مجموعه رستوران‌های ارکیده آن را
                ارج می‌نهیم. علاقمندان رستوران‌های ارکیده می‌دانند که اولین شعبه
                مجموعه رستوران‌های ارکیده، شعبه جاده چالوس بود که در سال ۱۳۳۶
                تاسیس گردید.
              </p>
            </div>
            <div className='mt-4'>
              <div className='d-flex' style={{ justifyContent: 'right' }}>
                <div className='d-flex'>
                  <AiFillStar
                    className='mx-2'
                    style={{ color: '#FFC107', marginTop: '2px' }}
                  />

                  <p>5</p>
                </div>
                <p className='mx-3'>1400/15/2</p>
                <p style={{ fontWeight: 'bolder', fontSize: '15px' }}>رضا</p>
              </div>
              <p className='my-3 ' style={{ color: 'black' }}>
                اصالت یکی از مواردی است که ما در مجموعه رستوران‌های ارکیده آن را
                ارج می‌نهیم. علاقمندان رستوران‌های ارکیده می‌دانند که اولین شعبه
                مجموعه رستوران‌های ارکیده، شعبه جاده چالوس بود که در سال ۱۳۳۶
                تاسیس گردید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
