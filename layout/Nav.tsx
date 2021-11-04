import { Box, Heading, List, ListItem as ChakraListItem, HeadingProps } from '@chakra-ui/layout'

import { ExternalLink } from 'components/core/ExternalLink'
import { Link } from 'components/core/Link'
import { GithubIcon, LinkedinIcon, LogoIcon } from 'components/icons'

const github = 'https://github.com/EmilEinarsen'
const linkedin = 'https://www.linkedin.com/in/emil-einarsen-423377185'

const ListItem: React.FC<HeadingProps> = props => 
	<ChakraListItem
		className="nav__list-item"
	>
		<Heading
			{...props}
			variant="h6"
		/>
	</ChakraListItem>

export const Nav = () =>
	<>
		<Link href="/" aria-label="Go to homepage" exact><LogoIcon fontSize="2xl" /></Link>
		<Box as="nav" className="nav" aria-label="Main">
			<List className="nav__list" orientation="horizontal" alignItems="center">
				<ListItem as={props => <Link {...props} href="/" exact>Home</Link>} />
				<ListItem as={props => <Link {...props} href="/about" exact>About</Link>} />
				<ListItem as={props => <ExternalLink {...props} href={github}><GithubIcon fontSize="2xl" /></ExternalLink>} />
				<ListItem as={props => <ExternalLink {...props} href={linkedin}><LinkedinIcon fontSize="2xl" /></ExternalLink>} />
			</List>
		</Box>
	</>