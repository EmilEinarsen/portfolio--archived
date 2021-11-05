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
			It was built to be high performant while maintaining a great developer experience.
			To achieve this goal I used several third party tools and services.
		</Text>
		<Text>Most notably is:</Text>
		<List>
			<ListItem>
				<ListIcon as={NextjsIcon} color="green.500" />
				Nextjs, for the convince of React but with the performance of SSG & SSR
			</ListItem>
			<ListItem>
				<ListIcon as={ChakraUIIcon} color="green.500" />
				Chakra ui, for its developer experience and neutral yet modern appearance.
			</ListItem>
			<ListItem>
				<ListIcon as={TypescriptIcon} color="green.500" />
				Typescript, for its type hints and development guidance.
			</ListItem>
		</List>
	</>

export default colophon
