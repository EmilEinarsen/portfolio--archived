import { DeepPartial, extendTheme, ChakraTheme, ChakraProvider, CSSReset } from "@chakra-ui/react"

const theme = extendTheme({
	components: {
		Heading: {
			variants: {
				h1: {
					fontSize: '6xl', fontWeight: 'bold'
				},
				h2: {
					fontSize: '4xl', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1.5rem'
				},
				h3: {
					fontSize: '3xl', fontWeight: 'bold'
				},
				h4: {
					fontSize: '2xl', fontWeight: 'bold'
				},
				h5: {
					fontSize: 'xl', fontWeight: 'bold'
				},
				h6: {
					fontSize: 'xl', fontWeight: 'medium'
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
				}
			},
			defaultProps: {
				variant: "body"
			}
		}
	},
} as DeepPartial<ChakraTheme>)

export const ThemeProvider: React.FC = ({ children }) =>
	<ChakraProvider theme={theme}>
		<CSSReset />
		{children}
	</ChakraProvider>
