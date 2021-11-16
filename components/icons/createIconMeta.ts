export const gradientRange = {
	1: '#FF0D0D',
	2: '#FF4E11',
	3: '#FF8E15',
	4: '#FAB733',
	5: '#ACB334',
	6: '#69B34C',
}

interface CreateIconMetaOptions {
	/**
	 * Title/name related to the svg icon
	 */
	title?: string,

	/**
	 * Description of the svg icon 
	 */
	desc?: string,

	/**
	 * Url to whatever the icon is related
	 * ex. If the icon is wrapped with an link.
	 */
	url?: string,

	/**
	 * Indicates proficiency/experience with what the icon represents.
	 * ex. Devicons to showcase field of knowledge
	 */
	grade?: keyof typeof gradientRange
}

/* 
	This component is meant to be expanded with additional data.
	It primary purpose is to sync how the meta data is created before being passed to `createIcon` and exported.
*/
export const createIconMeta = ({
	title,
	desc,
	url,
	grade,
}: CreateIconMetaOptions) => ({
	title,
	desc,
	url,
	grade,
	color: grade && gradientRange[grade]
})
