import { Box, Heading, List, ListItem } from '@chakra-ui/layout'
import Link from 'next/link'

import { Logo } from 'components/app/Logo'
import { ExternalLink } from 'components/core/ExternalLink'

export const Nav = () => 
	<>
		<Link href="/" passHref><Logo fontSize="2xl" /></Link>
		<Box as="nav" className="nav" role="navigation" aria-label="Top navigation">
			<List className="nav__list" orientation="horizontal">
				<ListItem className="nav__list-item"><Heading variant="h6"><Link href="/about">About</Link></Heading></ListItem>
				<ListItem className="nav__list-item"><Heading variant="h6"><ExternalLink href={process.env.GITHUB_PROFILE_URL}>Github</ExternalLink></Heading></ListItem>
				<ListItem className="nav__list-item"><Heading variant="h6"><ExternalLink href={process.env.LINKEDIN_PROFILE_URL}>Linkedin</ExternalLink></Heading></ListItem>
			</List>
		</Box>
	</>
