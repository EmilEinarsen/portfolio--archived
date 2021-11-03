import { Box, Flex, FlexProps } from "@chakra-ui/layout"

export const gradientRange = {
	1: '#FF0D0D',
	2: '#FF4E11',
	3: '#FF8E15',
	4: '#FAB733',
	5: '#ACB334',
	6: '#69B34C',
}

export const ColorGradient = (props: FlexProps) => (
	<Flex {...props}>
		{Object.entries(gradientRange).map(([k,v]) => <Box flex="1" key={k} bg={v} />)}
	</Flex>
)
