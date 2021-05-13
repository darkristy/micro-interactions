import Link from "next/link";
import "twin.macro";

import { motion } from "framer-motion";
import { NextPage } from "next";

import { B, Container } from "@/components/UI";
import { useRoutes } from "@/hooks/useRoutes";
import Down from "@/svg/down.svg";

const Home: NextPage = () => {
	const { data, error, stale, update } = useRoutes();

	if (error) return <p>An error has occurred.</p>;
	if (!data) return <p>Loading...</p>;

	return (
		<motion.div exit={{ opacity: 0 }}>
			<Container size="large">
				{stale && (
					<div>
						<B
							onClick={update}
							icon={{ svg: <Down style={{ rotate: "135deg" }} />, fill: "white" }}
							label="See New Interaction"
						/>
					</div>
				)}
				<ul>
					{data.reverse().map((route, i) => (
						<li key={i}>
							<Link href={`${route.href}`} passHref>
								<a>
									<h1>{route.name}</h1>
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
