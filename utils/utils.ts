export const throttle = <T extends unknown[]>(callback: (...args: T) => any) => {
  let requestId: number | undefined

  let lastArgs: T

  const later = () => {
    requestId = undefined
    callback.apply(throttle, lastArgs)
  }

  const throttled = (...args: T) => {
    if (requestId !== undefined) return
		requestId = requestAnimationFrame(later)
    lastArgs = args;
  }

  throttled.cancel = () => {
		if(typeof requestId !== 'number') return
    cancelAnimationFrame(requestId)
    requestId = undefined
  }

  return throttled
}

export const setActualCSSVh = throttle(() => document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`))
