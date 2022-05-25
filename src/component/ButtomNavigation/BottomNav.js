import { React, useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt, FaList, FaShoppingBasket } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'
import { useProjectContext } from '../../context/ProjectProvider'
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation'
const BottomNav = () => {
  const [value, setValue] = useState(2)
  const { pathname } = useLocation()
  const resUrl = pathname.split('/')[2]
  const { state, setState, toggleDrawer } = useProjectContext()

  return (
    <BottomNavigation
      style={{
        boxShadow: '0px 0px 30px -10px rgb(0 0 0 / 50%)',
        borderRadius: '25px 25px 0px 0px',
        position: 'fixed',
        bottom: '0px',
        width: '-webkit-fill-available',
        zIndex: '999',
      }}
      className='py-2'
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction icon={<FaList size={value === 0 ? 27 : 22} />} />
      <LinkContainer to={`/cart/${resUrl}/1`}>
        <BottomNavigationAction
          icon={<FaShoppingBasket size={value === 1 ? 27 : 22} />}
        />
      </LinkContainer>

      <LinkContainer to={`/info/${resUrl}`}>
        <BottomNavigationAction
          icon={<AiFillHome size={value === 2 ? 27 : 22} />}
        />
      </LinkContainer>

      <BottomNavigationAction
        icon={
          <FaUserAlt
            onClick={toggleDrawer('right', true)}
            size={value === 3 ? 27 : 22}
          />
        }
      />
      <DrawerNavigation />
    </BottomNavigation>
  )
}

export default BottomNav
