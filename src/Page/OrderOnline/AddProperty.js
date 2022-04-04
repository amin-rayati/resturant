import { React, useRef, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import CatSlider from '../../component/Slider/CatSlider'
import food1 from '../../assets/img/food1.jpg'
import food2 from '../../assets/img/sib.jpg'
import pitza from '../../assets/img/pitza.jpg'
import san from '../../assets/img/san.jpg'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useProjectContext } from '../../context/ProjectProvider'
import PropertyModal from './PropertyModal'
const OrderOnline = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    elementRef.current.style.height = `${window.innerHeight}px`
  })
  const { addPropertyModal, addPropertyModalShow } = useProjectContext()

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
          className='col-md-12 col-sm-12 col-12 m-auto'
          style={{ justifyContent: 'center' }}
        >
          <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>سفارشات</p>

          <div className='row mx-1 my-3'>
            <div
              className='col-md-12 col-sm-12 col-12 row'
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '15px 15px',

                margin: 'auto',
                boxShadow: '0px 0px 15px -5px rgb(0 0 0 / 50%)',
              }}
            >
              <div className='col-md-8 col-sm-8 col-8'>
                <div
                  className='row'
                  style={{ justifyContent: 'space-between', marginTop: '10px' }}
                >
                  <div className='col-md-6 order-md-1 col-sm-6 order-sm-1 col-6 order-1 text-right '>
                    <div className='d-flex foodBoxStyle'>
                      <p style={{ fontSize: '9px', fontWeight: 'bold' }}>
                        تومان
                      </p>
                      <p
                        className='mx-2'
                        style={{ fontSize: '9px', fontWeight: 'bold' }}
                      >
                        3000000
                      </p>
                      <BiPurchaseTag className='mt-0' size={15} />
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
                      <button
                        onClick={addPropertyModalShow}
                        style={{
                          border: '1px solid #20C900',
                          backgroundColor: '#fff',
                          borderRadius: '4px',
                          height: 'max-content',
                          padding: '2px 20px',
                          fontSize: '10px',
                        }}
                      >
                        افزودن
                      </button>
                    </div>
                    {addPropertyModal ? <PropertyModal /> : null}
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
                className='col-md-2 col-sm-2 col-4'
                style={{
                  justifyContent: 'right',
                  paddingRight: '0px',
                  position: 'absolute',
                  right: '15px',
                }}
              >
                <img
                  src={food1}
                  alt='food1'
                  style={{
                    width: '100%',
                    height: '100px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    position: 'relative',
                    bottom: '35px',
                    border: '2px solid #20C900',
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className='d-flex'
            style={{
              justifyContent: 'space-around',
            }}
          >
            <LinkContainer
              to='/cart'
              style={{
                position: 'fixed',
                bottom: '20px',
                color: 'white',
                backgroundColor: '#20C900',
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
              }}
            >
              <button className='mx-2'>مشاهده سبد خرید</button>
            </LinkContainer>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderOnline
