import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { Button, Fade, VStack, Wrap, WrapItem } from '@chakra-ui/react'

import { Icon, Meta } from 'components/icons'
import { useHoverDirty } from 'hooks/useHover'
import { ColorGradient } from 'components/app/ColorGradient'
import React, { useRef } from 'react'
import { Link } from 'components/core/Link'

export const HomeSection = () => {
	const ref = useRef<HTMLDivElement>(null)
	const showColors = useHoverDirty(ref)

	return (
		<Box as="section" className="home-section">
			<Text>
				I am a web developer from Sweden who create successful, responsive websites that are fast, easy to use, and built with best practices. I am interested in the entire web-based spectrum and obsessed with my craft.
			</Text>
			<Text>
				My primary expertise is in areas of the front-end. I have experience with building small to medium websites and nichée web applications.
			</Text>
			<Text>
				I am constantly growing and always looking for new challenges. Get in touch!
			</Text>
			<HStack mt="5rem" justify="center">
				<Button color="primary">
					Get in touch!
				</Button>
				<Text>
					or
				</Text>
				<Button>
					Read more
				</Button>
			</HStack>
			<VStack gridGap="2rem" mt="5rem" ref={ref}>
				<Fade in={showColors}>
					<VStack>
						<Flex justify="space-between" width="100%">
							<Text mb={0}>Familiar</Text>
							<Text mb={0}>Expert</Text>
						</Flex>
						<ColorGradient height=".5rem" width={300} />
					</VStack>
				</Fade>
				<VStack>
					<Text variant="caption">Languages</Text>
					<Wrap justify="center" spacing="1.5rem">
						<WrapItem><Link href={Meta.HTML.url}><Icon.HTML color={showColors ? Meta.HTML.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.Javascript.url}><Icon.Javascript color={showColors ? Meta.Javascript.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.Typescript.url}><Icon.Typescript color={showColors ? Meta.Typescript.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.CSS.url}><Icon.CSS color={showColors ? Meta.CSS.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.Sass.url}><Icon.Sass color={showColors ? Meta.Sass.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.Node.url}><Icon.Node color={showColors ? Meta.Node.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.Git.url}><Icon.Git color={showColors ? Meta.Git.color : undefined} fontSize="4xl" /></Link></WrapItem>
					</Wrap>
				</VStack>
				<VStack>
					<Text variant="caption">Frameworks</Text>
					<Wrap justify="center" spacing="1.5rem">
						<WrapItem><Link href={Meta.React.url}><Icon.React color={showColors ? Meta.React.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.Nextjs.url}><Icon.Nextjs color={showColors ? Meta.Nextjs.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.Svelte.url}><Icon.Svelte color={showColors ? Meta.Svelte.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.D3.url}><Icon.D3 color={showColors ? Meta.D3.color : undefined} fontSize="4xl" /></Link></WrapItem>
					</Wrap>
				</VStack>
				<VStack>
					<Text variant="caption">Ui-frameworks</Text>
					<Wrap justify="center" spacing="1.5rem">
						<WrapItem><Link href={Meta.MUI.url}><Icon.MUI color={showColors ? Meta.MUI.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.ChakraUI.url}><Icon.ChakraUI color={showColors ? Meta.ChakraUI.color : undefined} fontSize="4xl" /></Link></WrapItem>
						<WrapItem><Link href={Meta.Bootstrap.url}><Icon.Bootstrap color={showColors ? Meta.Bootstrap.color : undefined} fontSize="4xl" /></Link></WrapItem>
					</Wrap>
				</VStack>
			</VStack>
		</Box>
	)
}
