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
const Cart = () => {
  const elementRef = useRef(null)
  const { pathname } = useLocation()
  const resUrl = pathname.split('/')[1]
  const price = []
  const [status, setStatus] = useState(true)
  const [totalCountp, setTotalCountp] = useState('')
  const {
    codeValidate,
    codeValidateShow,
    loginModal,
    loginModalShow,
    cart,
    addToCart,
    removeFromCart,
    totalCount,
    updateUi,
    setTotalCount,
    tableId,
    setTableId,
  } = useProjectContext()
  const nummber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const [state, setState] = useState({
    defaultSelection: 0,
    selection: '1 نفره',
  })
  const data = ['1 نفره', '2 نفره', '3 نفره', '4 نفره', '5 نفره']

  const tableList = async () => {
    let res = await RequestUtils.tableList(resUrl)
    console.log(res)
    console.log(tableId)
  }

  useEffect(() => {
    tableList()
    elementRef.current.style.height = `${window.innerHeight}px`
  })
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cart'))) {
      if (Object.keys(JSON.parse(localStorage.getItem('cart'))).length !== 0) {
        Object.keys(JSON.parse(localStorage.getItem('cart'))).map((index) => {
          price.push(
            JSON.parse(localStorage.getItem('cart'))[index]['pro']['price'] *
              JSON.parse(localStorage.getItem('cart'))[index]['amount']
          )
          setTotalCountp(price.reduce((partial_sum, a) => partial_sum + a, 0))
        })
      }
    }
  }, [localStorage.getItem('cart')])

  if (cart && Object.keys(cart).length !== 0) {
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
            <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>سبد خرید</p>

            {cart && Object.keys(cart).length !== 0 ? (
              <>
                {Object.keys(cart).map((e, index) => {
                  return (
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
                          <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
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
                            width: '20%',
                            textAlign: 'right',
                          }}
                        >
                          {cart[e]['pro']['product_name']}
                        </p>
                      </div>
                      <hr />
                    </>
                  )
                })}
              </>
            ) : null}

            <div
              className='d-flex my-5'
              style={{
                justifyContent: 'space-around',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '0px 0px 10px -5px rgb(0 0 0 / 50%)',
              }}
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
                مبلغ کل صورت حساب
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '0px 0px 10px -5px rgb(0 0 0 / 50%)',
                marginBottom: '100px',
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

              <div className='demo-container' style={{ position: 'sticky' }}>
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
              </div>
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
                  onClick={loginModalShow}
                  style={{
                    color: 'white',
                    backgroundColor: '#20C900',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: 'none',
                  }}
                >
                  پرداخت آنلاین
                </button>
                {loginModal ? <Login /> : null}
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
                  پرداخت نقدی
                </button>
              </div>
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
            top: '0',
            position: 'absolute',
            width: '-webkit-fill-available',
          }}
          className='my-5'
        >
          <h4 style={{ marginTop: '30px' }}>سبد خرید شما خالی است</h4>
          <LinkContainer
            to={`/${resUrl}/orderonline`}
            style={{
              color: 'white',
              backgroundColor: '#20C900',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              marginTop: '35px',
            }}
          >
            <button>خرید</button>
          </LinkContainer>
        </div>
      </>
    )
  }
}

export default Cart
