export const gradientRange = {
	1: '#FF0D0D',
	2: '#FF4E11',
	3: '#FF8E15',
	4: '#FAB733',
	5: '#ACB334',
	6: '#69B34C',
}

export const createIconMeta = ({
	title,
	desc,
	url,
	grade,
}: {
	title?: string,
	desc?: string,
	url?: string,
	grade?: keyof typeof gradientRange
}) => ({
	title,
	desc,
	url,
	grade,
	color: grade && gradientRange[grade]
})