import { React, useRef, useEffect, useState, useCallback } from 'react'
import OrderTypeSlider from '../../component/Slider/OrderTypeSlider'
import { ImLocation2 } from 'react-icons/im'
import { AiFillClockCircle, AiFillInstagram, AiFillStar } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { RequestUtils } from '../../Utils/RequestUtils'
import { FaInfoCircle, FaStar, FaCommentDots } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import Back from '../../component/BackComponent/Back'
import EditMap from '../../component/Map/EditMap'
const Info = () => {
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

  return (
    <>
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
              اطلاعات
            </p>
          </div>
          <hr />
          <div className='row'>
            <div className='mt-2 col-lg-4 col-md-4 col-sm-4 col-4'>
              <img
                src={info && info.image}
                alt={info && info.brandName}
                className='infoImg'
              />
            </div>
            <div className='mt-2 col-lg-8 col-md-8 col-sm-8 col-8'>
              <p
                style={{
                  textAlign: 'right',
                  fontSize: '18px',
                  fontWeight: '800',
                }}
              >
                {info && info.brandName}
              </p>
              <p
                style={{
                  textAlign: 'right',
                  fontSize: '12px',
                  fontWeight: '200',
                  lineHeight: '16px',
                  lineBreak: 'anywhere',
                }}
              >
                {info && info.details}
              </p>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
              {info && info.latitude.length > 1 && info.longitude.length > 1 ? (
                <EditMap lat={info.latitude} long={info.longitude} />
              ) : null}
            </div>
            <div
              className='d-flex mt-2 col-lg-8 col-md-8 col-sm-8 col-8'
              style={{ justifyContent: 'right' }}
            >
              <p className='mx-2'> کرج، چالوس، کیلومتر12</p>
              <ImLocation2 style={{ color: '#5094bb' }} size={20} />
            </div>
          </div>
          <hr />
          <div style={{ marginBottom: '100px' }}>
            <div className='mt-3'>
              <div
                style={{
                  backgroundColor: '#f7f7f4',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  justifyContent: 'space-between',
                }}
                className='d-flex'
              >
                <div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info
                        ? info && info.workTime.saturday.morning_start
                        : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.saturday.morning_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.saturday.noon_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.saturday.noon_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.saturday.night_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.saturday.night_end : null}
                    </p>
                  </div>
                </div>
                <p
                  className='my-auto'
                  style={{
                    color: '#a3a3a3',
                    fontSize: '18px',
                    fontWeight: '400',
                  }}
                >
                  شنبه
                </p>
              </div>
            </div>
            <div className='mt-3'>
              <div
                style={{
                  backgroundColor: '#f7f7f4',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  justifyContent: 'space-between',
                }}
                className='d-flex'
              >
                <div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.sunday.morning_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.sunday.morning_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.sunday.noon_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.sunday.noon_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.sunday.night_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.sunday.night_end : null}
                    </p>
                  </div>
                </div>
                <p
                  className='my-auto'
                  style={{
                    color: '#a3a3a3',
                    fontSize: '18px',
                    fontWeight: '400',
                  }}
                >
                  یک شنبه
                </p>
              </div>
            </div>
            <div className='mt-3'>
              <div
                style={{
                  backgroundColor: '#f7f7f4',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  justifyContent: 'space-between',
                }}
                className='d-flex'
              >
                <div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.monday.morning_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.monday.morning_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.monday.noon_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.monday.noon_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.monday.night_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.monday.night_end : null}
                    </p>
                  </div>
                </div>
                <p
                  className='my-auto'
                  style={{
                    color: '#a3a3a3',
                    fontSize: '18px',
                    fontWeight: '400',
                  }}
                >
                  دو شنبه
                </p>
              </div>
            </div>
            <div className='mt-3'>
              <div
                style={{
                  backgroundColor: '#f7f7f4',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  justifyContent: 'space-between',
                }}
                className='d-flex'
              >
                <div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info
                        ? info && info.workTime.tuesday.morning_start
                        : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.tuesday.morning_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.tuesday.noon_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.tuesday.noon_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.tuesday.night_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.tuesday.night_end : null}
                    </p>
                  </div>
                </div>
                <p
                  className='my-auto'
                  style={{
                    color: '#a3a3a3',
                    fontSize: '18px',
                    fontWeight: '400',
                  }}
                >
                  سه شنبه
                </p>
              </div>
            </div>
            <div className='mt-3'>
              <div
                style={{
                  backgroundColor: '#f7f7f4',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  justifyContent: 'space-between',
                }}
                className='d-flex'
              >
                <div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info
                        ? info && info.workTime.wednesday.morning_start
                        : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info
                        ? info && info.workTime.wednesday.morning_end
                        : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.wednesday.noon_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.wednesday.noon_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info
                        ? info && info.workTime.wednesday.night_start
                        : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.wednesday.night_end : null}
                    </p>
                  </div>
                </div>
                <p
                  className='my-auto'
                  style={{
                    color: '#a3a3a3',
                    fontSize: '18px',
                    fontWeight: '400',
                  }}
                >
                  چهار شنبه
                </p>
              </div>
            </div>
            <div className='mt-3'>
              <div
                style={{
                  backgroundColor: '#f7f7f4',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  justifyContent: 'space-between',
                }}
                className='d-flex'
              >
                <div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info
                        ? info && info.workTime.thursday.morning_start
                        : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.thursday.morning_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.thursday.noon_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.thursday.noon_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.thursday.night_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.thursday.night_end : null}
                    </p>
                  </div>
                </div>
                <p
                  className='my-auto'
                  style={{
                    color: '#a3a3a3',
                    fontSize: '18px',
                    fontWeight: '400',
                  }}
                >
                  پنج شنبه
                </p>
              </div>
            </div>
            <div className='mt-3'>
              <div
                style={{
                  backgroundColor: '#f7f7f4',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  justifyContent: 'space-between',
                }}
                className='d-flex'
              >
                <div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.friday.morning_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.friday.morning_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.friday.noon_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.friday.noon_end : null}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.friday.night_start : null}
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                      className='mx-3'
                    >
                      -
                    </p>
                    <p
                      style={{
                        color: '#404040',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginBottom: '5px',
                      }}
                    >
                      {info ? info && info.workTime.friday.night_end : null}
                    </p>
                  </div>
                </div>
                <p
                  className='my-auto'
                  style={{
                    color: '#a3a3a3',
                    fontSize: '18px',
                    fontWeight: '400',
                  }}
                >
                  جمعه
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
