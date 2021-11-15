import { useCallback, useEffect, useReducer } from "react";

type status = 'idle' | 'pending' | 'success' | 'error'

interface State {
	status: status
	value: unknown | undefined
	error: unknown | undefined
}

type Action =
	| { type: 'idle' }
	| { type: 'pending' }
	| { type: 'success', value: unknown }
	| { type: 'error', error: unknown }

const initialState: State = {
	status: 'idle',
	value: undefined,
	error: undefined,
}

const reducer = (_: State, action: Action) => {
	switch(action.type) {
		case 'pending': return { status: action.type, value: undefined, error: undefined }
		case 'success': return { status: action.type, value: action.value, error: undefined }
		case 'error': return { status: action.type, value: undefined, error: action.error }
		case 'idle': return initialState
	}
}

export const useAsync = <T extends unknown = unknown>(asyncFunction: (...params: unknown[]) => Promise<T>, immediate = true) => {
	const [ state, dispatch ] = useReducer(reducer, initialState)
	
  const execute = useCallback(() => 
		asyncFunction()
      .then(value => dispatch({ type: 'success', value }))
      .catch(error => dispatch({ type: 'error', error }))
  , [asyncFunction])
	
  useEffect(() => void immediate && execute(), [execute, immediate])

  return { execute, ...state };
};
