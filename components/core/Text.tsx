import { Text as ChakraText, TextProps } from "@chakra-ui/layout"

interface Compound {
	Subtitle: React.ComponentType<Omit<TextProps, 'as' | 'variant'>>
	Body: React.ComponentType<Omit<TextProps, 'as' | 'variant'>>
	Caption: React.ComponentType<Omit<TextProps, 'as' | 'variant'>>
	Blockquote: React.ComponentType<Omit<TextProps, 'as' | 'variant'>>
	Naked: React.ComponentType<Omit<TextProps, 'as' | 'variant'>>
}

export const Text = Object.assign(ChakraText, {
	Subtitle: props => <ChakraText variant="subtitle" {...props} />,
	Body: props => <ChakraText {...props} />,
	Caption: props => <ChakraText variant="caption" {...props} />,
	Blockquote: props => <ChakraText variant="blockquote" as="blockquote" {...props} />,
	Naked: props => <ChakraText variant="naked" {...props} />,
} as Compound)
