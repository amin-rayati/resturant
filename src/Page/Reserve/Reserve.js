import { React, useRef, useEffect, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import DatePicker from 'react-datepicker2'
import TextField from '@mui/material/TextField'
import MobileTimePicker from '@mui/lab/MobileTimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { useProjectContext } from '../../context/ProjectProvider'
import { Cookies, useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'
import { RequestUtils } from '../../Utils/RequestUtils'
import Select from 'react-select'
import Login from '../../component/LoginRegister/Login'
import Loader from '../../component/Loading/LoginLoading'
import Back from '../../component/BackComponent/Back'
const Reserve = () => {
  const elementRef = useRef(null)
  const { pathname } = useLocation()
  const resUrl = pathname.split('/')[2]
  const today = new Date()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { loginModalShow, userData, loginModal } = useProjectContext()

  const [resInfo, setResInfo] = useState('')
  const [ListTable, setListTable] = useState('')
  const [tableId, setTableId] = useState('')
  const [inTime, setInTime] = useState(new Date())
  const [outTime, setOutTime] = useState('')
  const [peopleCount, setPeopleCount] = useState('1')
  const [date, setDate] = useState('')

  const [tableReq, setTableReq] = useState(false)
  const [dateReq, setDateReq] = useState(false)
  const [outTimeReq, setOutTimeReq] = useState(false)
  const [loading, setLoading] = useState(false)

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
    setTimeout(() => {
      setDateReq(false)
    }, 100)
  }
  const resturantInfo = async () => {
    const res = await RequestUtils.resturantInfo(resUrl)
    setResInfo(res.data)
  }
  const tableList = async () => {
    const res = await RequestUtils.tableList(resUrl)
    setListTable(res.data)
  }
  const reserve = async () => {
    setLoading(true)
    if (
      document.getElementsByClassName('datepicker-input')[0].value.length < 5
    ) {
      setDateReq(true)
      setLoading(false)
      return
    }
    if (tableId.length < 1) {
      setTableReq(true)
      setLoading(false)
      return
    }

    let res = await RequestUtils.reserve(
      userData['customerId'],
      document.getElementsByClassName('datepicker-input')[0].value,
      tableId,
      document.getElementById('mui-3').value.split(' ')[0],
      document.getElementById('mui-1').value.split(' ')[0]
    )
    if (res.isDone) {
      setLoading(false)

      Swal.fire({
        type: 'success',
        text: 'میز شما باموفقیت رزرو شد!لطفا درهنگام سفارش غذا کد ارسال شده را وارد کنید!',
        confirmButtonText: 'فهمیدم',
      })
    }
  }

  useEffect(() => {
    tableList()
    resturantInfo()
  }, [resUrl])

  // useEffect(() => {
  //   elementRef.current.style.height = `${window.innerHeight}px`
  // })

  return (
    <>
      {/* <div className=' divInfo' ref={elementRef}></div> */}
      <div
      // style={{
      //   textAlign: 'center',
      //   top: '-50px',
      //   position: 'absolute',
      //   width: '-webkit-fill-available',
      // }}
      // className='my-5'
      >
        {/* <Back /> */}
        <div
          className='col-md-11 col-sm-11 col-11 m-auto'
          style={{ justifyContent: 'center' }}
        >
          <p
            style={{
              fontWeight: 'bolder',
              fontSize: '20px',
              textAlign: 'right',
            }}
          >
            رزرو میز
          </p>
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
              className={dateReq ? ' date dateReq' : 'date'}
              min={{ before: today }}
            />
            {dateReq ? (
              <h5
                className='mt-2'
                style={{
                  color: '#dc3545',
                  textAlign: 'right',
                  fontSize: '10px',
                }}
              >
                لطفا تاریخ رزرو را انتخاب کنید
              </h5>
            ) : (
              ''
            )}
          </div>

          <div>
            <Select
              isRtl={true}
              className={tableReq ? 'selectReq' : ''}
              placeholder={<div>شماره میز</div>}
              noOptionsMessage={() => 'نتیجه ای یافت نشد!'}
              onChange={(e) => {
                setTableId(e.value)
                setTimeout(() => {
                  setTableReq(false)
                }, 100)
              }}
              options={
                ListTable &&
                ListTable.map((e) => {
                  return {
                    label:
                      'میز شماره ' +
                      e.number +
                      '  ' +
                      '(' +
                      e.capacity +
                      'نفره' +
                      ')',
                    value: e.id,
                  }
                })
              }
            ></Select>
            {tableReq ? (
              <h5
                className='mt-2'
                style={{
                  color: '#dc3545',
                  textAlign: 'right',
                  fontSize: '10px',
                }}
              >
                لطفا میز خود را انتخاب کنید
              </h5>
            ) : null}
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
                    ampm={false}
                    label='.'
                    value={
                      outTime
                        ? outTime
                        : new Date(
                            inTime.getTime() +
                              resInfo['reservation_time'] * 60000
                          )
                    }
                    onChange={(newValue) => {
                      setOutTime(newValue)
                    }}
                    minTime={
                      new Date(
                        inTime.getTime() + resInfo['reservation_time'] * 60000
                      )
                    }
                    ampmInClock={true}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                {outTimeReq ? (
                  <h5
                    className='mt-2'
                    style={{
                      color: '#dc3545',
                      textAlign: 'right',
                      fontSize: '10px',
                    }}
                  >
                    لطفا ساعت خروج خود را انتخاب کنید
                  </h5>
                ) : null}

                <div>
                  <p>ورود</p>
                  <MobileTimePicker
                    ampm={false}
                    label='.'
                    value={inTime}
                    onChange={(newValue) => {
                      setInTime(newValue)
                    }}
                    minTime={new Date()}
                    ampmInClock={true}
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
            <div style={{ position: 'static', bottom: '20px' }}>
              <button
                onClick={userData ? () => reserve() : () => loginModalShow()}
                className='mx-2'
                style={{
                  color: 'white',
                  backgroundColor: '#20C900',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  border: 'none',
                }}
              >
                {loading ? <Loader /> : 'تایید نهایی'}
              </button>
            </div>
            {loginModal ? <Login /> : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Reserve
