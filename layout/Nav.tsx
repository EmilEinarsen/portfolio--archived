import React, { useEffect, useRef } from 'react'
import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Heading, List, ListItem as ChakraListItem, HeadingProps, VStack } from '@chakra-ui/layout'
import { Fade, Portal, useBreakpoint } from '@chakra-ui/react'

import { ExternalLink } from 'components/core/ExternalLink'
import { Link } from 'components/core/Link'
import { CloseIcon, GithubIcon, HamburgerIcon, LinkedinIcon, LogoIcon } from 'components/icons'
import { useMount } from 'hooks/useMount'

const github = 'https://github.com/EmilEinarsen'
const linkedin = 'https://www.linkedin.com/in/emil-einarsen-423377185'

const ListItem: React.FC<HeadingProps & { isDrawer?: boolean }> = ({ isDrawer, ...props }) => 
	<ChakraListItem
		className="nav__list-item"
	>
		<Heading
			{...props}
			variant={isDrawer ? "h4" : "h6"}
		/>
	</ChakraListItem>

export const Nav = () => {
	const btnRef = useRef<HTMLButtonElement>(null)
	const ref = useRef<HTMLElement | null>(null)
	useMount(() => { ref.current = document.querySelector('.header')?.parentElement ?? null })
	const { isOpen, onToggle, onClose } = useDisclosure()

	const size = useBreakpoint()
	useEffect(() => {
		if(size && ['base', 'sm'].includes(size)) return
		onClose()
	}, [onClose, size])
	
	return (
		<>
			<Link href="/" aria-label="Go to homepage" exact><LogoIcon fontSize="2xl" /></Link>
			<Box as="nav" className="nav" aria-label="Main">
				<List className="nav__list" orientation="horizontal" alignItems="center">
					<ListItem display={{ base: 'none', md: 'unset' }} as={props => <Link {...props} href="/" exact>Home</Link>} />
					<ListItem display={{ base: 'none', md: 'unset' }} as={props => <Link {...props} href="/about" exact>About</Link>} />
					<ListItem as={props => <ExternalLink {...props} href={github}><GithubIcon fontSize="2xl" /></ExternalLink>} />
					<ListItem as={props => <ExternalLink {...props} href={linkedin}><LinkedinIcon fontSize="2xl" /></ExternalLink>} />
					<IconButton
						display={{ base: 'unset', md: 'none' }}
						aria-expanded={isOpen} 
						aria-label="Mobile Navigation Button"
						ref={btnRef} 
						onClick={onToggle}
						size="lg"
					>
						{isOpen ? <CloseIcon /> : <HamburgerIcon />}
					</IconButton>
				</List>
				<Fade in={isOpen}>
					<VStack
						as={List}
						display={{ base: 'unset', md: 'none' }}
						className="nav__list nav__list--mobile"
					>
						<ListItem display="flex" justifyContent="center" as={props => <Link {...props} href="/" exact>Home</Link>} isDrawer onClick={onClose} />
						<ListItem display="flex" justifyContent="center" as={props => <Link {...props} href="/about" exact>About</Link>} isDrawer onClick={onClose} />
					</VStack>
					<Portal containerRef={ref}>
						<Fade in={isOpen}>
							<Box
								display={isOpen ? 'unset' : 'none'}
								className="nav__backdrop"
								onClick={onClose}
							/>
						</Fade>
					</Portal>
				</Fade>
			</Box>
		</>
	)
}