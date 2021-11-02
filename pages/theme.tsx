import type { NextPage } from 'next'
import { Box, Heading, Text, VStack, Wrap, WrapItem } from '@chakra-ui/layout'

import { CSSIcon, HTMLIcon, SassIcon, NextjsIcon, JavascriptIcon, TypescriptIcon, ReactIcon, SvelteIcon, NodeIcon, MUIIcon, GithubIcon, D3Icon, GitIcon, LinkedinIcon, ChakraUIIcon, BootstrapIcon } from 'components/icons'

const Theme: NextPage = () => 
	<VStack gridGap="5rem">
		<VStack>
			<Heading variant="h1">h1: Function called</Heading>
			<Heading variant="h2">h2: Function called</Heading>
			<Heading variant="h3">h3: Function called</Heading>
			<Heading variant="h4">h4: Function called</Heading>
			<Heading variant="h5">h5: Function called</Heading>
			<Heading variant="h6">h6: Function called</Heading>
		</VStack>
		<VStack>
			<Text variant="body" mb="0">body: Function called</Text>
			<Text variant="subtitle">subtitle: Function called</Text>
			<Text variant="caption">caption: Function called</Text>
		</VStack>
		<VStack gridGap="1rem">
			<Text variant="caption">Languages:</Text>
			<Wrap justify="center">
				<WrapItem><CSSIcon fontSize="4xl" /></WrapItem>
				<WrapItem><GitIcon fontSize="4xl" /></WrapItem>
				<WrapItem><HTMLIcon fontSize="4xl" /></WrapItem>
				<WrapItem><JavascriptIcon fontSize="4xl" /></WrapItem>
				<WrapItem><NodeIcon fontSize="4xl" /></WrapItem>
				<WrapItem><SassIcon fontSize="4xl" /></WrapItem>
				<WrapItem><TypescriptIcon fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text variant="caption">Frameworks:</Text>
			<Wrap justify="center">
				<WrapItem><D3Icon fontSize="4xl" /></WrapItem>
				<WrapItem><SvelteIcon fontSize="4xl" /></WrapItem>
				<WrapItem><NextjsIcon fontSize="4xl" /></WrapItem>
				<WrapItem><ReactIcon fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text variant="caption">Ui-frameworks:</Text>
			<Wrap justify="center">
				<WrapItem><MUIIcon fontSize="4xl" /></WrapItem>
				<WrapItem><ChakraUIIcon fontSize="4xl" /></WrapItem>
				<WrapItem><BootstrapIcon fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text variant="caption">Others:</Text>
			<Wrap justify="center">
				<WrapItem><GithubIcon fontSize="4xl" /></WrapItem>
				<WrapItem><LinkedinIcon fontSize="4xl" /></WrapItem>
			</Wrap>
			
		</VStack>
			
	</VStack>

export default Theme
