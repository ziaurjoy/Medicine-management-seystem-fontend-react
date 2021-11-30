import {
  cibAnalogue, cilPuzzle,
  cilSpeedometer,
  cilStar
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Companys',
    to: '/list',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Companys List',
        to: '/companys/list',
      },
      {
        component: CNavItem,
        name: 'Create New Company',
        to: '/companys/company-create',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Medicine',
    to: '/medicines',
    icon: <CIcon icon={cibAnalogue} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'medicines List',
        to: '/medicines/list',
      },
      {
        component: CNavItem,
        name: 'Create New medicines',
        to: '/medicines/medicines-create',
      },
    ],
  },


  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
