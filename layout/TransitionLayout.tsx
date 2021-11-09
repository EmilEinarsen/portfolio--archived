import { useMount } from 'hooks/useMount';
import { useState, useEffect, CSSProperties } from 'react';

interface TransitionLayoutProps {
	childKey: string
	type?: CSSProperties['transitionTimingFunction']
	duration?: CSSProperties['transitionDuration']
	className?: string
	initial?: boolean
}

export const TransitionLayout: React.FC<TransitionLayoutProps> = ({ 
	children, 
	className, 
	childKey,
	type,
	duration,
	initial,
}) => {
	const transitionProps = { transitionTimingFunction: type, transitionDuration: duration }
  const [display, setDisplay] = useState({childKey,children});
  const [transitionStage, setTransitionStage] = useState(!initial ? 'fadeIn' : 'fadeOut');

	useMount(() => {
		initial && setTransitionStage('fadeIn')
	})

  useEffect(() => {
    if (childKey !== display.childKey) setTransitionStage('fadeOut');
  }, [children, setDisplay, display, childKey]);

  return (
		<div
			onTransitionEnd={() => {
				if (transitionStage === 'fadeOut') {
					setDisplay({childKey,children});
					setTransitionStage('fadeIn');
					window.scrollTo(0,0)
				}
			}}
			style={transitionStage === 'fadeIn' ? { 
				...transitionProps,
				opacity: 1,
			} : { 
				...transitionProps,
				opacity: 0,
			}}
			className={className}
		>
			{display.children}
		</div>
  );
}

TransitionLayout.defaultProps = {
	type: 'ease',
	duration: '.2s',
}
