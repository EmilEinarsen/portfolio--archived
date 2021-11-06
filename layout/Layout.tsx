import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'components/core/Link'
import { SwedishFlagIcon } from 'components/icons'

import { Nav } from "layout/Nav/Nav"

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
			<main className="main" id="main">
				<div className="main__container">
					{children}
				</div>
			</main>
			<footer className="footer" id="footer">
				<Box as="p" d="inline-flex" alignItems="center" my="1rem">
					<Text variant="caption" fontSize=".75rem" mb={0} as="span">Proudly made in </Text>
					<SwedishFlagIcon mx=".5rem" fontSize="1rem" />
				</Box>
				<VStack className="footer__container">
					<HStack justify="space-between" w="100%">
						<HStack gridGap="1rem">
							<Link href={process.env.NEXT_PUBLIC_SOURCE}>Source</Link>
							<Link href="/colophon">Colophon</Link>
						</HStack>
						<HStack gridGap="1.5rem">
							<Link href="/contact">Contact</Link>
							<Link href={process.env.NEXT_PUBLIC_GITHUB}>Github</Link>
							<Link href={process.env.NEXT_PUBLIC_LINKEDIN}>Linkedin</Link>
						</HStack>
					</HStack>
				</VStack>
			</footer>
		</div>
	</div>

export default Layout
