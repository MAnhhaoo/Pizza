import React from 'react'
import Header from '../../pages/HeaderPage/Header'

function Default({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Default