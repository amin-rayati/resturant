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

  const [catId, setCatId] = useState('')
  const [catName, setCatName] = useState('')

  return (
    <ProjectContext.Provider
      value={{
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
