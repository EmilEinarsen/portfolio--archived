import type { NextPage } from 'next'
import { Heading, Text, VStack, Wrap, WrapItem } from '@chakra-ui/layout'

import { Icon } from 'components/icons'

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
				<WrapItem><Icon.CSS fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Git fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.HTML fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Javascript fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Node fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Sass fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Typescript fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text variant="caption">Frameworks:</Text>
			<Wrap justify="center">
				<WrapItem><Icon.D3 fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Svelte fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Nextjs fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.React fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text variant="caption">Ui-frameworks:</Text>
			<Wrap justify="center">
				<WrapItem><Icon.MUI fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.ChakraUI fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Bootstrap fontSize="4xl" /></WrapItem>
			</Wrap>
			<Text variant="caption">Others:</Text>
			<Wrap justify="center">
				<WrapItem><Icon.Github fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Linkedin fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.ArrowForward fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Hamburger fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Close fontSize="4xl" /></WrapItem>
			</Wrap>
		</VStack>
	</VStack>

export default Theme
