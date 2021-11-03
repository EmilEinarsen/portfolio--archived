import { createIcon } from '../createIcon';
import { createIconMeta } from '../createIconMeta';

export const ChakraUIIconMeta = createIconMeta({
	title: 'Chakra UI',
	desc: 'Chakra UI is a component-based library for React',
	url: 'https://chakra-ui.com/',
	grade: 3,
})

export const ChakraUIIcon = createIcon({
  displayName: 'ChakraUIIcon',
  viewBox: '0 0 128 128',
	path: [
		<path key={0} d="M128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64Z" /* fill="url(#chakra-a)" *//>,
		<path key={1} d="M34.6437 66.7318L78.2693 23.4065C79.0841 22.5971 80.396 23.5821 79.8456 24.5904L63.6085 54.3502C63.2459 55.0136 63.7266 55.8234 64.4826 55.8234H92.543C93.447 55.8234 93.8833 56.9306 93.2223 57.5477L44.0505 103.439C43.1689 104.262 41.8565 103.103 42.5644 102.127L65.8413 70.0155C66.3184 69.3571 65.8483 68.4347 65.035 68.4347H35.3456C34.4565 68.4347 34.0128 67.3584 34.6437 66.7318V66.7318Z" fill="white"/>,
/* 		<defs key={2}>
			<linearGradient id="chakra-a" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
				<stop stopColor="#7BCBD4"/>
				<stop offset="1" stopColor="#29C6B7"/>
			</linearGradient>
		</defs>, */
	],
	...ChakraUIIconMeta
})
