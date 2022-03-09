import React, { useContext, useState, useEffect } from 'react'

const ProjectContext = React.createContext()

export const ProjectProvider = ({ children }) => {
  const [codeValidate, setCodeValidate] = useState(false)
  const codeValidateClose = () => setCodeValidate(false)
  const codeValidateShow = () => setCodeValidate(true)

  return (
    <ProjectContext.Provider
      value={{
        codeValidate,
        codeValidateClose,
        codeValidateShow,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
export const useProjectContext = () => {
  return useContext(ProjectContext)
}
