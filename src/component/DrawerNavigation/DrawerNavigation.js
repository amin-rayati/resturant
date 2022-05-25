import * as React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useProjectContext } from '../../context/ProjectProvider'
import { Cookies, useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
import { BsList } from 'react-icons/bs'

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Navbar, NavDropdown } from 'react-bootstrap'
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillPlusCircle,
  AiOutlineLogin,
} from 'react-icons/ai'
import { FaBuilding } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { MdDashboard } from 'react-icons/md'
const DrawerNavigation = () => {
  const {
    loginModal,
    loginModalShow,
    userData,
    setUserData,
    state,
    setState,
    toggleDrawer,
  } = useProjectContext()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const logOut = () => {
    Swal.fire({
      text: 'آیا میخواهید از سایت خارج شوید؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'red',
      cancelButtonText: 'خیر',
      confirmButtonText: 'بله',
    }).then((result) => {
      if (result.isConfirmed) {
        removeCookie('user')
        setUserData(null)
      }
    })
  }

  const [item1, setItem1] = useState([
    { path: '', text: 'پروفایل' },
    { path: '/search', text: 'سفارشات' },
    { path: '/', text: 'ورود و ثبت نام' },
  ])

  const [item, setItem] = useState([
    { path: '', text: 'پروفایل' },
    { path: '/search', text: 'سفارشات' },
    { path: '/', text: 'خروج' },
  ])

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {userData
          ? item.map((e, index) => (
              <>
                <NavLink
                  to={e.path}
                  style={{ color: 'black', textDecoration: 'underline' }}
                >
                  <ListItem
                    onClick={e.text === 'خروج' ? logOut : null}
                    button
                    key={e.text}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <AiFillHome style={{ color: 'black' }} size={20} />
                      ) : null}
                      {index === 1 ? (
                        <FaBuilding style={{ color: 'black' }} size={20} />
                      ) : null}
                      {index === 2 ? (
                        <AiFillInfoCircle
                          style={{ color: 'black' }}
                          size={20}
                        />
                      ) : null}

                      {index === 3 ? (
                        <MdDashboard style={{ color: 'black' }} size={20} />
                      ) : null}

                      {index === 4 ? (
                        <AiFillPlusCircle
                          style={{ color: 'black' }}
                          size={20}
                        />
                      ) : null}

                      {userData ? (
                        index === 5 ? (
                          <MdDashboard style={{ color: 'black' }} size={20} />
                        ) : null
                      ) : null}
                      {userData ? (
                        index === 6 ? (
                          <BiLogOut
                            onClick={e.text === 'خروج' ? () => logOut() : null}
                            style={{ color: 'black' }}
                            size={20}
                          />
                        ) : null
                      ) : null}
                    </ListItemIcon>
                    <p
                      style={{
                        fontSize: '15px',
                        marginTop: '12px',
                        fontWeight: 'bolder',
                        color: 'black',
                      }}
                    >
                      {e.text}
                    </p>
                  </ListItem>
                </NavLink>
                <Divider />
              </>
            ))
          : item1.map((e, index) => (
              <>
                <NavLink
                  to={e.path}
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  <ListItem
                    onClick={
                      e.text === 'ورود و ثبت نام' ? loginModalShow : null
                    }
                    button
                    key={e.text}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <AiFillHome style={{ color: 'black' }} size={20} />
                      ) : null}
                      {index === 1 ? (
                        <FaBuilding style={{ color: 'black' }} size={20} />
                      ) : null}
                      {index === 2 ? (
                        <AiFillInfoCircle
                          style={{ color: 'black' }}
                          size={20}
                        />
                      ) : null}
                      {index === 3 ? (
                        <MdDashboard style={{ color: 'black' }} size={20} />
                      ) : null}

                      {index === 4 ? (
                        <AiFillPlusCircle
                          style={{ color: 'black' }}
                          size={20}
                        />
                      ) : null}

                      {!userData ? (
                        index === 5 ? (
                          <AiOutlineLogin
                            style={{ color: 'black' }}
                            size={20}
                          />
                        ) : null
                      ) : null}
                    </ListItemIcon>
                    <p
                      style={{
                        fontSize: '15px',
                        marginTop: '12px',
                        fontWeight: 'bolder',
                        color: 'black',
                      }}
                    >
                      {e.text}
                    </p>
                  </ListItem>
                </NavLink>
                <Divider />
              </>
            ))}
      </List>
    </Box>
  )
  return (
    <>
      <React.Fragment key={'right'}>
        <SwipeableDrawer
          style={{ direction: 'rtl' }}
          anchor='right'
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
      </React.Fragment>
    </>
  )
}

export default DrawerNavigation
