import { VStack, Flex, Box, Wrap, WrapItem, Link, As } from '@chakra-ui/react'

import { Meta, Icon } from 'components/icons'
import { gradientRange } from 'components/icons/createIconMeta'
import { Text } from 'components/core/Text'

const Item = ({ name, showColors, Comp = Icon[name] }: { name: keyof typeof Meta, showColors?: boolean, Comp?: (typeof Icon)[keyof typeof Icon] }) => 
	<WrapItem><Link href={Meta[name].url}><Comp color={showColors ? Meta[name].color : undefined} fontSize="4xl" /></Link></WrapItem>
	
export const KnowledgeSection = ({ showColors, as }: { showColors?: boolean, as?: As<any> }) => 
	<VStack gridGap="2rem" mt="5rem">
		{ showColors &&
			// Color gradient
			<VStack aria-hidden w="100%" maxW={300}>
				<Flex justify="space-between" w="100%">
					<Text.Naked>Basic</Text.Naked>
					<Text.Naked>Experienced</Text.Naked>
				</Flex>
				<Flex h=".5rem" w="100%">
					{Object.entries(gradientRange).map(([k,v]) => <Box flex="1" key={k} bg={v} />)}
				</Flex>
			</VStack>
		}
		<VStack>
			<Text variant="caption" as={as} mb="1rem">Languages</Text>
			<Wrap justify="center" spacing="1.5rem">
				<Item name="HTML" showColors={showColors} />
				<Item name="Javascript" showColors={showColors} />
				<Item name="Typescript" showColors={showColors} />
				<Item name="CSS" showColors={showColors} />
				<Item name="Sass" showColors={showColors} />
				<Item name="Node" showColors={showColors} />
				<Item name="Git" showColors={showColors} />
			</Wrap>
		</VStack>
		<VStack>
			<Text variant="caption" as={as} mb="1rem">Frameworks</Text>
			<Wrap justify="center" spacing="1.5rem">
				<Item name="React" showColors={showColors} />
				<Item name="Nextjs" showColors={showColors} />
				<Item name="Svelte" showColors={showColors} />
				<Item name="D3" showColors={showColors} />
			</Wrap>
		</VStack>
		<VStack>
			<Text variant="caption" as={as} mb="1rem">Ui-frameworks</Text>
			<Wrap justify="center" spacing="1.5rem">
				<Item name="MUI" showColors={showColors} />
				<Item name="ChakraUI" showColors={showColors} />
				<Item name="Bootstrap" showColors={showColors} />
			</Wrap>
		</VStack>
	</VStack>
