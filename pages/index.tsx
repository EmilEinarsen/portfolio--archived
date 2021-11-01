import React from 'react'

import { HeroSection } from 'components/app/HeroSection'
import { HomeSection } from 'components/app/HomeSection'
import { ContactSection } from 'components/app/ContactSection'

import type { NextPage } from 'next'

const Home: NextPage = () =>
	<>
		<HeroSection />
		<HomeSection />
		<ContactSection />
	</>

export default Home
