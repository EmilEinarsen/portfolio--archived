import React from 'react'

import { HeroSection } from 'components/app/HeroSection'
import { AboutSection } from 'components/app/AboutSection'
import { ContactSection } from 'components/app/ContactSection'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
			<HeroSection />
			<AboutSection />
			<ContactSection />
		</>
  )
}

export default Home
