import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './MainPageLayout.scss'
function MainPageLayout() {
  return (
    <div className="mainpage-layout">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainPageLayout