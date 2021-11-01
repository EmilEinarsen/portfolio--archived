import { Heading, Spacer, VStack, Text } from "@chakra-ui/layout"

import { LogoIcon } from 'components/icons'

export const HeroSection = () =>
	<VStack as="section" className="hero-section" pb="5rem">
		<LogoIcon fontSize="6xl" />
		<Spacer />
		<Heading variant="h1" as="h1" whiteSpace="break-spaces" textAlign="center">Emil{'\n'}Einarsen</Heading>
		<Spacer />
		<Text variant="caption">web-developer</Text>
	</VStack>
