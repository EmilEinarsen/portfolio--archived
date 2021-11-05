import { Heading, Spacer, VStack, Text } from "@chakra-ui/react"

import { LogoIcon } from 'components/icons'

export const HeroSection = () =>
	<VStack as="section" className="hero-section" pb="5rem">
		<LogoIcon fontSize="6xl" />
		<Spacer />
		<Heading as="h1" fontSize="6xl" whiteSpace="break-spaces" textAlign="center">Emil{'\n'}Einarsen</Heading>
		<Spacer />
		<Text variant="caption">web-developer</Text>
	</VStack>
