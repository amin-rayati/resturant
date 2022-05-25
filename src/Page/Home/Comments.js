import { React, useRef, useEffect, useState, useCallback } from 'react'
import OrderTypeSlider from '../../component/Slider/OrderTypeSlider'
import { ImLocation2 } from 'react-icons/im'
import { AiFillClockCircle, AiFillInstagram, AiFillStar } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { RequestUtils } from '../../Utils/RequestUtils'
import { FaInfoCircle, FaStar, FaCommentDots } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import Back from '../../component/BackComponent/Back'
import ProgressBar from 'react-bootstrap/ProgressBar'
const Info = () => {
  const elementRef = useRef(null)

  const { pathname } = useLocation()
  const resBarcode = pathname.split('/')[2]
  const [info, setInfo] = useState('')

  const resturantInfo = async () => {
    const res = await RequestUtils.resturantInfo(resBarcode)
    if (res.isDone) {
      setInfo(res.data)
    }
  }

  useEffect(() => {
    resturantInfo()
  }, [resBarcode])

  useEffect(() => {
    elementRef.current.style.height = `${window.innerHeight}px`
  })
  return (
    <>
      <div className=' divInfo' ref={elementRef}></div>
      <div
        key={info && info.id}
        style={{
          textAlign: 'center',
          top: '-50px',
          position: 'absolute',
          width: '-webkit-fill-available',
        }}
        className='mt-5 divInfo'
      >
        <div
          className='col-md-11 col-sm-11 col-11 m-auto'
          style={{ justifyContent: 'center' }}
        >
          <Back />
          <div>
            <p
              style={{
                textAlign: 'right',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              نظرات
            </p>
          </div>
          <hr />

          {/* star */}
          <div className='row mt-3'>
            <div className='col-lg-7 col-md-7 col-sm-7 col-7'>
              <div
                className='d-flex mt-1'
                style={{ justifyContent: 'space-between' }}
              >
                <span
                  style={{
                    color: '#198754',
                    fontSize: '8px',
                    fontWeight: 'bolder',
                  }}
                  className='mx-2'
                >
                  5
                </span>

                <FaStar style={{ color: '#198754' }} size={10} />

                <div className='mx-3' style={{ width: '100%' }}>
                  <ProgressBar variant='success' now={90} />
                </div>
                <span
                  style={{
                    color: '#a3a3a3',
                    fontSize: '10px',
                    fontWeight: '600',
                    direction: 'rtl',
                  }}
                >
                  90%
                </span>
              </div>
              <div
                className='d-flex mt-1'
                style={{ justifyContent: 'space-between' }}
              >
                <span
                  style={{
                    color: '#0d6efd',
                    fontSize: '8px',
                    fontWeight: 'bolder',
                  }}
                  className='mx-2'
                >
                  4
                </span>

                <FaStar style={{ color: '#0d6efd' }} size={10} />

                <div className='mx-3' style={{ width: '100%' }}>
                  <ProgressBar now={70} />
                </div>
                <span
                  style={{
                    color: '#a3a3a3',
                    fontSize: '10px',
                    fontWeight: '600',
                    direction: 'rtl',
                  }}
                >
                  70%
                </span>
              </div>
              <div
                className='d-flex mt-1'
                style={{ justifyContent: 'space-between' }}
              >
                <span
                  style={{
                    color: '#0dcaf0',
                    fontSize: '8px',
                    fontWeight: 'bolder',
                  }}
                  className='mx-2'
                >
                  3
                </span>

                <FaStar style={{ color: '#0dcaf0' }} size={10} />

                <div className='mx-3' style={{ width: '100%' }}>
                  <ProgressBar variant='info' now={50} />
                </div>
                <span
                  style={{
                    color: '#a3a3a3',
                    fontSize: '10px',
                    fontWeight: '600',
                    direction: 'rtl',
                  }}
                >
                  50%
                </span>
              </div>
              <div
                className='d-flex mt-1'
                style={{ justifyContent: 'space-between' }}
              >
                <span
                  style={{
                    color: '#ffc107',
                    fontSize: '8px',
                    fontWeight: 'bolder',
                  }}
                  className='mx-2'
                >
                  2
                </span>

                <FaStar style={{ color: '#ffc107' }} size={10} />

                <div className='mx-3' style={{ width: '100%' }}>
                  <ProgressBar variant='warning' now={30} />
                </div>
                <span
                  style={{
                    color: '#a3a3a3',
                    fontSize: '10px',
                    fontWeight: '600',
                    direction: 'rtl',
                  }}
                >
                  30%
                </span>
              </div>
              <div
                className='d-flex mt-1'
                style={{ justifyContent: 'space-between' }}
              >
                <span
                  style={{
                    color: '#dc3545',
                    fontSize: '8px',
                    fontWeight: 'bolder',
                  }}
                  className='mx-2'
                >
                  1
                </span>

                <FaStar style={{ color: '#dc3545' }} size={10} />

                <div className='mx-3' style={{ width: '100%' }}>
                  <ProgressBar variant='danger' now={10} />
                </div>
                <span
                  style={{
                    color: '#a3a3a3',
                    fontSize: '10px',
                    fontWeight: '600',
                    direction: 'rtl',
                  }}
                >
                  10%
                </span>
              </div>
            </div>
            <div
              className='col-lg-5 col-md-5 col-sm-5 col-5'
              style={{ textAlign: 'center' }}
            >
              <p style={{ fontSize: '30px', color: '#198754' }}>5</p>
              <p
                className='mt-2'
                style={{
                  fontSize: '10px',
                  color: '#a3a3a3',
                  fontWeight: '500',
                }}
              >
                از مجموع 422 امتیاز
              </p>
            </div>
          </div>
          {/* star */}

          {/* comments */}
          <div style={{ marginBottom: '80px' }}>
            <div className='mt-3'>
              <p
                style={{
                  textAlign: 'right',
                  fontSize: '18px',
                  fontWeight: '800',
                }}
              >
                نظرات کاربران
              </p>
            </div>
            <hr />
            <div className='mt-3'>
              <p
                style={{
                  fontWeight: '300',
                  fontSize: '16px',
                  textAlign: 'right',
                }}
              >
                محمد رضا
              </p>
              <div
                className='d-flex'
                style={{ justifyContent: 'space-between' }}
              >
                <div className='d-flex'>
                  <span className='mx-2'>1</span>
                  <FaStar style={{ color: '#ffcb03' }} />
                </div>
                <p
                  style={{
                    color: '#a3a3a3',
                    fontSize: '12px',
                    fontWeight: '400',
                  }}
                >
                  1400/02/16
                </p>
              </div>
              <p
                style={{
                  color: '#404040',
                  fontSize: '14px',
                  fontWeight: '400',
                  textAlign: 'right',
                }}
              >
                غذا خیلی خوب بود و کامل پخته شده بود بسیار عالی😜
              </p>
              <div
                className='d-flex flex-wrap'
                style={{ justifyContent: 'right' }}
              >
                <div className='foodCm'>سالاد فصل</div>
                <div className='foodCm'>قیمه نثار با گوشت فراوان</div>
                <div className='foodCm'>جوجه کباب بناب</div>
                <div className='foodCm'>جوجه کباب بناب</div>
              </div>
              <div
                style={{
                  border: '1px solid #e6e6e6',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#5094bb',
                  }}
                >
                  پاسخ مدیر رستوران
                </p>
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '12px',
                    fontWeight: '300',
                    color: '#5094bb',
                  }}
                >
                  نوش جان
                </p>
              </div>
            </div>
            <hr />
            <div className='mt-3'>
              <p
                style={{
                  fontWeight: '300',
                  fontSize: '16px',
                  textAlign: 'right',
                }}
              >
                محمد رضا
              </p>
              <div
                className='d-flex'
                style={{ justifyContent: 'space-between' }}
              >
                <div className='d-flex'>
                  <span className='mx-2'>1</span>
                  <FaStar style={{ color: '#ffcb03' }} />
                </div>
                <p
                  style={{
                    color: '#a3a3a3',
                    fontSize: '12px',
                    fontWeight: '400',
                  }}
                >
                  1400/02/16
                </p>
              </div>
              <p
                style={{
                  color: '#404040',
                  fontSize: '14px',
                  fontWeight: '400',
                  textAlign: 'right',
                }}
              >
                غذا خیلی خوب بود و کامل پخته شده بود بسیار عالی😜
              </p>
              <div
                className='d-flex flex-wrap'
                style={{ justifyContent: 'right' }}
              >
                <div className='foodCm'>سالاد فصل</div>
                <div className='foodCm'>قیمه نثار با گوشت فراوان</div>
                <div className='foodCm'>جوجه کباب بناب</div>
                <div className='foodCm'>جوجه کباب بناب</div>
              </div>
              <div
                style={{
                  border: '1px solid #e6e6e6',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#5094bb',
                  }}
                >
                  پاسخ مدیر رستوران
                </p>
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '12px',
                    fontWeight: '300',
                    color: '#5094bb',
                  }}
                >
                  نوش جان
                </p>
              </div>
            </div>
            <hr />
            <div className='mt-3'>
              <p
                style={{
                  fontWeight: '300',
                  fontSize: '16px',
                  textAlign: 'right',
                }}
              >
                محمد رضا
              </p>
              <div
                className='d-flex'
                style={{ justifyContent: 'space-between' }}
              >
                <div className='d-flex'>
                  <span className='mx-2'>1</span>
                  <FaStar style={{ color: '#ffcb03' }} />
                </div>
                <p
                  style={{
                    color: '#a3a3a3',
                    fontSize: '12px',
                    fontWeight: '400',
                  }}
                >
                  1400/02/16
                </p>
              </div>
              <p
                style={{
                  color: '#404040',
                  fontSize: '14px',
                  fontWeight: '400',
                  textAlign: 'right',
                }}
              >
                غذا خیلی خوب بود و کامل پخته شده بود بسیار عالی😜
              </p>
              <div
                className='d-flex flex-wrap'
                style={{ justifyContent: 'right' }}
              >
                <div className='foodCm'>سالاد فصل</div>
                <div className='foodCm'>قیمه نثار با گوشت فراوان</div>
                <div className='foodCm'>جوجه کباب بناب</div>
                <div className='foodCm'>جوجه کباب بناب</div>
              </div>
              <div
                style={{
                  border: '1px solid #e6e6e6',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#5094bb',
                  }}
                >
                  پاسخ مدیر رستوران
                </p>
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '12px',
                    fontWeight: '300',
                    color: '#5094bb',
                  }}
                >
                  نوش جان
                </p>
              </div>
            </div>
            <hr />
            <div className='mt-3'>
              <p
                style={{
                  fontWeight: '300',
                  fontSize: '16px',
                  textAlign: 'right',
                }}
              >
                محمد رضا
              </p>
              <div
                className='d-flex'
                style={{ justifyContent: 'space-between' }}
              >
                <div className='d-flex'>
                  <span className='mx-2'>1</span>
                  <FaStar style={{ color: '#ffcb03' }} />
                </div>
                <p
                  style={{
                    color: '#a3a3a3',
                    fontSize: '12px',
                    fontWeight: '400',
                  }}
                >
                  1400/02/16
                </p>
              </div>
              <p
                style={{
                  color: '#404040',
                  fontSize: '14px',
                  fontWeight: '400',
                  textAlign: 'right',
                }}
              >
                غذا خیلی خوب بود و کامل پخته شده بود بسیار عالی😜
              </p>
              <div
                className='d-flex flex-wrap'
                style={{ justifyContent: 'right' }}
              >
                <div className='foodCm'>سالاد فصل</div>
                <div className='foodCm'>قیمه نثار با گوشت فراوان</div>
                <div className='foodCm'>جوجه کباب بناب</div>
                <div className='foodCm'>جوجه کباب بناب</div>
              </div>
              <div
                style={{
                  border: '1px solid #e6e6e6',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#5094bb',
                  }}
                >
                  پاسخ مدیر رستوران
                </p>
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '12px',
                    fontWeight: '300',
                    color: '#5094bb',
                  }}
                >
                  نوش جان
                </p>
              </div>
            </div>
            <hr />
            <div className='mt-3'>
              <p
                style={{
                  fontWeight: '300',
                  fontSize: '16px',
                  textAlign: 'right',
                }}
              >
                محمد رضا
              </p>
              <div
                className='d-flex'
                style={{ justifyContent: 'space-between' }}
              >
                <div className='d-flex'>
                  <span className='mx-2'>1</span>
                  <FaStar style={{ color: '#ffcb03' }} />
                </div>
                <p
                  style={{
                    color: '#a3a3a3',
                    fontSize: '12px',
                    fontWeight: '400',
                  }}
                >
                  1400/02/16
                </p>
              </div>
              <p
                style={{
                  color: '#404040',
                  fontSize: '14px',
                  fontWeight: '400',
                  textAlign: 'right',
                }}
              >
                غذا خیلی خوب بود و کامل پخته شده بود بسیار عالی😜
              </p>
              <div
                className='d-flex flex-wrap'
                style={{ justifyContent: 'right' }}
              >
                <div className='foodCm'>سالاد فصل</div>
                <div className='foodCm'>قیمه نثار با گوشت فراوان</div>
                <div className='foodCm'>جوجه کباب بناب</div>
                <div className='foodCm'>جوجه کباب بناب</div>
              </div>
              <div
                style={{
                  border: '1px solid #e6e6e6',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#5094bb',
                  }}
                >
                  پاسخ مدیر رستوران
                </p>
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '12px',
                    fontWeight: '300',
                    color: '#5094bb',
                  }}
                >
                  نوش جان
                </p>
              </div>
            </div>
            <hr />
          </div>

          {/* comments */}
        </div>
      </div>
    </>
  )
}

export default Info
