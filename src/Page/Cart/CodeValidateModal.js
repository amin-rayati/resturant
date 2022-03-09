import { useState, useCallback, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useProjectContext } from '../../context/ProjectProvider'
import axios from 'axios'
import Swal from 'sweetalert2'
const numOfFields = 3

const useSSNFields = () => {
  let arr = []

  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target
      const [fieldName, fieldIndex] = name.split('-')

      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) <= 4) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
          )

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus()
          }
        }
      }

      arr.push(value)

      console.log(arr)
    },
  }
}
const CodeValidateModal = () => {
  const { handleChange } = useSSNFields()
  const { codeValidate, codeValidateClose } = useProjectContext()

  return (
    <>
      <Modal show={codeValidate} onHide={codeValidateClose} centered>
        <Modal.Header style={{ justifyContent: 'center', border: 'none' }}>
          <Modal.Title
            style={{ fontWeight: 'bolder', textAlign: 'center', width: '100%' }}
          >
            <div
              style={{
                borderRadius: '14px',
                color: 'balck',
                padding: '15px',
              }}
            >
              کد تایید را وارد کنید
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ direction: 'rtl', textAlign: 'right' }}>
          <div className='d-flex' style={{ justifyContent: 'center' }}>
            <input
              type='text'
              name='ssn-4'
              className='mx-2'
              maxLength={1}
              onChange={handleChange}
              style={{
                width: '10%',
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                outline: 'none',
                textAlign: 'center',
              }}
            />
            <input
              type='text'
              className='mx-2'
              name='ssn-3'
              maxLength={1}
              onChange={handleChange}
              style={{
                width: '10%',
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                outline: 'none',
                textAlign: 'center',
              }}
            />
            <input
              type='text'
              name='ssn-2'
              className='mx-2'
              maxLength={1}
              onChange={handleChange}
              style={{
                width: '10%',
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                outline: 'none',
                textAlign: 'center',
              }}
            />
            <input
              type='text'
              className='mx-2'
              name='ssn-1'
              maxLength={1}
              onChange={handleChange}
              style={{
                width: '10%',
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                outline: 'none',
                textAlign: 'center',
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer
          className='justify-content-center'
          style={{ border: 'none' }}
        >
          <button
            style={{
              color: 'white',
              backgroundColor: '#20C900',
              padding: '10px 20px',
              borderRadius: '10px',
              border: 'none',
            }}
          >
            تایید
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CodeValidateModal
