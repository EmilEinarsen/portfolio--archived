export const withMeta = <T extends object, U = T>(meta: PageMeta, Component: Page<T & PageMeta, U>) => Object.assign((props: T) => <Component {...props} {...meta} />, { meta })
