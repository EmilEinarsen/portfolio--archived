import React from 'react'

import { AboutSection } from 'components/app/AboutSection'
import { ContactSection } from 'components/app/ContactSection'

import type { NextPage } from 'next'

const Home: NextPage = () => 
	<>
		<AboutSection />
		<ContactSection />
	</>

export default Home
