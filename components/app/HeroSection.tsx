import { Heading, Spacer, VStack, Text } from "@chakra-ui/layout"

import { Logo } from 'components/app/Logo'

export const HeroSection = () =>
	<VStack as="section" className="hero-section" py="5rem">
		<Logo fontSize="5xl" />
		<Spacer />
		<Heading variant="h1" as="h1" whiteSpace="break-spaces" textAlign="center">{`Emil\nEinarsen`}</Heading>
		<Spacer />
		<Text variant="caption">front-end developer</Text>
	</VStack>
