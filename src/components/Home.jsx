import React, { useEffect } from 'react'
import { useGlobleContext } from '../context';
import Contract from './Contract';
import FeatureProducts from './FeatureProducts';
import HeroSection from './HeroSection'
import Services from './Services';

const Home = () => {

  const { updateHomePage } = useGlobleContext();
  useEffect(() => updateHomePage(), [])

  return (

    <div>
      <HeroSection/>
      <FeatureProducts/>
      <Services/>
      <Contract />
    </div>
  )
}

export default Home