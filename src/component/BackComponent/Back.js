import { React, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'

const Back = () => {
  let history = useHistory()

  return (
    <>
      <div style={{ position: 'sticky', top: '0px', textAlign: 'left' }}>
        <BsArrowLeftShort onClick={history.goBack} size={35} />
      </div>
    </>
  )
}

export default Back
