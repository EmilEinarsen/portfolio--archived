import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { Button, Fade, VStack, Wrap, WrapItem } from '@chakra-ui/react'

import { Icon, Meta } from 'components/icons'
import { useHoverDirty } from 'hooks/useHover'
import { ColorGradient } from 'components/app/ColorGradient'
import React, { useRef } from 'react'
import { Link } from 'components/core/Link'

const Item = ({ name, showColors, Comp = Icon[name] }: { name: keyof typeof Meta, showColors: boolean, Comp?: (typeof Icon)[keyof typeof Icon] }) => 
	<WrapItem><Link href={Meta[name].url}><Comp color={showColors ? Meta[name].color : undefined} fontSize="4xl" /></Link></WrapItem>

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
						<Item name="HTML" {...{showColors}} />
						<Item name="Javascript" {...{showColors}} />
						<Item name="Typescript" {...{showColors}} />
						<Item name="CSS" {...{showColors}} />
						<Item name="Sass" {...{showColors}} />
						<Item name="Node" {...{showColors}} />
						<Item name="Git" {...{showColors}} />
					</Wrap>
				</VStack>
				<VStack>
					<Text variant="caption">Frameworks</Text>
					<Wrap justify="center" spacing="1.5rem">
						<Item name="React" {...{showColors}} />
						<Item name="Nextjs" {...{showColors}} />
						<Item name="Svelte" {...{showColors}} />
						<Item name="D3" {...{showColors}} />
					</Wrap>
				</VStack>
				<VStack>
					<Text variant="caption">Ui-frameworks</Text>
					<Wrap justify="center" spacing="1.5rem">
						<Item name="MUI" {...{showColors}} />
						<Item name="ChakraUI" {...{showColors}} />
						<Item name="Bootstrap" {...{showColors}} />
					</Wrap>
				</VStack>
			</VStack>
		</Box>
	)
}
