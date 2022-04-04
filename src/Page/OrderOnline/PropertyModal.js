import { useState, useCallback, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useProjectContext } from '../../context/ProjectProvider'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaPlus, FaMinus } from 'react-icons/fa'

const PropertyModal = () => {
  const { addPropertyModal, addPropertyModalShow, addPropertyModalClose } =
    useProjectContext()

  const submit = () => {
    const formData = new FormData(document.getElementById('form'))
  }
  return (
    <>
      <Modal show={addPropertyModal} onHide={addPropertyModalClose} centered>
        <Modal.Header style={{ justifyContent: 'center', border: 'none' }}>
          <Modal.Title
            style={{ fontWeight: 'bolder', textAlign: 'center', width: '100%' }}
          >
            <div
              style={{
                borderRadius: '14px',
                color: 'balck',
                padding: '5px',
              }}
            >
              انتخاب افزودنی
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ direction: 'rtl', textAlign: 'right' }}>
          <div
            className='my-1 mx-4 '
            style={{
              border: '1px solid #bdb5b5',
              borderRadius: '10px',
              padding: '20px 10px',
            }}
          >
            <p style={{ fontWeight: 'bolder' }}>اضافات</p>

            <div
              className='d-flex my-3'
              style={{
                justifyContent: 'space-between',
                borderBottom: '1px solid #bdb5b5',
              }}
            >
              <form id='form'>
                <input type='checkbox' style={{ marginTop: '3px' }} />
              </form>

              <p style={{ fontSize: '10px', fontWeight: 'bold' }}>نان لقمه</p>
              <div className='d-flex foodBoxStyle mt-1'>
                <p style={{ fontSize: '10px', fontWeight: 'bold' }}>تومان</p>
                <p
                  className='mx-2'
                  style={{ fontSize: '10px', fontWeight: 'bold' }}
                >
                  3000
                </p>
                <BiPurchaseTag className='mt-0' size={15} />
              </div>
            </div>

            <div
              className='d-flex my-5'
              style={{
                justifyContent: 'space-around',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '10px',
              }}
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
          </div>
        </Modal.Body>
        <Modal.Footer
          className='justify-content-center'
          style={{ border: 'none' }}
        >
          <button
            onClick={submit}
            style={{
              color: 'white',
              backgroundColor: '#20C900',
              padding: '10px 20px',
              borderRadius: '10px',
              border: 'none',
            }}
          >
            افزودن
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PropertyModal
