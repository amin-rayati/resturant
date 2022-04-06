import React, { useContext, useState, useEffect } from 'react'

const ProjectContext = React.createContext()

export const ProjectProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  const [loginModal, setLoginModal] = useState(false)
  const loginModalClose = () => setLoginModal(false)
  const loginModalShow = () => setLoginModal(true)

  const [registerModal, setRegisterModal] = useState(false)
  const RegisterClose = () => setRegisterModal(false)
  const RegisterShow = () => setRegisterModal(true)

  const [codeValidate, setCodeValidate] = useState(false)
  const codeValidateClose = () => setCodeValidate(false)
  const codeValidateShow = () => setCodeValidate(true)

  const [addPropertyModal, setAddPropertyModal] = useState(false)
  const addPropertyModalClose = () => setAddPropertyModal(false)
  const addPropertyModalShow = () => setAddPropertyModal(true)

  const [tableId, setTableId] = useState('')

  const [catId, setCatId] = useState('')
  const [catName, setCatName] = useState('')

  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
  )
  const [totalCount, setTotalCount] = useState('')
  const count = []
  const [updateUi, setUpdateUi] = useState(true)

  const addToCart = (item) => {
    setUpdateUi(false)
    let tmpCart = cart
    if (!tmpCart.hasOwnProperty(item.id.toString())) {
      tmpCart[item.id.toString()] = 0
    }

    tmpCart[item.id.toString()] = {
      amount: +[[tmpCart[item.id]][0].amount] + 1,
      pro: item,
    }

    setCart(tmpCart)
    updateCart(item)
  }

  const removeFromCart = (item) => {
    setUpdateUi(false)
    let tmpCart = cart
    if (!tmpCart.hasOwnProperty(item.id.toString())) {
      tmpCart[item.id.toString()] = 0
    }

    tmpCart[item.id.toString()] = {
      amount: +[[tmpCart[item.id]][0].amount] - 1,
      pro: item,
    }

    if ([[tmpCart[item.id]][0].amount] == '0') {
      delete tmpCart[item.id.toString()]
    }

    setCart(tmpCart)
    updateCart(item)
  }

  const updateCart = (item) => {
    localStorage.setItem('cart', JSON.stringify(cart))
    setTimeout(() => setUpdateUi(true), 0)
    Object.keys(cart).map((index) => {
      count.push(cart[index]['amount'])
      setTotalCount(count.reduce((partial_sum, a) => partial_sum + a, 0))
    })
  }

  return (
    <ProjectContext.Provider
      value={{
        tableId,
        setTableId,

        cart,
        addToCart,
        removeFromCart,
        totalCount,
        updateUi,

        codeValidate,
        codeValidateClose,
        codeValidateShow,

        userData,
        setUserData,

        loginModal,
        loginModalClose,
        loginModalShow,

        registerModal,
        RegisterClose,
        RegisterShow,

        addPropertyModal,
        addPropertyModalClose,
        addPropertyModalShow,
        catId,
        setCatId,
        catName,
        setCatName,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
export const useProjectContext = () => {
  return useContext(ProjectContext)
}
