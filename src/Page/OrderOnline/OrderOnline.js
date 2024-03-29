import { React, useRef, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import CatSlider from '../../component/Slider/CatSlider'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Sheet, { SheetRef } from 'react-modal-sheet'
import { useProjectContext } from '../../context/ProjectProvider'
import Fade from '@mui/material/Fade'
import Loading from '../../component/Loading/Loading'
import { useHistory } from 'react-router-dom'
import { RequestUtils } from '../../Utils/RequestUtils'
import Checkbox from '@mui/material/Checkbox'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Skeleton from '@mui/material/Skeleton'
import Back from '../../component/BackComponent/Back'
import { BiPurchaseTag } from 'react-icons/bi'

const OrderOnline = ({ orderType }) => {
  const { addToCart, cart, removeFromCart } = useProjectContext()
  let history = useHistory()
  const { pathname } = useLocation()
  const resUrl = pathname.split('/')[2]
  const seacrhValue = pathname.split('/')[3]
  const { catId, catName } = useProjectContext()
  const [isOpen, setOpen] = useState(false)
  const [searchVal, setSearchVal] = useState(seacrhValue)

  const [foodList, setFoodList] = useState('')
  const [cat, setCat] = useState('')
  const [foodProperty, setFoodProperty] = useState('')
  const [addons, setAddons] = useState({})
  let arr = []
  let priceArr = []
  let ID

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value)
    history.push(`/info/${resUrl}/${e.target.value}`)
  }
  const handleKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      history.push(`/info/${resUrl}/${searchVal}`)
    }
  }
  const clickSearch = () => {
    history.push(`/info/${resUrl}/${searchVal}`)
  }
  const search = async () => {
    const res = await RequestUtils.search(resUrl, seacrhValue)
    setFoodList(res.data)
  }
  const getResturantCategory = async () => {
    const res = await RequestUtils.getResturantCategory(resUrl)
    setCat(res.data)
  }
  const getResturantFoodList = async () => {
    const res = await RequestUtils.getResturantFoodList(resUrl, catId)
    setFoodList(res.data)
  }
  const getFoodProperty = async (e) => {
    const res = await RequestUtils.getFoodProperty(e.id)

    if (res.data.options) {
      setFoodProperty(res.data)
      setOpen(true)
    } else {
      addToCart(e)
    }
  }
  const nummber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  const addProperty = ({ id, name, productId, price }) => {
    if (!addons.hasOwnProperty(id.toString())) {
      addons[id.toString()] = {}
    }

    if (!addons[id.toString()].hasOwnProperty(id.toString())) {
      addons[id.toString()] = {
        id: id,
        name: name,
        productId: productId,
      }
    }

    arr.push(id)
    priceArr.push(price)
  }
  const setID = (pro, options) => {
    arr.sort(function (a, b) {
      return a - b
    })
    let uniqArr = [...new Set(arr)]
    uniqArr.map((e) => {
      ID += e
    })

    if (Object.keys(addons).length > 0) {
      addToCart(pro, options, ID, priceArr)
    } else {
      addToCart(
        pro,
        [{ id: '0', name: 'بدون افزودنی', productId: pro.id }],
        '0' + pro.id,
        ['0']
      )
    }
    setAddons([])
  }

  function myFunc(total, num) {
    return parseInt(total) + parseInt(num)
  }

  useEffect(() => {
    if (!seacrhValue) {
      getResturantFoodList()
    }
  }, [])

  useEffect(() => {
    getResturantCategory()
    if (!seacrhValue) {
      getResturantFoodList()
    }
  }, [resUrl])

  useEffect(() => {
    if (!seacrhValue) {
      getResturantFoodList()
    }
  }, [catId])

  useEffect(() => {
    search()
  }, [searchVal])

  console.log(cart)

  return (
    <>
      <div>
        <div style={{ justifyContent: 'center' }}>
          <p
            style={{
              fontWeight: 'bolder',
              fontSize: '20px',
              textAlign: 'right',
            }}
          >
            {orderType === 1 ? 'ثبت سفارش حضوری' : 'ثبت سفارش آنلاین'}
          </p>

          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '25px 20px 10px 20px',
              boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
            }}
          >
            <input
              onChange={handleSearchChange}
              value={searchVal}
              onKeyDown={handleKeyDownSearch}
              placeholder='جستجو'
              style={{
                border: '1px solid #B5B5B5',
                width: '100%',
                borderRadius: '10px',
                padding: '10px 15px',
                textAlign: 'right',
                color: '#B5B5B5',
              }}
            />
            <div
              style={{
                textAlign: 'left',
                marginLeft: '20px',
                position: 'relative',
                bottom: '30px',
                width: 'fit-content',
              }}
            >
              <BsSearch style={{ color: '#B5B5B5' }} onClick={clickSearch} />
            </div>
          </div>

          <div style={{ position: 'relative', bottom: '20px' }}>
            <CatSlider cat={cat} />
          </div>

          <div
            className='my-2'
            style={{
              textAlign: 'right',
            }}
          >
            <p
              className='mt-2'
              style={{
                fontWeight: 'bolder',
                fontSize: '20px',
              }}
            >
              {catName ? catName : 'همه'}
            </p>
          </div>

          {!foodList ? (
            <Loading />
          ) : (
            <>
              {foodList.length > 0 ? (
                foodList.map((e, index) => {
                  return (
                    <>
                      <Fade
                        in={true}
                        timeout={index + 100 * index}
                        style={{ transformOrigin: '0 0 0' }}
                      >
                        <div key={e.id} className='row mx-1 my-3'>
                          <div
                            className='col-md-9 col-sm-9 col-8'
                            style={{
                              backgroundColor: '#fff',
                              borderRadius: '10px',
                              padding: '15px 15px',
                              margin: 'auto',
                              boxShadow: '0px 0px 15px -5px rgb(0 0 0 / 50%)',
                            }}
                          >
                            <div
                              className='row'
                              style={{
                                justifyContent: 'space-between',
                                marginTop: '10px',
                              }}
                            >
                              <div className='col-md-6 order-md-1 col-sm-6 order-sm-1 col-6 order-1 text-right '>
                                <div className='d-flex foodBoxStyle'>
                                  <p
                                    style={{
                                      fontSize: '9px',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    تومان
                                  </p>
                                  <p
                                    className='mx-1'
                                    style={{
                                      fontSize: '9px',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    {nummber(e.price)}
                                  </p>
                                </div>
                              </div>

                              <div
                                className='col-md-6 order-md-2 col-sm-6 order-sm-2 col-6 order-2 foodBoxStyle'
                                style={{ textAlign: '-webkit-right' }}
                              >
                                <p
                                  style={{
                                    fontSize: '9px',
                                    fontWeight: 'bolder',
                                  }}
                                >
                                  {e.own_name}
                                </p>
                              </div>
                            </div>

                            <div
                              className='row'
                              style={{
                                justifyContent: 'space-between',
                                marginTop: '4px',
                              }}
                            >
                              <div className='col-md-4 order-md-1 col-sm-4 order-sm-1 col-6 order-1 text-right foodBoxStyle'>
                                <div className='d-flex foodBoxStyle'>
                                  <div className='foodBoxStyle'>
                                    {!cart.hasOwnProperty(e.id) ? (
                                      <button
                                        onClick={() => {
                                          getFoodProperty(e)
                                        }}
                                        style={{
                                          backgroundColor: '#20C900',
                                          borderRadius: '4px',
                                          height: 'max-content',
                                          padding: '4px 10px',
                                          color: 'white',
                                          fontSize: '11px',
                                          border: 'none',
                                        }}
                                      >
                                        افزودن
                                      </button>
                                    ) : (
                                      <div className='d-flex foodBoxStyle'>
                                        <div
                                          style={{
                                            backgroundColor: '#D90000',
                                            borderRadius: '4px',
                                            height: 'max-content',
                                            padding: '2px 5px',
                                          }}
                                        >
                                          <FaMinus
                                            onClick={() => removeFromCart(e)}
                                            className='mt-1'
                                            style={{ color: 'white' }}
                                          />
                                        </div>
                                        <p className='mx-2'>
                                          {cart ? cart[e.id]['amount'] : null}
                                        </p>
                                        <div
                                          style={{
                                            backgroundColor: '#20C900',
                                            borderRadius: '4px',
                                            height: 'max-content',
                                            padding: '2px 5px',
                                          }}
                                        >
                                          <FaPlus
                                            onClick={() => addToCart(e)}
                                            className='mt-1'
                                            style={{ color: 'white' }}
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div
                                className='col-md-8 order-md-2 col-sm-8 order-sm-2 col-6 order-2 foodBoxStyle '
                                style={{ textAlign: '-webkit-right' }}
                              >
                                <p
                                  style={{
                                    fontSize: '9px',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  {e.detail}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            className='col-md-3 col-sm-3 col-4'
                            style={{
                              justifyContent: 'right',
                              paddingRight: '0px',
                            }}
                          >
                            <img
                              src={e.image}
                              alt={e.id}
                              style={{
                                width: '100%',
                                height: '130px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                              }}
                            />
                          </div>

                          {/* Add */}
                          <div>
                            {cart &&
                              Object.keys(cart).map((i) => {
                                return (
                                  <div>
                                    {e.id == cart[i]['mainId'] ? (
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
                                                    cart[i]['pro'],
                                                    cart[i]['props'],
                                                    i,
                                                    cart[i]['priceArr']
                                                  )
                                                }
                                                className='mt-1'
                                                style={{ color: 'white' }}
                                              />
                                            </div>
                                            <p className='mx-2'>
                                              {' '}
                                              {cart[i]['amount']}
                                            </p>
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
                                                    cart[i]['pro'],
                                                    cart[i]['props'],
                                                    i,
                                                    cart[i]['priceArr']
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
                                                cart[i]['priceArr'] &&
                                                  myFunc(
                                                    cart[i]['priceArr'].reduce(
                                                      myFunc
                                                    ) * cart[i]['amount'],
                                                    cart[i]['pro']['price'] *
                                                      cart[i]['amount']
                                                  )
                                              )}
                                            </p>
                                            <BiPurchaseTag
                                              className='mt-1'
                                              size={15}
                                            />
                                          </div>
                                          <div>
                                            <p
                                              style={{
                                                fontSize: '12px',
                                                fontWeight: 'bold',

                                                textAlign: 'right',
                                              }}
                                            >
                                              {cart[i]['pro']['product_name']}
                                            </p>
                                            <p>
                                              {Object.keys(
                                                cart[i]['props']
                                              ).map((j) => {
                                                return (
                                                  <span>
                                                    {cart[i]['props'][j] != null
                                                      ? '  ' +
                                                        '-' +
                                                        '  ' +
                                                        cart[i]['props'][j][
                                                          'name'
                                                        ]
                                                      : ''}
                                                  </span>
                                                )
                                              })}
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                      </>
                                    ) : null}
                                  </div>
                                )
                              })}
                          </div>
                          {/* Add */}
                        </div>
                      </Fade>
                    </>
                  )
                })
              ) : (
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    border: '1px solid lightgrey',
                    borderRadius: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <p>هیچ محصولی یافت نشد</p>
                </div>
              )}
            </>
          )}

          <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container>
              <Sheet.Header />
              <Sheet.Content style={{ padding: '0px 20px' }}>
                <div>
                  <p
                    style={{
                      textAlign: 'right',
                      fontWeight: 'bolder',
                      fontSize: '15px',
                    }}
                  >
                    انتخاب افزودنی
                  </p>
                  <p
                    style={{
                      textAlign: 'right',
                      fontWeight: 'small',
                      fontSize: '10px',
                    }}
                  >
                    {foodProperty
                      ? foodProperty['options'][0].productName
                      : null}
                  </p>
                  <div
                    className='p-3'
                    style={{ border: '1px solid #d7d7d7', borderRadius: '5px' }}
                  >
                    <p style={{ textAlign: 'right' }}>اضافات</p>
                    {foodProperty &&
                      foodProperty.options.map((e) => {
                        return (
                          <>
                            <div
                              key={e.id}
                              className='my-2  d-flex'
                              style={{ justifyContent: 'space-between' }}
                            >
                              <div className='d-flex'>
                                <p
                                  className='my-auto'
                                  style={{
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  تومان
                                </p>

                                <p
                                  className='my-auto'
                                  style={{
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  {e.price}
                                </p>
                              </div>
                              <div className='form-group col-md-4'>
                                <label className='mr-2'>{e.name}</label>
                                <Checkbox
                                  onChange={() =>
                                    addProperty({
                                      id: e.id,
                                      name: e.name,
                                      productId: foodProperty.productData['id'],
                                      price: e.price,
                                    })
                                  }
                                  value={e.id}
                                  name={e.name}
                                  color='success'
                                />
                              </div>
                            </div>
                            <hr />
                          </>
                        )
                      })}
                  </div>

                  <hr />
                  <button
                    onClick={() => {
                      setID(foodProperty.productData, addons)
                      setOpen(false)
                    }}
                    style={{
                      color: 'white',
                      backgroundColor: '#20C900',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      border: 'none',
                      width: '-webkit-fill-available',
                    }}
                    className='m-2'
                  >
                    افزودن
                  </button>
                </div>
              </Sheet.Content>
            </Sheet.Container>

            <Sheet.Backdrop />
          </Sheet>

          {localStorage.getItem('cart') &&
          Object.keys(JSON.parse(localStorage.getItem('cart'))).length !== 0 ? (
            <Fade in={true} timeout={1000} style={{ transformOrigin: '0 0 0' }}>
              <div
                className='d-flex'
                style={{
                  justifyContent: 'space-around',
                }}
              >
                <div>
                  <LinkContainer
                    to={`/cart/${resUrl}/${orderType}`}
                    style={{
                      color: 'white',
                      backgroundColor: '#20C900',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      border: 'none',
                      // marginBottom: '80px',
                      // marginTop: '20px',
                    }}
                  >
                    <button className='mx-2'>تکمیل خرید</button>
                  </LinkContainer>
                </div>
              </div>
            </Fade>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default OrderOnline
