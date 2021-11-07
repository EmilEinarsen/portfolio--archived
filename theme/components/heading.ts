import { StyleConfig } from "theme/theme"

const heading: StyleConfig = {
	variants: {
		h1: {
			fontSize: '5xl', 
			fontWeight: 'medium', 
			marginY: '1.5rem', 
			letterSpacing: -1.5,
		},
		h2: {
			fontSize: '4xl', 
			fontWeight: 'medium', 
			marginTop: '2.5rem', 
			letterSpacing: -.5, 
			lineHeight: '2.25rem', 
			paddingBottom: '0.25rem',
		},
		h3: {
			fontSize: '3xl', 
			fontWeight: 'medium', 
			marginY: '.5rem',
		},
		h4: {
			fontSize: '2xl', 
			fontWeight: 'medium', 
			marginY: '.25rem', 
			letterSpacing: .25,
		},
		h5: {
			fontSize: 'xl', 
			fontWeight: 'medium', 
			marginY: '.25rem',
		},
		h6: {
			fontSize: 'lg', 
			fontWeight: 'medium', 
			marginY: '.25rem', 
			letterSpacing: .15,
		},
	},
} as const

export default heading
