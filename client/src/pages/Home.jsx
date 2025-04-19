import React from 'react'
import Hero from '../components/landing_pages/Hero'
import Awards from '../components/landing_pages/Awards'
import Stats from '../components/landing_pages/Stats'
import Pricing from '../components/landing_pages/Pricing'
import Education from '../components/landing_pages/Education'
import OpenAccount from '../components/landing_pages/OpenAccount'

export const Home = () => {
  return (
    <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
  )
}
