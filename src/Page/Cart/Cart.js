import { React, useRef, useEffect, useState } from 'react'
import { useProjectContext } from '../../context/ProjectProvider'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaPlus, FaMinus } from 'react-icons/fa'
import CodeValidateModal from './CodeValidateModal'
import Login from '../../component/LoginRegister/Login'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'
import WheelPicker from 'react-wheelpicker'
import { RequestUtils } from '../../Utils/RequestUtils'
import Select from 'react-select'
import { Cookies, useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
import Loader from '../../component/Loading/LoginLoading'
import Back from '../../component/BackComponent/Back'
import { useHistory } from 'react-router-dom'

const Cart = () => {
  let history = useHistory()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const elementRef = useRef(null)
  const { pathname } = useLocation()
  const resUrl = pathname.split('/')[2]
  const orderType = pathname.split('/')[3]
  const price = []
  const [totalCountp, setTotalCountp] = useState('')
  const [listTable, setListTable] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(false)

  const {
    codeValidate,
    codeValidateShow,
    loginModal,
    loginModalShow,
    cart,
    addToCart,
    removeFromCart,
    tableId,
    setTableId,
    tableCode,
    setTableCode,
    userData,
    reservedTableInfo,
    setReservedTableInfo,
  } = useProjectContext()
  const nummber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  const handleDescChange = (e) => {
    setDescription(e.target.value)
  }
  const tableList = async () => {
    let res = await RequestUtils.tableList(resUrl)
    if (res.isDone) {
      setListTable(res.data)
    }
  }
  const orderProduct = async (paymentType) => {
    if (paymentType === '2') {
      setLoading(true)
    } else {
      setLoading1(true)
    }

    let products = {}
    Object.keys(cart).map((e) => {
      products[e] = cart[e].amount
    })
    // for (let item in cart) {
    //   products[cart[item]['pro']['id']] = cart[item].amount
    // }
    console.log(cart)
    console.log(products)
    // if (orderType === '1') {
    //   if (tableId === '') {
    //     Swal.fire({
    //       type: 'warning',
    //       text: 'لطفا میز خود را انتخاب کنید',
    //       confirmButtonText: 'فهمیدم',
    //     })
    //     setLoading(false)
    //     setLoading1(false)
    //   } else {
    //     let res = await RequestUtils.orderProduct(
    //       userData ? userData['customerId'] : '',
    //       paymentType,
    //       resUrl,
    //       description,
    //       totalCountp,
    //       tableCode,
    //       products,
    //       tableId
    //     )
    //     if (res.isDone) {
    //       setLoading1(false)
    //       setLoading(false)

    //       if (res.data.url) {
    //         console.log('dargah pardakht')
    //       } else {
    //         if (userData) {
    //           Swal.fire({
    //             type: 'success',
    //             text: 'سفارش شما با موفقیت ثبت شد',
    //             confirmButtonText: 'فهمیدم',
    //           })
    //           setTimeout(() => {
    //             localStorage.removeItem('cart')
    //             window.location.reload(true)
    //             history.push(`/cart/${resUrl}/${orderType}`)
    //           }, 1000)
    //         } else {
    //           Swal.fire({
    //             text: 'سفارش شما با موفقیت ثبت شد .در صورت ثبت نام در سایت میتوانید از امتیازات ویژه برخوردار شوید و عضوی از باشگاه مشتریان ما شوید.',
    //             type: 'success',
    //             showCancelButton: true,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'ثبت نام',
    //             cancelButtonText: 'بعدا',
    //           }).then((result) => {
    //             if (result.dismiss === 'cancel') {
    //               setTimeout(() => {
    //                 localStorage.removeItem('cart')
    //                 window.location.reload(true)
    //                 history.push(`/cart/${resUrl}/${orderType}`)
    //               }, 500)
    //             } else {
    //               localStorage.removeItem('cart')
    //               history.push(`/cart/${resUrl}/${orderType}`)
    //               loginModalShow()
    //             }
    //           })
    //         }
    //       }
    //     } else {
    //       setLoading1(false)
    //       setLoading(false)

    //       Swal.fire({
    //         type: 'warning',
    //         text: 'ثبت شفارش با مشکل مواجه شده است لطفا دوباره تلاش کنید',
    //         confirmButtonText: 'فهمیدم',
    //       })
    //     }
    //   }
    // } else {
    //   if (userData) {
    //     let res = await RequestUtils.orderProduct(
    //       userData['customerId'],
    //       paymentType,
    //       resUrl,
    //       description,
    //       totalCountp,
    //       tableCode,
    //       products,
    //       tableId
    //     )
    //     if (res.isDone) {
    //       setLoading1(false)
    //       setLoading(false)

    //       if (res.data.url) {
    //         console.log('dargah pardakht')
    //       } else {
    //         Swal.fire({
    //           type: 'success',
    //           text: 'سفارش شما با موفقیت ثبت شد',
    //           confirmButtonText: 'فهمیدم',
    //         })
    //         setTimeout(() => {
    //           localStorage.removeItem('cart')
    //           window.location.reload(true)
    //           history.push(`/cart/${resUrl}/${orderType}`)
    //         }, 1000)
    //       }
    //     } else {
    //       setLoading1(false)
    //       setLoading(false)

    //       Swal.fire({
    //         type: 'warning',
    //         text: 'ثبت شفارش با مشکل مواجه شده است لطفا دوباره تلاش کنید',
    //         confirmButtonText: 'فهمیدم',
    //       })
    //     }
    //   } else {
    //     Swal.fire({
    //       text: 'برای ثبت سفارش ابتدا باید در سایت ثبت نام کنید.',
    //       type: 'warning',
    //       showCancelButton: true,
    //       confirmButtonColor: '#3085d6',
    //       cancelButtonColor: '#d33',
    //       confirmButtonText: 'ثبت نام',
    //       cancelButtonText: 'بعدا',
    //     }).then((result) => {
    //       if (result.value) {
    //         loginModalShow()
    //       }
    //     })
    //     setLoading(false)
    //     setLoading1(false)
    //   }
    // }
  }

  function myFunc(total, num) {
    return parseInt(total) + parseInt(num)
  }
  useEffect(() => {
    tableList()
  }, [resUrl])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cart'))) {
      if (Object.keys(JSON.parse(localStorage.getItem('cart'))).length !== 0) {
        Object.keys(JSON.parse(localStorage.getItem('cart'))).map((e) => {
          if (cart[e]['props']) {
            price.push(
              myFunc(
                cart[e]['priceArr'].reduce(myFunc) * cart[e]['amount'],
                cart[e]['pro']['price'] * cart[e]['amount']
              )
            )
            setTotalCountp(price.reduce((partial_sum, a) => partial_sum + a, 0))
          } else {
            price.push(
              JSON.parse(localStorage.getItem('cart'))[e]['pro']['price'] *
                JSON.parse(localStorage.getItem('cart'))[e]['amount']
            )
            setTotalCountp(price.reduce((partial_sum, a) => partial_sum + a, 0))
          }
        })
      }
    }
  }, [localStorage.getItem('cart')])

  if (cart && Object.keys(cart).length !== 0) {
    return (
      <>
        <div
          style={{
            textAlign: 'center',
            top: '-50px',
            position: 'absolute',
            width: '-webkit-fill-available',
          }}
          className='mt-5 divInfo'
        >
          <Back />
          <div
            className='col-md-11 col-sm-11 col-11 m-auto'
            style={{ justifyContent: 'center' }}
          >
            <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>سبد خرید</p>

            {cart && Object.keys(cart).length !== 0 ? (
              <>
                {Object.keys(cart).map((e, index) => {
                  return (
                    <>
                      {cart[e]['props'] ? (
                        <div>
                          {
                            <>
                              <div
                                className='d-flex mt-5'
                                style={{
                                  justifyContent: 'space-between',
                                }}
                              >
                                <div className='d-flex foodBoxStyle'>
                                  <div
                                    style={{
                                      backgroundColor: ' #D90000',
                                      borderRadius: '4px',
                                      height: 'max-content',
                                      padding: '2px 5px',
                                    }}
                                  >
                                    <FaMinus
                                      onClick={() =>
                                        removeFromCart(
                                          cart[e]['pro'],
                                          cart[e]['props'],
                                          e,
                                          cart[e]['priceArr']
                                        )
                                      }
                                      className='mt-1'
                                      style={{ color: 'white' }}
                                    />
                                  </div>
                                  <p className='mx-2'> {cart[e]['amount']}</p>
                                  <div
                                    style={{
                                      backgroundColor: '#20C900',
                                      borderRadius: '4px',
                                      height: 'max-content',
                                      padding: '2px 5px',
                                    }}
                                  >
                                    <FaPlus
                                      onClick={() =>
                                        addToCart(
                                          cart[e]['pro'],
                                          cart[e]['props'],
                                          e,
                                          cart[e]['priceArr']
                                        )
                                      }
                                      className='mt-1'
                                      style={{ color: 'white' }}
                                    />
                                  </div>
                                </div>
                                <div className='d-flex foodBoxStyle'>
                                  <p
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    تومان
                                  </p>
                                  <p
                                    className='mx-2'
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    {nummber(
                                      cart[e]['priceArr'] &&
                                        myFunc(
                                          cart[e]['priceArr'].reduce(myFunc) *
                                            cart[e]['amount'],
                                          cart[e]['pro']['price'] *
                                            cart[e]['amount']
                                        )
                                    )}
                                  </p>
                                  <BiPurchaseTag className='mt-1' size={15} />
                                </div>
                                <div>
                                  <p
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: 'bold',

                                      textAlign: 'right',
                                    }}
                                  >
                                    {cart[e]['pro']['product_name']}
                                  </p>
                                  <p>
                                    {Object.keys(cart[e]['props']).map((j) => {
                                      return (
                                        <span>
                                          {cart[e]['props'][j] != null
                                            ? '  ' +
                                              '-' +
                                              '  ' +
                                              cart[e]['props'][j]['name']
                                            : ''}
                                        </span>
                                      )
                                    })}
                                  </p>
                                </div>
                              </div>
                              <hr />
                            </>
                          }
                        </div>
                      ) : (
                        <>
                          <div
                            className='d-flex mt-5'
                            style={{ justifyContent: 'space-between' }}
                          >
                            <div className='d-flex foodBoxStyle'>
                              <div
                                style={{
                                  backgroundColor: ' #D90000',
                                  borderRadius: '4px',
                                  height: 'max-content',
                                  padding: '2px 5px',
                                }}
                              >
                                <FaMinus
                                  onClick={() => removeFromCart(cart[e]['pro'])}
                                  className='mt-1'
                                  style={{ color: 'white' }}
                                />
                              </div>
                              <p className='mx-2'> {cart[e]['amount']}</p>
                              <div
                                style={{
                                  backgroundColor: '#20C900',
                                  borderRadius: '4px',
                                  height: 'max-content',
                                  padding: '2px 5px',
                                }}
                              >
                                <FaPlus
                                  onClick={() => addToCart(cart[e]['pro'])}
                                  className='mt-1'
                                  style={{ color: 'white' }}
                                />
                              </div>
                            </div>
                            <div className='d-flex foodBoxStyle'>
                              <p
                                style={{ fontSize: '12px', fontWeight: 'bold' }}
                              >
                                تومان
                              </p>
                              <p
                                className='mx-2'
                                style={{ fontSize: '12px', fontWeight: 'bold' }}
                              >
                                {nummber(
                                  cart[e]['amount'] * cart[e]['pro']['price']
                                )}
                              </p>
                              <BiPurchaseTag className='mt-1' size={15} />
                            </div>
                            <p
                              style={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                                textAlign: 'right',
                              }}
                            >
                              {cart[e]['pro']['product_name']}
                            </p>
                          </div>
                          <hr />
                        </>
                      )}
                    </>
                  )
                })}
              </>
            ) : null}

            <div
              className='my-5'
              style={{
                justifyContent: 'space-around',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '0px 0px 10px -5px rgb(0 0 0 / 50%)',
              }}
            >
              <div
                className='d-flex'
                style={{ justifyContent: 'space-between' }}
              >
                <div className='d-flex foodBoxStyle'>
                  <p style={{ fontSize: '12px', fontWeight: 'bold' }}>تومان</p>
                  <p
                    className='mx-2'
                    style={{ fontSize: '12px', fontWeight: 'bold' }}
                  >
                    {nummber(totalCountp)}
                  </p>
                  <BiPurchaseTag className='mt-1' size={15} />
                </div>
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  مبلغ سفارش
                </p>
              </div>
              {orderType === '2' ? (
                <>
                  <div
                    className='d-flex '
                    style={{ justifyContent: 'space-between' }}
                  >
                    <div className='d-flex foodBoxStyle'>
                      <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        تومان
                      </p>
                      <p
                        className='mx-2'
                        style={{ fontSize: '12px', fontWeight: 'bold' }}
                      >
                        {nummber(15000)}
                      </p>
                      <BiPurchaseTag className='mt-1' size={15} />
                    </div>
                    <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                      هزینه ارسال
                    </p>
                  </div>
                  <hr />
                  <div
                    className='d-flex '
                    style={{ justifyContent: 'space-between' }}
                  >
                    <div className='d-flex foodBoxStyle'>
                      <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        تومان
                      </p>
                      <p
                        className='mx-2'
                        style={{ fontSize: '12px', fontWeight: 'bold' }}
                      >
                        {nummber(53000)}
                      </p>
                      <BiPurchaseTag className='mt-1' size={15} />
                    </div>
                    <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                      مبلغ کل
                    </p>
                  </div>
                </>
              ) : null}
            </div>

            {orderType === '1' ? (
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0px 0px 10px -5px rgb(0 0 0 / 50%)',
                  marginTop: '10px',
                  marginBottom: '20px',
                  height: '160px',
                }}
              >
                <div className='d-flex' style={{ justifyContent: 'center' }}>
                  <p
                    onClick={() => codeValidateShow()}
                    style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      padding: '10px',
                      color: '#268BFF',
                      cursor: 'pointer',
                    }}
                  >
                    آیا میز رزرو شده دارید؟
                  </p>

                  {codeValidate ? <CodeValidateModal /> : null}

                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      borderLeft: '1px solid ',
                      padding: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    میز خود را انتخاب کنید
                  </p>
                </div>
                <div style={{ marginBottom: '100px' }}>
                  <Select
                    style={{ height: '50px' }}
                    isRtl={true}
                    placeholder={<div>شماره میز</div>}
                    noOptionsMessage={() => 'نتیجه ای یافت نشد!'}
                    onChange={(e) => {
                      setTableId(e.value)
                      setTableCode('')
                    }}
                    options={
                      listTable &&
                      listTable.map((e) => {
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
                  {reservedTableInfo ? (
                    <p
                      style={{
                        textAlign: 'right',
                        marginTop: '10px',
                        marginBottom: '5px',
                        color: 'red',
                        fontWeight: 'bold',
                        fontSize: '10px',
                      }}
                    >
                      شما میز شماره {reservedTableInfo['table_number']} را رزرو
                      کردید
                    </p>
                  ) : null}
                </div>

                {/* <div className='demo-container' style={{ position: 'sticky' }}>
                <WheelPicker
                  animation='flat'
                  data={data && data}
                  height={40}
                  parentHeight={130}
                  fontSize={13}
                  defaultSelection={state.defaultSelection}
                  updateSelection={(selectedIndex) =>
                    setState({
                      selection: data[selectedIndex],
                      defaultSelection: selectedIndex,
                    })
                  }
                  scrollerId='scroll-select-subject'
                />
              </div> */}
              </div>
            ) : null}

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '0px 0px 10px -5px rgb(0 0 0 / 50%)',
                marginBottom: '80px',
              }}
            >
              <p
                style={{
                  textAlign: 'right',
                  fontWeight: 'bolder',
                  fontSize: '12px',
                }}
              >
                توضیحات سفارش
              </p>
              <textarea
                onChange={handleDescChange}
                value={description}
                type='text'
                style={{
                  borderRadius: '5px',
                  border: '1px solid #ddd7d7',
                  width: '100%',
                  direction: 'rtl',
                  padding: '7px',
                }}
              ></textarea>
            </div>

            <div
              className='d-flex'
              style={{
                justifyContent: 'space-around',
              }}
            >
              <div>
                <button
                  className='mx-2'
                  onClick={() => orderProduct('2')}
                  style={{
                    color: 'white',
                    backgroundColor: '#20C900',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    marginBottom: '80px',
                    border: 'none',
                  }}
                >
                  {loading ? <Loader /> : 'پرداخت آنلاین'}
                </button>

                <button
                  onClick={() => orderProduct('1')}
                  className='mx-2'
                  style={{
                    color: 'white',
                    backgroundColor: '#20C900',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    marginBottom: '80px',
                  }}
                >
                  {loading1 ? <Loader /> : 'پرداخت نقدی'}
                </button>
              </div>
              {loginModal ? <Login /> : null}
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className=' divInfo' ref={elementRef}></div>
        <div
          style={{
            textAlign: 'center',
            top: '-50px',
            position: 'absolute',
            width: '-webkit-fill-available',
          }}
          className='my-5'
        >
          <Back />
          <h4 style={{ marginTop: '30px' }}>سبد خرید شما خالی است</h4>
          <LinkContainer
            to={`/info/${resUrl}`}
            style={{
              color: 'white',
              backgroundColor: '#20C900',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              marginTop: '35px',
            }}
          >
            <button>سفارش</button>
          </LinkContainer>
        </div>
      </>
    )
  }
}

export default Cart
