import { DeepPartial, extendTheme, ChakraTheme, ChakraProvider, CSSReset } from "@chakra-ui/react"

const theme = extendTheme({
	config: {
    cssVarPrefix: "",
  },
	components: {
		Heading: {
			variants: {
				h1: {
					fontSize: '6xl', fontWeight: 'medium', marginY: '1.5rem', letterSpacing: -1.5
				},
				h2: {
					fontSize: '5xl', fontWeight: 'medium', marginY: '1rem', letterSpacing: -.5
				},
				h3: {
					fontSize: '4xl', fontWeight: 'medium', marginY: '.5rem'
				},
				h4: {
					fontSize: '3xl', fontWeight: 'medium', marginY: '.25rem', letterSpacing: .25
				},
				h5: {
					fontSize: '2xl', fontWeight: 'medium', marginY: '.25rem'
				},
				h6: {
					fontSize: 'xl', fontWeight: 'medium', marginY: '.25rem', letterSpacing: .15
				},
			}
		},
		Text: {
			variants: {
				subtitle: {
					fontSize: 'xl', fontWeight: 'medium'
				},
				body: {
					fontSize: 'xl', fontWeight: 'regular', marginBottom: '1.5rem'
				},
				caption: {
					fontsize: 'md', fontWeight: 'medium', textTransform: 'uppercase', color: 'gray.700', letterSpacing: '.1rem'
				},
			},
			defaultProps: {
				variant: "body"
			}
		},
		Divider: {
			sizes: {
				thick: {
					borderBottomWidth: '.25rem'
				}
			}
		},
	},
} as DeepPartial<ChakraTheme>)

export const ThemeProvider: React.FC = ({ children }) =>
	<ChakraProvider theme={theme}>
		<CSSReset />
		{children}
	</ChakraProvider>
