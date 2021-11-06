import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Divider } from '@chakra-ui/react'

import { KnowledgeSection } from 'components/app/KnowledgeSection'
import { Heading } from 'components/core/Heading'
import { Text } from 'components/core/Text'

import styles from 'styles/modules/About.module.scss'

const Home: NextPage = () => 
	<>
		<Head>
			<title>About Me · Emil Einarsen</title>
			<meta property="og:title" content="About Me" />
			<link rel="preload" href="/emil-einarsen.jfif" as="image" />
		</Head>
		<Box as="section" className="about-section">
			<Heading.H1
				className={styles.about__headline}
				mb="5rem" 
				whiteSpace="pre-wrap"
			>
				Self-driven. {'\n'}
				<Box as="span" whiteSpace="nowrap">Web-developer.</Box>
			</Heading.H1>

			<Text>
				<span className={styles.profile}>
					<Image 
						src="/emil-einarsen.jfif" 
						width={128} 
						height={128} 
						alt="Emil Einarsen" 
						title="Emil Einarsen" 
						priority 
					/>
				</span>
				Since turning my passion into a career, I have been working full-time as a Consultant Front-end Developer at Sigma Technology Systems and running a web-consulting side business outside of work. 
			</Text>
			<Text>
				I like modern web technologies and take pride in quality code and the experience it provides.
			</Text>

			<Divider size="thick" my="2rem" />

			<Heading.H2>Development</Heading.H2>
			<Heading.H3>My approach</Heading.H3>
			<Text>
				As a “self-thought” developer, I owe a lot to the Open-source Community and do my best to find ways of giving back to it. 
				Be it through open-source projects, sharing my acquired knowledge through online platforms or real-life mentorship. 
				Consequently, I have accumulated principles that help me write resilient, self-reliant, reusable and ease-to-read code.
			</Text>
			<Text>
				I believe and embrace my favourite software quote:
			</Text>
			<Text.Blockquote className="quote quote--favorite">
				“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”
				<Text as="cite">~ Martin Fowler</Text>
			</Text.Blockquote>
			<Text>
				In my experience, code that does well also reads well. 
				However, just because something reads well to me does not mean it reads well to others. Therefore, I approach development through trial and error and promote active feedback from my peers.
			</Text>
			<Text.Blockquote className="quote quote--right quote--thinking">
				The best part of the developmental process is the pull request review.
				<Text as="cite">~ Unpopular opinion</Text>
			</Text.Blockquote>
			<Text>
				Feedback helps me reexamine my current presuppositions and become a more well-rounded developer.
			</Text>

			<Heading.H3>Informational Sources</Heading.H3>
			<Text>
				I spend much of my time reading up on web development and programming related topics and trends. 
				I do this mainly through conversations with knowledgeable people in various fields/disciplines and following multiple web feeds through articles and videos.
			</Text>
			<Text>
				Additionally, recently I have found that reading well-received books is especially useful for topping off my main area of knowledge.
			</Text>

			<Heading.H2>Technical skillset</Heading.H2>
			<Text>
				My main expertise areas are front-end development. I am experienced in building small to medium websites and nichée web applications.
			</Text>
			<Text>
				I have a special love for Javascript and extensive knowledge of its application with web fundamentals and Frameworks.
			</Text>
			<Text>
				As a developer, I appreciate the development experience provided by the Javascript Community through Flavors such as Typescript and Frameworks like React. 
				At the same time, I remain sufficiently proficient without them.
			</Text>
			<Text>
				I also have experience in various programming languages, such as PHP, C/C++ and C#. 
				Combined with complete fluency in Javascript and a passion for best practices, I can quickly pick up and become fluent in most languages and libraries.
			</Text>
			<KnowledgeSection showColors as="h3" />
		</Box>
	</>

export default Home
