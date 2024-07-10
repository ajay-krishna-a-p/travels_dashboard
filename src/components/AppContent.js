/* eslint-disable prettier/prettier */
import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import PrivateRoute from './UserContext/PrivateRoute'

const AppContent = () => {
  return (
    <CContainer fluid style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      <Suspense fallback={<CSpinner color="primary" />} style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <PrivateRoute
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  permissions={route.name}
                  element={<route.element />}
                />
              )
            )
          })}

          <Routes>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
        </>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
