import { Box, Flex, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/layout'
import Head from 'next/head'

import { Heading } from 'components/core/Heading'
import { Text } from 'components/core/Text'
import { ChakraUIIcon, ChakraUIIconMeta, NextjsIcon, NextjsIconMeta, TypescriptIcon, TypescriptIconMeta } from 'components/icons'
import React from 'react'
import { Link } from 'components/core/Link'

const colophon = () =>
	<>
		<Head>
			<title>Colophon · Emil Einarsen</title>
			<meta property="og:title" content="Colophon" />
			<link rel="preload" href="/emil-einarsen.jfif" as="image" />
		</Head>
		<article>
			<Heading.H1>Website Colophon</Heading.H1>
			<Text>
				This page outlines technical details about this site.
			</Text>
			<Text>
				For this project several third-party tools and services where chosen. 
				{'\n'}Most notably amongst these tools are:
			</Text>
			<List spacing=".5rem" ml="0 !important">
				<ListItem>
					<ListIcon as={NextjsIcon} color="black" aria-hidden />
					<Link variant="inline" href={NextjsIconMeta.url}>Next.js</Link>, for convince of React with the performance of SSG & SSR.
				</ListItem>
				<ListItem>
					<ListIcon as={ChakraUIIcon} color="teal.300" aria-hidden />
					<Link variant="inline" href={ChakraUIIconMeta.url}>Chakra UI</Link>, for its developer experience and neutral yet modern appearance.
				</ListItem>
				<ListItem>
					<ListIcon as={TypescriptIcon} color="blue.500" aria-hidden />
					<Link variant="inline" href={TypescriptIconMeta.url}>Typescript</Link>, for its type hints and development guidance.
				</ListItem>
			</List>
			<Text>
				Information about this websites purpose and development process can be found in its project <Link variant="inline" href="/projects/portfolio">article</Link>.
			</Text>
			<Text>
				For more technical details, that for whatever reason were not conveyed, take a look at the <Link variant="inline" href={process.env.NEXT_PUBLIC_SOURCE}>open-source code</Link>.
			</Text>
		</article>
	</>

export default colophon
