import { React, useRef, useEffect } from 'react'
import banner from '../../assets/img/banner.jpg'
import OrderTypeSlider from '../../component/Slider/OrderTypeSlider'
import { ImLocation2 } from 'react-icons/im'
import { AiFillClockCircle, AiFillInstagram, AiFillStar } from 'react-icons/ai'
const Info = () => {
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
          <img
            src={banner}
            alt='banner'
            style={{ width: '100%', borderRadius: '15px' }}
          />
          <div className=' my-3'>
            <OrderTypeSlider />
          </div>
          <div className='my-3' style={{ textAlign: 'right' }}>
            <p
              className='mt-2'
              style={{ fontWeight: 'bolder', fontSize: '20px' }}
            >
              اطلاعات
            </p>
            <div className='my-3'>
              <div className='d-flex mt-2' style={{ justifyContent: 'right' }}>
                <p className='mx-2'> کرج، چالوس، کیلومتر12</p>
                <ImLocation2 size={20} />
              </div>
              <div className='d-flex mt-2' style={{ justifyContent: 'right' }}>
                <p className='mx-2'> ساعت 9صبح تا 12شب باز میباشد</p>
                <AiFillClockCircle size={20} />
              </div>
              <div className='d-flex mt-2' style={{ justifyContent: 'right' }}>
                <p className='mx-2'> @orkideh_restaurant</p>
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
              اصالت یکی از مواردی است که ما در مجموعه رستوران‌های ارکیده آن را
              ارج می‌نهیم. علاقمندان رستوران‌های ارکیده می‌دانند که اولین شعبه
              مجموعه رستوران‌های ارکیده، شعبه جاده چالوس بود که در سال ۱۳۳۶
              تاسیس گردید.
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
        </div>
      </div>
    </>
  )
}

export default Info
