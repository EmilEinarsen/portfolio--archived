import { Box, Text } from '@chakra-ui/layout'
import { VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { CSSIcon, GitIcon, HTMLIcon, JavascriptIcon, NodeIcon, SassIcon, TypescriptIcon, D3Icon, SvelteIcon, NextjsIcon, ReactIcon, MUIIcon, ChakraUIIcon, BootstrapIcon } from 'components/icons'
import React from 'react'

export const HomeSection = () =>
	<Box as="section" className="home-section">
		<Text>
		I create successful, responsive websites that are fast, easy to use, and built with best practices.
		I am interested in the entire web-based spectrum and obsessed about my craft.
		</Text>
		<Text>
		My main expertise areas are front-end development. I am experienced in building small to medium websites and nichée web applications.
		</Text>
		<Text>
		I am constantly growing and always looking for new challenges.
		</Text>
		<VStack gridGap="2rem" mt="5rem">
			<VStack>
				<Text variant="caption">Languages</Text>
				<Wrap justify="center" spacing="1.5rem">
					<WrapItem><HTMLIcon fontSize="4xl" /></WrapItem>
					<WrapItem><JavascriptIcon fontSize="4xl" /></WrapItem>
					<WrapItem><TypescriptIcon fontSize="4xl" /></WrapItem>
					<WrapItem><CSSIcon fontSize="4xl" /></WrapItem>
					<WrapItem><SassIcon fontSize="4xl" /></WrapItem>
					<WrapItem><NodeIcon fontSize="4xl" /></WrapItem>
					<WrapItem><GitIcon fontSize="4xl" /></WrapItem>
				</Wrap>
			</VStack>
			<VStack>
				<Text variant="caption">Frameworks</Text>
				<Wrap justify="center" spacing="1.5rem">
					<WrapItem><ReactIcon fontSize="4xl" /></WrapItem>
					<WrapItem><NextjsIcon fontSize="4xl" /></WrapItem>
					<WrapItem><SvelteIcon fontSize="4xl" /></WrapItem>
					<WrapItem><D3Icon fontSize="4xl" /></WrapItem>
				</Wrap>
			</VStack>
			<VStack>
				<Text variant="caption">Ui-frameworks</Text>
				<Wrap justify="center" spacing="1.5rem">
					<WrapItem><MUIIcon fontSize="4xl" /></WrapItem>
					<WrapItem><ChakraUIIcon fontSize="4xl" /></WrapItem>
					<WrapItem><BootstrapIcon fontSize="4xl" /></WrapItem>
				</Wrap>
			</VStack>
		</VStack>
	</Box>

