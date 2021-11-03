/**
 * Workaround for vh value for actual document 100vh
 */
 export const setCSSVariableVh = () => {
	const vh = window.innerHeight / 100;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
