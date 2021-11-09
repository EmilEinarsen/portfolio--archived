import { usePrefersReducedMotion } from "@chakra-ui/react"

export const PageTransition: React.FC = ({ children }) => {
	const shouldReduceMotion = usePrefersReducedMotion()
	
	return !shouldReduceMotion ? (
		<div>
			{children}
		</div>
	) : <>{children}</>
}
