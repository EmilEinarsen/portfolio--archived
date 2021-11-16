import { useState, useEffect, CSSProperties, useMemo, useCallback } from 'react'

import { useMount } from 'hooks/useMount'

export interface TransitionLayoutProps {
	children?: React.ReactNode
	childKey: string
	type?: CSSProperties['transitionTimingFunction']
	duration?: CSSProperties['transitionDuration']
	withInitial?: boolean
	animate?: CSSProperties
	exit?: CSSProperties
}

TransitionLayout.defaultProps = {
	type: 'ease',
	duration: '.2s',
	animate: { opacity: 1 },
	exit: { opacity: 0 },
}

/* 
	Built to be used for transitioning webpages 
*/
export function TransitionLayout({ 
	children: nextChildren, 
	childKey: nextChildKey,
	type: transitionTimingFunction,
	duration: transitionDuration,
	withInitial,
	animate,
	exit,
	...props
}: TransitionLayoutProps) {
	const { show, hide } = useMemo(() => ({
		show: { ...animate, transitionTimingFunction, transitionDuration },
		hide: { ...exit, transitionTimingFunction, transitionDuration },
	}), [animate, exit, transitionDuration, transitionTimingFunction])

  const [current, setCurrent] = useState({ childKey: nextChildKey, children: nextChildren })
  const [stage, setStage] = useState(!withInitial ? 'show' : 'hide')

	useMount(() => {
		withInitial && setStage('show')
	})

  useEffect(() => {
    nextChildKey !== current.childKey && setStage('hide');
  }, [current, nextChildKey])

	const hotSwapChild = useCallback(() => {
		if(stage === 'show') return
		setCurrent({ childKey: nextChildKey, children: nextChildren })
		setStage('show')
		window.scrollTo(0,0)
	}, [nextChildKey, nextChildren, stage])

  return (
		<div
			onTransitionEnd={hotSwapChild}
			style={stage === 'show' ? show : hide}
			{...props}
		>
			{current.children}
		</div>
  )
}
