import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

// FIXME: Since migrated to Rust compiler, current solution for the standard CRA way of importing svgs as components doesn't work
// Waiting for an updated documentation
export const Logo: React.FC<IconProps> = props =>
	<Icon viewBox="0 0 51 51" labelledby="companyLogoTitle companyLogoDescription" role="img" {...props}>
		<title id="companyLogoTitle">Logo</title>
		<desc id="companyLogoDescription">Emil Einarsen personal logo</desc>
		<path d="M14.98 0.0262222C29.9 -0.0327778 51 0.0262222 51 0.0262222C51 0.0262222 51.049 15.1202 36.016 15.0422C20.983 14.9642 0 15.0262 0 15.0262C0 15.0262 0.0619993 0.0852222 14.98 0.0262222Z" />
		<path d="M0 18.0262H43.5C45.4891 18.0262 47.3968 18.8164 48.8033 20.2229C50.2098 21.6294 51 23.5371 51 25.5262C51 27.5153 50.2098 29.423 48.8033 30.8295C47.3968 32.236 45.4891 33.0262 43.5 33.0262H0V18.0262Z" />
		<path d="M14.98 51.0262C30.019 51.0342 51 51.0262 51 51.0262C51 51.0262 51.019 36.0622 36.016 36.0102C21.013 35.9582 3.57594e-06 36.0262 3.57594e-06 36.0262C3.57594e-06 36.0262 -0.0589962 51.0182 14.98 51.0262Z" />
	</Icon>