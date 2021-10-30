import VisuallyHidden from '@chakra-ui/visually-hidden'

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, ...props }) => 
	<a {...props} target="_blank" rel="noreferrer">{children}<VisuallyHidden> (opens in a new tab)</VisuallyHidden></a>
