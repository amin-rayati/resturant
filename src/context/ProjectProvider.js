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
  const [tableCode, setTableCode] = useState('')
  const [reservedTableInfo, setReservedTableInfo] = useState('')

  const [catId, setCatId] = useState('')
  const [catName, setCatName] = useState('')

  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
  )
  const [totalCount, setTotalCount] = useState('')
  const count = []
  const [updateUi, setUpdateUi] = useState(true)

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const addToCart = (item, addons, ID, priceArr) => {
    setUpdateUi(false)
    let tmpCart = cart

    if (addons) {
      let ProId = ID.replace('undefined', '')
      ProId = ProId.replace('+', '')
      if (!tmpCart.hasOwnProperty(ProId + '+')) {
        tmpCart[ProId + '+'] = 0
      }
      tmpCart[ProId + '+'] = {
        amount: +[[tmpCart[ProId + '+']][0].amount] + 1,
        pro: item,
        props: addons,
        mainId: item.id,
        priceArr: priceArr,
      }
      setCart(tmpCart)
      updateCart(item)
    } else {
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
  }

  const removeFromCart = (item, addons, ID, priceArr) => {
    setUpdateUi(false)
    let tmpCart = cart

    if (addons) {
      let ProId = ID.replace('undefined', '')
      ProId = ProId.replace('+', '')
      if (!tmpCart.hasOwnProperty(ProId + '+')) {
        tmpCart[ProId + '+'] = 0
      }
      tmpCart[ProId + '+'] = {
        amount: +[[tmpCart[ProId + '+']][0].amount] - 1,
        pro: item,
        props: addons,
        mainId: item.id,
        priceArr: priceArr,
      }
      setCart(tmpCart)
      updateCart(item)
    } else {
      if (!tmpCart.hasOwnProperty(item.id.toString())) {
        tmpCart[item.id.toString()] = 0
      }
      tmpCart[item.id.toString()] = {
        amount: +[[tmpCart[item.id]][0].amount] - 1,
        pro: item,
      }
      setCart(tmpCart)
      updateCart(item)
    }

    if (addons) {
      let ProId = ID.replace('undefined', '')
      ProId = ProId.replace('+', '')
      if ([[tmpCart[ProId + '+']][0].amount] == '0') {
        delete tmpCart[ProId + '+']
      }
    } else {
      if ([[tmpCart[item.id]][0].amount] == '0') {
        delete tmpCart[item.id.toString()]
      }
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
        state,
        setState,
        toggleDrawer,

        tableId,
        setTableId,
        tableCode,
        setTableCode,
        reservedTableInfo,
        setReservedTableInfo,

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
