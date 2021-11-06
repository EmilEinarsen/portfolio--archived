import { List, ListIcon, ListItem } from '@chakra-ui/layout'
import { Heading } from 'components/core/Heading'
import { Text } from 'components/core/Text'
import { ChakraUIIcon, NextjsIcon, TypescriptIcon } from 'components/icons'
import React from 'react'

const colophon = () =>
	<>
		<Heading.H1>Website Colophon</Heading.H1>
		<Text>
			This page outlines technical details about this site.
		</Text>
		<Text>
			The goal was to build for high performance while maintaining a great developer experience.
		</Text>
		<Text>
			Several third-party tools and services were used.
		</Text>
		
		<List spacing=".5rem">
			<Text.Naked>Most notably amongst these tools are:</Text.Naked>
			<ListItem>
				<ListIcon as={NextjsIcon} color="black" aria-hidden />
				Next.js, for convince of React with the performance of SSG & SSR.
			</ListItem>
			<ListItem>
				<ListIcon as={ChakraUIIcon} color="teal.300" aria-hidden />
				Chakra UI, for its developer experience and neutral yet modern appearance.
			</ListItem>
			<ListItem>
				<ListIcon as={TypescriptIcon} color="blue.500" aria-hidden />
				Typescript, for its type hints and development guidance.
			</ListItem>
		</List>
	</>

export default colophon
