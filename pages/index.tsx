import Link from "next/link";
import "twin.macro";

import { motion } from "framer-motion";
import { NextPage } from "next";

import { Container, H } from "@/components/UI";
import { useRoutes } from "@/hooks/useRoutes";

const Home: NextPage = () => {
	const { data, error, stale, update } = useRoutes();

	if (error) return <p>An error has occurred.</p>;
	if (!data) return <p>Loading...</p>;

	return (
		<motion.div exit={{ opacity: 0 }}>
			<Container size="large">
				{stale && (
					<div>
						<button onClick={update} type="button">
							See new Interactions
						</button>
					</div>
				)}
				<ul>
					{data.reverse().map((route, i) => (
						<li key={i}>
							<Link href={`${route.href}`} passHref>
								<a>
									<H priority={1}>{route.name}</H>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</motion.div>
	);
};

export default Home;
