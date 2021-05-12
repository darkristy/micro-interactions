import { Container, H } from "@/components/UI";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import "twin.macro";

const Home: NextPage = () => {
	const links = [{ name: "Hover Wave", href: "/hover-wave" }];

	return (
		<motion.div exit={{ opacity: 0 }}>
			<Container size="large">
				{links.map(({ name, href }, i) => (
					<Fragment key={i}>
						<Link href={href} passHref>
							<a>
								<H priority={1}>{name}</H>
							</a>
						</Link>
					</Fragment>
				))}
			</Container>
		</motion.div>
	);
};

export default Home;
