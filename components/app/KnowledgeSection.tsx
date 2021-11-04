import { VStack, Flex, Box, Wrap, WrapItem, Link, Text, As } from '@chakra-ui/react'

import { Meta, Icon } from 'components/icons'
import { gradientRange } from 'components/icons/createIconMeta'

const Item = ({ name, showColors, Comp = Icon[name] }: { name: keyof typeof Meta, showColors?: boolean, Comp?: (typeof Icon)[keyof typeof Icon] }) => 
	<WrapItem><Link href={Meta[name].url}><Comp color={showColors ? Meta[name].color : undefined} fontSize="4xl" /></Link></WrapItem>
	
export const KnowledgeSection = ({ showColors, as }: { showColors?: boolean, as?: As<any> }) => 
	<VStack gridGap="2rem" mt="5rem">
		{ showColors &&
			// Color gradient
			<VStack aria-hidden>
				<Flex justify="space-between" width="100%">
					<Text mb={0}>Familiar</Text>
					<Text mb={0}>Expert</Text>
				</Flex>
				<Flex height=".5rem" width={300}>
					{Object.entries(gradientRange).map(([k,v]) => <Box flex="1" key={k} bg={v} />)}
				</Flex>
			</VStack>
		}
		<VStack>
			<Text variant="caption" as={as}>Languages</Text>
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
			<Text variant="caption" as={as}>Frameworks</Text>
			<Wrap justify="center" spacing="1.5rem">
				<Item name="React" {...{showColors}} />
				<Item name="Nextjs" {...{showColors}} />
				<Item name="Svelte" {...{showColors}} />
				<Item name="D3" {...{showColors}} />
			</Wrap>
		</VStack>
		<VStack>
			<Text variant="caption" as={as}>Ui-frameworks</Text>
			<Wrap justify="center" spacing="1.5rem">
				<Item name="MUI" {...{showColors}} />
				<Item name="ChakraUI" {...{showColors}} />
				<Item name="Bootstrap" {...{showColors}} />
			</Wrap>
		</VStack>
	</VStack>
