import Head from 'next/head'
import { useRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'

import { Box, HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

import { HeroSection } from 'components/app/HeroSection'
import { KnowledgeSection } from 'components/app/KnowledgeSection'
import { ArrowForwardIcon } from 'components/icons/ArrowForwardIcon'
import { Text } from 'components/core/Text'
import { withMeta } from '../utils/withMeta'
import { LinkedinIcon } from 'components/icons'

const Home = withMeta<WithRouterProps>({
	title: 'Emil Einarsen · Emil Einarsen',
	description: '',
}, ({ title }) => {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
			</Head>
			<HeroSection />
			<Box className="home">
				<Text>
					I am a web developer from Sweden who create successful, responsive websites that are fast, easy to use, and built with best practices. I am interested in the entire web-based spectrum and obsessed with my craft.
				</Text>
				<Text>
					My primary expertise is in areas of the front-end. I have experience with building small to medium websites and nichée web applications.
				</Text>
				<Text>
					I am constantly growing and always looking for new challenges. Get in touch!
				</Text>
				<HStack mt="5rem" justify="space-evenly" gridGap="1rem">
					<Button 
						variant="outline" 
						size="lg"
						/* onClick={() => router.push('/contact')} */
						onClick={() => router.push(process.env.NEXT_PUBLIC_LINKEDIN??'')}
						rightIcon={<LinkedinIcon />}
					>
						{/* Get in touch! */}
						Get in touch!
					</Button>
					<Button 
						size="lg" 
						variant="outline" 
						rightIcon={<ArrowForwardIcon />} 
						onClick={() => router.push('/about')}
					>
						Read more
					</Button>
				</HStack>
				<KnowledgeSection as="h2" />
			</Box>
		</>
	)
})

export default Home
