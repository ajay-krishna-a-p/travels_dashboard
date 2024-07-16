import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://www.kenmerksoftwares.com" target="_blank" rel="noopener noreferrer">
          TRAVELS
        </a>
        <span className="ms-1">&copy; {currentYear}</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.kenmerksoftwares.com" target="_blank" rel="noopener noreferrer">
          Kenmerk Softwares Admin &amp; Dashboard 
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
