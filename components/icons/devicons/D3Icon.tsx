import { createIcon } from '../createIcon';
import { createIconMeta } from '../createIconMeta';

export const D3IconMeta = createIconMeta({
	title: 'D3js',
	desc: 'Cascading Style Sheets',
	url: 'https://d3js.org/',
	grade: 3,
})

export const D3Icon = createIcon({
  displayName: 'D3Icon',
  viewBox: '0 0 128 128',
	path: [
		<path key={0} fill="url(#d3js-a)" d="M118.16 63.966c5.223-6.256 8.368-14.217 8.368-22.98C126.528 21.097 110.352 5 90.464 5H47.986c10.375 7 18.966 16 24.82 26h17.658c5.55 0 10.064 4.45 10.064 10s-4.515 10-10.064 10H80.047c.82 5 1.26 8.62 1.26 13.098 0 4.41-.433 8.902-1.224 12.902h10.382c5.55 0 10.064 4.95 10.064 10.5S96.013 98 90.464 98H72.92c-1.315 2-2.79 4.74-4.38 6.98C63.137 112.59 56.253 119 48.29 124h42.173c19.335 0 35.16-15.746 36.024-34.876-.017.31-.043.39-.066.698.062-.848.107-1.813.107-2.678-.002-8.766-3.148-16.92-8.37-23.178z"/>,
		<path key={1} fill="url(#d3js-b)" d="M61.03 97.543l.003-.18c.07-.1.138-.292.207-.39.077-.118.152-.275.228-.392.002-.002 0-.03.003-.034 6.14-9.33 9.727-20.41 9.727-32.39C71.197 31.5 44.624 5 11.962 5H1v26h10.962c18.32 0 33.23 14.823 33.23 33.144 0 4.984-1.113 9.675-3.088 13.924-.006.013-.013.36-.02.374C36.79 89.782 25.283 98 11.963 98H1v26h10.962c20.396 0 38.41-10.722 49.068-26.457z"/>,
		<defs key={2}>
			<linearGradient id="d3js-a" gradientUnits="userSpaceOnUse" x1="85.24" y1="97.604" x2="91.053" y2="-49.515">
				<stop offset="0" stopColor="currentColor" />
				<stop offset="1" stopColor="currentColor"/>
			</linearGradient>
			<linearGradient id="d3js-b" gradientUnits="userSpaceOnUse" x1="33.627" y1="97.714" x2="39.382" y2="-47.925">
				<stop offset="0" stopColor="currentColor"/>
				<stop offset="1" stopColor="currentColor"/>
			</linearGradient>
		</defs>,
	],
	...D3IconMeta,
})
