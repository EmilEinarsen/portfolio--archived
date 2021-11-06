import type { NextPage } from 'next'
import { VStack, Wrap, WrapItem } from '@chakra-ui/layout'

import { Icon } from 'components/icons'
import React from 'react'
import { Heading } from 'components/core/Heading'
import { Text } from 'components/core/Text'

const Theme: NextPage = () => 
	<VStack gridGap="5rem">
		<VStack>
			<Heading.H1>H1: Function called</Heading.H1>
			<Heading.H2>H2: Function called</Heading.H2>
			<Heading.H3>H3: Function called</Heading.H3>
			<Heading.H4>H4: Function called</Heading.H4>
			<Heading.H5>H5: Function called</Heading.H5>
			<Heading.H6>H6: Function called</Heading.H6>
		</VStack>
		<VStack>
			<Text.Body>Body: Function called</Text.Body>
			<Text.Naked>Naked: Function called</Text.Naked>
			<Text.Subtitle>Subtitle: Function called</Text.Subtitle>
			<Text.Caption>Caption: Function called</Text.Caption>
		</VStack>
		<VStack gridGap="1rem">
			<Text.Caption>Languages:</Text.Caption>
			<Wrap justify="center">
				<WrapItem><Icon.CSS fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Git fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.HTML fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Javascript fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Node fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Sass fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Typescript fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text.Caption>Frameworks:</Text.Caption>
			<Wrap justify="center">
				<WrapItem><Icon.D3 fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Svelte fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Nextjs fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.React fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text.Caption>UI-frameworks:</Text.Caption>
			<Wrap justify="center">
				<WrapItem><Icon.MUI fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.ChakraUI fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Bootstrap fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text.Caption>Others:</Text.Caption>
			<Wrap justify="center">
				<WrapItem><Icon.Github fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Linkedin fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.ArrowForward fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Hamburger fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Close fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.SwedishFlag fontSize="4xl" /></WrapItem>
			</Wrap>
		</VStack>
	</VStack>

export default Theme
