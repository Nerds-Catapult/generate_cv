import React from 'react'
import Slider from '../../components/slider/slider'
import './home.scss'
import Featured from '../../components/featuredProducts/featured'

function Home() {
  return (
    <div className='home'>
      <Slider />
      <Featured type="featured" />
      <Featured type="trending"/>
    </div>
  )
}

export default Home
