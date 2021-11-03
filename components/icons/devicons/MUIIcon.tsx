import { createIcon } from '../createIcon';
import { createIconMeta } from '../createIconMeta';

export const MUIIconMeta = createIconMeta({
	title: 'MUI',
	desc: 'MUI (formerly Material-UI) is a React UI-framework built on Google\'s Material Design',
	url: 'https://mui.com/',
	grade: 5,
})

export const MUIIcon = createIcon({
  displayName: "MUIIcon",
  viewBox: "0 0 128 128",
  path: [
		<path key={0} d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6zM48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"/>,
		<path key={1} d="M48 77.8v18.4l32 18.4V96.2L48 77.8zM80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"/>,
	],
	...MUIIconMeta,
})
