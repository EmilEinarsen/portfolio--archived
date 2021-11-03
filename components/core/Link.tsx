import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Link as StyledLink, LinkProps as StyledLinkProps } from '@chakra-ui/react';

export interface LinkProps extends Omit<StyledLinkProps, 'href'> {
	href?: string
	exact?: boolean
}

export const Link: React.FC<LinkProps> = ({ 
	href = '',
	exact,
	children,
	...props
}) => {
	const { pathname } = useRouter();
	const isActive = exact ? pathname === href : pathname.startsWith(href);
	
	return (
		<NextLink href={href} passHref>
			<StyledLink {...props} as="a" {...isActive?{'aria-current': 'page'}:null}>
				{children}
			</StyledLink>
		</NextLink>
	);
}