import { Box, fadeConfig, Flex, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Nav } from "layout/Nav/Nav"
import { Link } from 'components/core/Link'
import { SwedishFlagIcon } from 'components/icons'
import { Text } from "components/core/Text"

const Layout: React.FC = ({ children }) =>
	<div className="wrapper">
		<div className="page">
			<header className="header" id="header">
				<Box className="header__container">
					<div className="main-navigation">
						<Nav />
					</div>
				</Box>
			</header>
			<motion.main className="main" id="main">
				<div className="main__container">
					{children}
				</div>
			</motion.main>
			<footer className="footer" id="footer">
				<Box as="p" d="inline-flex" alignItems="end" my="1rem">
					<Text.Caption fontSize=".75rem" as="span">Proudly made in</Text.Caption>
					<Box as="span" fontSize={0}>🇸🇪</Box><SwedishFlagIcon mx=".5rem" fontSize="1rem" aria-hidden />
				</Box>
				<VStack className="footer__container">
					<Flex justify="space-between" flexWrap="wrap" gridGap="1rem" w="100%">
						<Box flex="1"><Link href={process.env.NEXT_PUBLIC_SOURCE}>Source</Link></Box>
						<Box flex="1"><Link href="/colophon">Colophon</Link></Box>
						<Box flex="2" d={{ base: 'none', sm: 'unset' }} />
						<Box flex="1"><Link href="/contact">Contact</Link></Box>
						<Box flex="1"><Link href={process.env.NEXT_PUBLIC_GITHUB}>Github</Link></Box>
						<Box flex="1"><Link href={process.env.NEXT_PUBLIC_LINKEDIN}>Linkedin</Link></Box>
					</Flex>
				</VStack>
			</footer>
		</div>
	</div>

export default Layout
