import { React, useRef, useEffect, useState, useCallback } from 'react'
import OrderTypeSlider from '../../component/Slider/OrderTypeSlider'
import { ImLocation2 } from 'react-icons/im'
import { AiFillClockCircle, AiFillInstagram, AiFillStar } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { RequestUtils } from '../../Utils/RequestUtils'
import { FaInfoCircle, FaStar, FaCommentDots } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import Grow from '@mui/material/Grow'
import Reserve from '../Reserve/Reserve'
import OrderOnline from '../OrderOnline/OrderOnline'
const Info = () => {
  const { pathname } = useLocation()
  const resBarcode = pathname.split('/')[2]
  const [info, setInfo] = useState('')
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
          <img
            src={info && info.image}
            alt={info && info.brandName}
            className='my-5'
            style={{ width: '100%', borderRadius: '15px', height: '200px' }}
          />

          <div
            className='d-flex my-3'
            style={{ justifyContent: 'space-around' }}
          >
            <LinkContainer
              to={`/reviews/${resBarcode}`}
              style={{
                cursor: 'pointer',
                borderRight: '1px solid gray',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              <div
                style={{
                  borderRight: '1px solid gray',
                  paddingRight: '20px',
                  paddingLeft: '20px',
                }}
              >
                <FaCommentDots style={{ color: '#5094bb' }} size={20} />
                <p
                  className='mt-2'
                  style={{ fontSize: '11px', fontWeight: 'small' }}
                >
                  نظرات
                </p>
              </div>
            </LinkContainer>

            <LinkContainer
              to={`/singleInfo/${resBarcode}`}
              style={{
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  cursor: 'pointer',
                }}
              >
                <FaInfoCircle style={{ color: '#5094bb' }} size={20} />
                <p
                  className='mt-2'
                  style={{ fontSize: '11px', fontWeight: 'small' }}
                >
                  اطلاعات
                </p>
              </div>
            </LinkContainer>
            <div
              style={{
                borderLeft: '1px solid gray',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              <FaStar style={{ color: '#e5970a' }} size={20} />
              <p
                className='mt-2'
                style={{
                  fontSize: '11px',
                  fontWeight: 'small',
                  direction: 'rtl',
                }}
              >
                4.65
              </p>
            </div>
          </div>

          {/* <div className=' my-3'>
            <OrderTypeSlider id={info && info.id} />
          </div> */}

          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label='lab API tabs example'
              className='px-2'
              style={{ justifyContent: 'center' }}
            >
              <Tab
                style={
                  value === '3'
                    ? {
                        borderRadius: '25px',
                        textAlign: 'center',
                        width: '31%',
                        boxShadow: ' 0px 0px 5px 1px rgb(0 0 0 / 50%)',
                        padding: '12px 15px',
                        background: 'white',
                        fontSize: '11px',
                        fontWeight: 'bolder',
                      }
                    : {
                        borderRadius: '25px',
                        textAlign: 'center',
                        width: '31%',
                        boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
                        padding: '12px 15px',
                        background: 'white',
                        fontSize: '10px',
                        fontWeight: 'bold',
                      }
                }
                className='my-2 fontSize'
                label='رزرو میز'
                value='3'
              />
              <Tab
                style={
                  value === '2'
                    ? {
                        borderRadius: '25px',
                        textAlign: 'center',
                        width: '31%',
                        boxShadow: ' 0px 0px 5px 1px rgb(0 0 0 / 50%)',
                        padding: '12px 15px',
                        background: 'white',
                        fontSize: '11px',
                        fontWeight: 'bolder',
                      }
                    : {
                        borderRadius: '25px',
                        textAlign: 'center',
                        width: '31%',
                        boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
                        padding: '12px 15px',
                        background: 'white',
                        fontSize: '10px',
                        fontWeight: 'bold',
                      }
                }
                className='my-2 fontSize'
                label='سفارش بیرون بر'
                value='2'
              />
              <Tab
                style={
                  value === '1'
                    ? {
                        borderRadius: '25px',
                        textAlign: 'center',
                        width: '31%',
                        boxShadow: ' 0px 0px 5px 1px rgb(0 0 0 / 50%)',
                        padding: '12px 15px',
                        background: 'white',
                        fontSize: '11px',
                        fontWeight: 'bolder',
                      }
                    : {
                        borderRadius: '25px',
                        textAlign: 'center',
                        width: '31%',
                        boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
                        padding: '12px 15px',
                        background: 'white',
                        fontSize: '10px',
                        fontWeight: 'bold',
                      }
                }
                className='my-2 fontSize'
                label='سفارش حضوری'
                value='1'
              />
            </TabList>
            <TabPanel value='1'>
              <Grow
                in={true}
                timeout={500}
                style={{ transformOrigin: '0 0 0' }}
              >
                <div className='mt-3'>
                  <OrderOnline orderType={1} />
                </div>
              </Grow>
            </TabPanel>
            <TabPanel value='2'>
              <Grow
                in={true}
                timeout={500}
                style={{ transformOrigin: '0 0 0' }}
              >
                <div className='mt-3'>
                  <OrderOnline orderType={2} />
                </div>
              </Grow>
            </TabPanel>
            <TabPanel value='3'>
              <Grow
                in={true}
                timeout={500}
                style={{ transformOrigin: '0 0 0' }}
              >
                <div className='mt-3'>
                  <Reserve />
                </div>
              </Grow>
            </TabPanel>
          </TabContext>

          <div className='my-3' style={{ textAlign: 'right' }}>
            <p
              className='mt-2'
              style={{ fontWeight: 'bolder', fontSize: '20px' }}
            >
              {info && info.brandName}
            </p>
            <div className='my-3'>
              <div className='d-flex mt-2' style={{ justifyContent: 'right' }}>
                <p className='mx-2'> کرج، چالوس، کیلومتر12</p>
                <ImLocation2 style={{ color: '#5094bb' }} size={20} />
              </div>

              <div className='d-flex mt-2' style={{ justifyContent: 'right' }}>
                <p className='mx-2'>{info && info.telephone}</p>
                <AiFillInstagram style={{ color: '#5094bb' }} size={20} />
              </div>
            </div>
          </div>

          <div
            className='mt-3  py-3 px-4'
            style={{
              textAlign: 'right',
              background: '#7c7c7c38',
              borderRadius: '15px',
              marginBottom: '80px',
              marginTop: '20px',
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
              {info ? info && info.details : null}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
