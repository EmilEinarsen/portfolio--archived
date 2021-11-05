import React, { useEffect, useRef } from 'react'
import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Heading, List, ListItem as ChakraListItem, HeadingProps, VStack } from '@chakra-ui/layout'
import FocusLock from '@chakra-ui/focus-lock'
import { Fade, Portal } from '@chakra-ui/react'

import { ExternalLink } from 'components/core/ExternalLink'
import { Link } from 'components/core/Link'
import { CloseIcon, GithubIcon, HamburgerIcon, LinkedinIcon, LogoIcon } from 'components/icons'
import { useMount } from 'hooks/useMount'
import { useIsMobile } from 'hooks/useIsMobile'
import { useDisableScroll } from 'hooks/useDisableScroll'

const ListItem: React.FC<HeadingProps & { isDrawer?: boolean }> = ({ isDrawer, ...props }) => 
	<ChakraListItem
		className="nav__list-item"
	>
		<Heading
			{...props}
			variant={isDrawer ? "h4" : "h6"}
			{...isDrawer?{display:'flex', justifyContent: 'center'}:null}
		/>
	</ChakraListItem>

export const Nav = () => {
	const btnRef = useRef<HTMLButtonElement>(null)
	const headerRef = useRef<HTMLElement | null>(null)

	const listRef = useRef<HTMLDivElement | null>(null)
	useMount(() => { headerRef.current = document.querySelector('#header')?.parentElement ?? null })

	const { isOpen, onToggle, onClose } = useDisclosure()

	const isMobile = useIsMobile()
	useEffect(() => { isMobile || onClose() }, [isMobile, onClose])

	useDisableScroll({ enabled: isMobile && isOpen })
	
	return (
		<>
			{/* 
				Adds a div to the dom with data attribute "data-focus-lock-disabled" 
				use this to style navigation since FocusLock doesn't have the props className or style 
			*/}
			<FocusLock finalFocusRef={btnRef} isDisabled={!isOpen}>
				<Link href="/" aria-label="Go to homepage" exact onClick={onClose}><LogoIcon fontSize="2xl" /></Link>
				<Box as="nav" className="nav" aria-label="Main">
						<List className="nav__list" orientation="horizontal" alignItems="center">
							{!isMobile &&
								<>
									<ListItem as={props => <Link {...props} href="/" exact>Home</Link>} />
									<ListItem as={props => <Link {...props} href="/about" exact>About</Link>} />
									<ListItem as={props => <Link {...props} href="/contact" exact>Contact</Link>} />
								</>
							}
							<ListItem as={props => <ExternalLink {...props} href={process.env.NEXT_PUBLIC_GITHUB}><GithubIcon fontSize="2xl" /></ExternalLink>} />
							<ListItem as={props => <ExternalLink {...props} href={process.env.NEXT_PUBLIC_LINKEDIN}><LinkedinIcon fontSize="2xl" /></ExternalLink>} />
							{isMobile &&
								<IconButton
									size="lg"
									ref={btnRef} 
									onClick={onToggle}
									aria-expanded={isOpen} 
									aria-label={(isOpen ? "Close" : "Open") + ' the menu'}
									aria-controls="mobileMenu"
								>
									{isOpen ? <CloseIcon aria-hidden /> : <HamburgerIcon aria-hidden />}
								</IconButton>
							}
						</List>
						<Fade 
							in={isOpen}
							onAnimationStart={() => listRef.current!.style.display = 'unset'}
							onAnimationComplete={() => !isOpen && (listRef.current!.style.display = 'none')} 
						>
							<VStack
								as={List}
								display={{ base: 'unset', md: 'none' }}
								className="nav__list nav__list--mobile"
								ref={listRef}
								id="mobileMenu"
							>
								<ListItem as={props => <Link {...props} href="/" exact>Home</Link>} isDrawer onClick={onClose} />
								<ListItem as={props => <Link {...props} href="/about" exact>About</Link>} isDrawer onClick={onClose} />
								<ListItem as={props => <Link {...props} href="/contact" exact>Contact</Link>} isDrawer onClick={onClose} />
							</VStack>
							<Portal containerRef={headerRef}>
								{/* Needed since the portal breaks the outer Fade effect */}
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
			</FocusLock>
		</>
	)
}