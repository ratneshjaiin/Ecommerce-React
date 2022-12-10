import React, { useEffect } from 'react'
import { useGlobleContext } from '../context';
import HeroSection from './HeroSection'

const About = () => {
  const {updateAboutPage} = useGlobleContext();
  useEffect(()=> updateAboutPage() ,[])
  return (
    <HeroSection />
  )
}

export default About