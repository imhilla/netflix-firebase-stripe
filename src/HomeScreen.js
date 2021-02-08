import React from 'react'
import Nav from '../src/Nav'
import Banner from '../src/Banner'
import "../src/HomeScreen.css"

function HomeScreen() {
  return (
    <div className="homeScreem">
      <Nav />
      <Banner />
    </div>
  )
}

export default HomeScreen
