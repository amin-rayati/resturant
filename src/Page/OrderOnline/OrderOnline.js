import { React, useRef, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import CatSlider from '../../component/Slider/CatSlider'
import food1 from '../../assets/img/food1.jpg'
import food2 from '../../assets/img/sib.jpg'
import pitza from '../../assets/img/pitza.jpg'
import san from '../../assets/img/san.jpg'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaPlus, FaMinus } from 'react-icons/fa'
const OrderOnline = () => {
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
          <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>
            ثبت سفارش بیرون بر
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
              }}
            >
              <BsSearch style={{ color: '#B5B5B5' }} />
            </div>
          </div>
          <div style={{ position: 'relative', bottom: '20px' }}>
            <CatSlider />
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
              فست فود
            </p>
          </div>

          <div className='row mx-1 my-3'>
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
                style={{ justifyContent: 'space-between', marginTop: '10px' }}
              >
                <div className='col-md-6 order-md-1 col-sm-6 order-sm-1 col-6 order-1 text-right '>
                  <div className='d-flex foodBoxStyle'>
                    <p style={{ fontSize: '9px', fontWeight: 'bold' }}>تومان</p>
                    <p
                      className='mx-2'
                      style={{ fontSize: '9px', fontWeight: 'bold' }}
                    >
                      3000000
                    </p>
                    <BiPurchaseTag className='mt-1' size={15} />
                  </div>
                </div>

                <div
                  className='col-md-6 order-md-2 col-sm-6 order-sm-2 col-6 order-2 foodBoxStyle'
                  style={{ textAlign: '-webkit-right' }}
                >
                  <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                    پیتزا آمریکانو مخلوط
                  </p>
                </div>
              </div>

              <div
                className='row'
                style={{ justifyContent: 'space-between', marginTop: '10px' }}
              >
                <div className='col-md-4 order-md-1 col-sm-4 order-sm-1 col-6 order-1 text-right foodBoxStyle'>
                  <div className='d-flex foodBoxStyle'>
                    <div
                      style={{
                        backgroundColor: '#20C900',
                        borderRadius: '4px',
                        height: 'max-content',
                        padding: '2px 5px',
                      }}
                    >
                      <FaPlus className='mt-1' style={{ color: 'white' }} />
                    </div>
                    <p className='mx-2'>2</p>
                    <div
                      style={{
                        backgroundColor: '#D90000',
                        borderRadius: '4px',
                        height: 'max-content',
                        padding: '2px 5px',
                      }}
                    >
                      <FaMinus className='mt-1' style={{ color: 'white' }} />
                    </div>
                  </div>
                </div>
                <div
                  className='col-md-8 order-md-2 col-sm-8 order-sm-2 col-6 order-2 foodBoxStyle '
                  style={{ textAlign: '-webkit-right' }}
                >
                  <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                    ترکیبات: گوشت، قارچ، مرغ، پنیز مازارلا
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-md-3 col-sm-3 col-4'
              style={{ justifyContent: 'right', paddingRight: '0px' }}
            >
              <img
                src={food1}
                alt='food1'
                style={{
                  width: '100%',
                  height: '130px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <div className='row mx-1 my-3'>
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
                style={{ justifyContent: 'space-between', marginTop: '10px' }}
              >
                <div className='col-md-6 order-md-1 col-sm-6 order-sm-1 col-6 order-1 text-right '>
                  <div className='d-flex foodBoxStyle'>
                    <p style={{ fontSize: '9px', fontWeight: 'bold' }}>تومان</p>
                    <p
                      className='mx-2'
                      style={{ fontSize: '9px', fontWeight: 'bold' }}
                    >
                      3000000
                    </p>
                    <BiPurchaseTag className='mt-1' size={15} />
                  </div>
                </div>

                <div
                  className='col-md-6 order-md-2 col-sm-6 order-sm-2 col-6 order-2 foodBoxStyle'
                  style={{ textAlign: '-webkit-right' }}
                >
                  <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                    پیتزا آمریکانو مخلوط
                  </p>
                </div>
              </div>

              <div
                className='row'
                style={{ justifyContent: 'space-between', marginTop: '10px' }}
              >
                <div className='col-md-4 order-md-1 col-sm-4 order-sm-1 col-6 order-1 text-right foodBoxStyle'>
                  <div className='d-flex foodBoxStyle'>
                    <div
                      style={{
                        backgroundColor: '#20C900',
                        borderRadius: '4px',
                        height: 'max-content',
                        padding: '2px 5px',
                      }}
                    >
                      <FaPlus className='mt-1' style={{ color: 'white' }} />
                    </div>
                    <p className='mx-2'>2</p>
                    <div
                      style={{
                        backgroundColor: '#D90000',
                        borderRadius: '4px',
                        height: 'max-content',
                        padding: '2px 5px',
                      }}
                    >
                      <FaMinus className='mt-1' style={{ color: 'white' }} />
                    </div>
                  </div>
                </div>
                <div
                  className='col-md-8 order-md-2 col-sm-8 order-sm-2 col-6 order-2 foodBoxStyle '
                  style={{ textAlign: '-webkit-right' }}
                >
                  <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                    ترکیبات: گوشت، قارچ، مرغ، پنیز مازارلا
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-md-3 col-sm-3 col-4'
              style={{ justifyContent: 'right', paddingRight: '0px' }}
            >
              <img
                src={food2}
                alt='food2'
                style={{
                  width: '100%',
                  height: '130px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <div className='row mx-1 my-3'>
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
                style={{ justifyContent: 'space-between', marginTop: '10px' }}
              >
                <div className='col-md-6 order-md-1 col-sm-6 order-sm-1 col-6 order-1 text-right '>
                  <div className='d-flex foodBoxStyle'>
                    <p style={{ fontSize: '9px', fontWeight: 'bold' }}>تومان</p>
                    <p
                      className='mx-2'
                      style={{ fontSize: '9px', fontWeight: 'bold' }}
                    >
                      3000000
                    </p>
                    <BiPurchaseTag className='mt-1' size={15} />
                  </div>
                </div>

                <div
                  className='col-md-6 order-md-2 col-sm-6 order-sm-2 col-6 order-2 foodBoxStyle'
                  style={{ textAlign: '-webkit-right' }}
                >
                  <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                    پیتزا آمریکانو مخلوط
                  </p>
                </div>
              </div>

              <div
                className='row'
                style={{ justifyContent: 'space-between', marginTop: '10px' }}
              >
                <div className='col-md-4 order-md-1 col-sm-4 order-sm-1 col-6 order-1 text-right foodBoxStyle'>
                  <div className='d-flex foodBoxStyle'>
                    <div
                      style={{
                        backgroundColor: '#20C900',
                        borderRadius: '4px',
                        height: 'max-content',
                        padding: '2px 5px',
                      }}
                    >
                      <FaPlus className='mt-1' style={{ color: 'white' }} />
                    </div>
                    <p className='mx-2'>2</p>
                    <div
                      style={{
                        backgroundColor: '#D90000',
                        borderRadius: '4px',
                        height: 'max-content',
                        padding: '2px 5px',
                      }}
                    >
                      <FaMinus className='mt-1' style={{ color: 'white' }} />
                    </div>
                  </div>
                </div>
                <div
                  className='col-md-8 order-md-2 col-sm-8 order-sm-2 col-6 order-2 foodBoxStyle '
                  style={{ textAlign: '-webkit-right' }}
                >
                  <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                    ترکیبات: گوشت، قارچ، مرغ، پنیز مازارلا
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-md-3 col-sm-3 col-4'
              style={{ justifyContent: 'right', paddingRight: '0px' }}
            >
              <img
                src={pitza}
                alt='pitza'
                style={{
                  width: '100%',
                  height: '130px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <div className='row mx-1 my-3'>
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
                style={{ justifyContent: 'space-between', marginTop: '10px' }}
              >
                <div className='col-md-6 order-md-1 col-sm-6 order-sm-1 col-6 order-1 text-right '>
                  <div className='d-flex foodBoxStyle'>
                    <p style={{ fontSize: '9px', fontWeight: 'bold' }}>تومان</p>
                    <p
                      className='mx-2'
                      style={{ fontSize: '9px', fontWeight: 'bold' }}
                    >
                      3000000
                    </p>
                    <BiPurchaseTag className='mt-1' size={15} />
                  </div>
                </div>

                <div
                  className='col-md-6 order-md-2 col-sm-6 order-sm-2 col-6 order-2 foodBoxStyle'
                  style={{ textAlign: '-webkit-right' }}
                >
                  <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                    پیتزا آمریکانو مخلوط
                  </p>
                </div>
              </div>

              <div
                className='row'
                style={{ justifyContent: 'space-between', marginTop: '10px' }}
              >
                <div className='col-md-4 order-md-1 col-sm-4 order-sm-1 col-6 order-1 text-right foodBoxStyle'>
                  <div className='d-flex foodBoxStyle'>
                    <div
                      style={{
                        backgroundColor: '#20C900',
                        borderRadius: '4px',
                        height: 'max-content',
                        padding: '2px 5px',
                      }}
                    >
                      <FaPlus className='mt-1' style={{ color: 'white' }} />
                    </div>
                    <p className='mx-2'>2</p>
                    <div
                      style={{
                        backgroundColor: '#D90000',
                        borderRadius: '4px',
                        height: 'max-content',
                        padding: '2px 5px',
                      }}
                    >
                      <FaMinus className='mt-1' style={{ color: 'white' }} />
                    </div>
                  </div>
                </div>
                <div
                  className='col-md-8 order-md-2 col-sm-8 order-sm-2 col-6 order-2 foodBoxStyle '
                  style={{ textAlign: '-webkit-right' }}
                >
                  <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                    ترکیبات: گوشت، قارچ، مرغ، پنیز مازارلا
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-md-3 col-sm-3 col-4'
              style={{ justifyContent: 'right', paddingRight: '0px' }}
            >
              <img
                src={san}
                alt='san'
                style={{
                  width: '100%',
                  height: '130px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              style={{
                color: 'white',
                backgroundColor: '#20C900',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
              }}
            >
              مشاهده سبد خرید
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderOnline
