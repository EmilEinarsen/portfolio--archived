import Image from 'next/image'
import { Box, useBoolean, useEventListenerMap } from '@chakra-ui/react'

import { Nav } from "layout/Nav"

const Layout: React.FC = ({ children }) => {

	return (
		<div className="wrapper">
			<div className="page">
				<header className="header">
					<Box className="header__container">
						<div className="main-navigation">
							<Nav />
						</div>
					</Box>
				</header>
				<main className="main">
					<div className="main__container">
						{children}
					</div>
				</main>
				<footer className="footer">
					<div className="footer__container">

					</div>
				</footer>
			</div>
		</div>
	)
}

export default Layout
