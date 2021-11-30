import { CFooter } from '@coreui/react'
import React from 'react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Pharmacy Management System</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.linkedin.com/in/ziaur-rahman-joy-89996621a/" rel="noopener noreferrer">
          Ziaur Rahman Joy
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
