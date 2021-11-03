import type { NextPage } from 'next'

import { HeroSection } from 'components/app/HeroSection'
import { HomeSection } from 'components/app/HomeSection'
import { ContactSection } from 'components/app/ContactSection'


const Home: NextPage = () =>
	<>
		<HeroSection />
		<HomeSection />
		<ContactSection />
	</>

export default Home
