import VisuallyHidden from '@chakra-ui/visually-hidden'

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	icon?: JSX.Element
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, icon, ...props }) => 
	<a {...props} rel="noopener noreferrer">{children}{props.target === '_blank' && <VisuallyHidden> (opens in a new tab)</VisuallyHidden>}</a>
