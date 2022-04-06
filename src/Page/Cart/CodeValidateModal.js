import { useState, useCallback, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useProjectContext } from '../../context/ProjectProvider'
import { RequestUtils } from '../../Utils/RequestUtils'
const CodeValidateModal = () => {
  const { codeValidate, codeValidateClose, tableId, setTableId } =
    useProjectContext()

  const [ssnValues, setValue] = useState({
    ssn1: '',
    ssn2: '',
    ssn3: '',
    ssn4: '',
    ssn5: '',
    ssn6: '',
  })
  const handleChange = (e) => {
    const { maxLength, value, name } = e.target
    const [fieldName, fieldIndex] = name.split('-')

    if (value.length >= maxLength) {
      if (parseInt(fieldIndex, 10) < 6) {
        const nextSibling = document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
        )
        if (nextSibling !== null) {
          nextSibling.focus()
        }
      }
    }
    setValue({
      ...ssnValues,
      [`ssn${fieldIndex}`]: value,
    })
  }

  const sendCode = async () => {
    let code =
      ssnValues['ssn1'] +
      ssnValues['ssn2'] +
      ssnValues['ssn3'] +
      ssnValues['ssn4'] +
      ssnValues['ssn5'] +
      ssnValues['ssn6']

    const res = await RequestUtils.sendCode(code)
    setTableId(res.data['table_id'])
  }

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
              name='ssn-6'
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
              name='ssn-5'
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
            onClick={sendCode}
            style={
              ssnValues['ssn4']
                ? {
                    color: 'white',
                    backgroundColor: '#20C900',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: 'none',
                  }
                : {
                    color: 'white',
                    backgroundColor: '#20C900',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'not-allowed',
                  }
            }
            disabled={ssnValues['ssn4'] ? false : true}
          >
            تایید
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CodeValidateModal
