import React from 'react'
import Image from 'next/image'
import { Text } from 'components/core/Text'
import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/layout'

const portfolio = () =>
	<article>
		<Text>
			The goal was to build for <b>high performance while maintaining a great developer experience.</b> 
		</Text>
		<Text>
			For this websites intents and purposes, these metrics respectively is defined by:
		</Text>
		<UnorderedList spacing=".5rem">
			<ListItem>
				High performance: <b>Max score on Lighthouse on both Mobile and Desktop.</b>
			</ListItem>
			<ListItem>
				Great developer experience: <b>Is the project scalable and enjoyable for the author?</b>
			</ListItem>
		</UnorderedList>

		<Text>
			Both metrics needs to be satisfied for this website to be considered successful.
		</Text>

		<Flex>
			<Box>
				<Image 
					src="/light-house-desktop-2021-11-07-cropped.png" 
					width={585} 
					height={329} 
					alt="Lighthouse result for desktop" 
					title="Lighthouse result for desktop"
					priority 
				/>
				<Text></Text>
			</Box>

			<Box>
				<Image 
					src="/light-house-mobile-2021-11-07-cropped.png" 
					width={585} 
					height={329} 
					alt="Lighthouse result for mobile" 
					title="Lighthouse result for mobile" 
					priority 
				/>
				<Text></Text>
			</Box>
		</Flex>
	</article>

export default portfolio
