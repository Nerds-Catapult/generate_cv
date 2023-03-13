import React from 'react'
import Slider from '../../components/slider/slider'
import './home.scss'
import Featured from '../../components/featuredProducts/featured'
import { Categories } from '../../components/categories/categories'
import Contact from '../../components/contact/contact'

function Home() {
  return (
    <div className='home'>
      <Slider />
      <Featured type="featured" />
      <Categories/>
      <Featured type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home
