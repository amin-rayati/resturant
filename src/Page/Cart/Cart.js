import { React, useRef, useEffect, useState } from 'react'
import { useProjectContext } from '../../context/ProjectProvider'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaPlus, FaMinus } from 'react-icons/fa'
import CodeValidateModal from './CodeValidateModal'
const Cart = () => {
  const { codeValidate, codeValidateShow } = useProjectContext()
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
          <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>سبد خرید</p>
          <div
            className='d-flex mt-5'
            style={{ justifyContent: 'space-between' }}
          >
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
            <div className='d-flex foodBoxStyle'>
              <p style={{ fontSize: '12px', fontWeight: 'bold' }}>تومان</p>
              <p
                className='mx-2'
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                3000000
              </p>
              <BiPurchaseTag className='mt-1' size={15} />
            </div>
            <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
              پیتزا آمریکانو مخلوط
            </p>
          </div>
          <hr />
          <div
            className='d-flex mt-5'
            style={{ justifyContent: 'space-between' }}
          >
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
            <div className='d-flex foodBoxStyle'>
              <p style={{ fontSize: '12px', fontWeight: 'bold' }}>تومان</p>
              <p
                className='mx-2'
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                3000000
              </p>
              <BiPurchaseTag className='mt-1' size={15} />
            </div>
            <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
              پیتزا آمریکانو مخلوط
            </p>
          </div>
          <hr />
          <div
            className='d-flex mt-5'
            style={{ justifyContent: 'space-between' }}
          >
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
            <div className='d-flex foodBoxStyle'>
              <p style={{ fontSize: '12px', fontWeight: 'bold' }}>تومان</p>
              <p
                className='mx-2'
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                3000000
              </p>
              <BiPurchaseTag className='mt-1' size={15} />
            </div>
            <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
              پیتزا آمریکانو مخلوط
            </p>
          </div>
          <hr />
          <div
            className='d-flex mt-5'
            style={{ justifyContent: 'space-between' }}
          >
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
            <div className='d-flex foodBoxStyle'>
              <p style={{ fontSize: '12px', fontWeight: 'bold' }}>تومان</p>
              <p
                className='mx-2'
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                3000000
              </p>
              <BiPurchaseTag className='mt-1' size={15} />
            </div>
            <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
              پیتزا آمریکانو مخلوط
            </p>
          </div>
          <hr />

          <div
            className='d-flex my-5'
            style={{ justifyContent: 'space-around' }}
          >
            <div className='d-flex foodBoxStyle'>
              <p style={{ fontSize: '12px', fontWeight: 'bold' }}>تومان</p>
              <p
                className='mx-2'
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                3000000
              </p>
              <BiPurchaseTag className='mt-1' size={15} />
            </div>
            <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
              مبلغ کل صورت حساب
            </p>
          </div>

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

          <div className='d-flex' style={{ justifyContent: 'space-around' }}>
            <button
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
            <button
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
    </>
  )
}

export default Cart
