export type StyleInterpolation = StyleObject | ((options: StyleOptions) => StyleObject)

export interface StyleOptions {
  theme: Theme
  colorMode: "light" | "dark"
  colorScheme: string
}

export interface StyleConfig {
  baseStyle?: StyleInterpolation
  sizes?: { [size: string]: StyleInterpolation }
  variants?: { [variant: string]: StyleInterpolation }
  defaultProps?: {
    variant?: string
    size?: string
  }
}