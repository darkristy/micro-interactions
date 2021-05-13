/* eslint-disable no-unused-expressions */
import { Container } from "@/components/UI";
import { NextPage } from "next";
import { FC, Fragment, useCallback } from "react";
import tw, { styled } from "twin.macro";
// import anime from "animejs";
import { motion, useAnimation, AnimationControls } from "framer-motion";

interface FakeLinkProps {
	name: string;
	index: number;
}

// Anime.js Implementation

// const FakeLink: FC<FakeLinkProps> = ({ name, index }) => {
// 	const LinkWrapper = styled.div(() => [tw`mx-8 h-12  overflow-hidden cursor-pointer`]);

// 	const targets = [`.text${index} .letter`, `.text${index + 4} .letter`];
// 	const classNames = [`text${index}`, `text${index + 4}`];

// 	const animateLetters = useCallback((yValue) => {
// 		targets.map((target) => {
// 			anime.remove(target);
// 			anime({
// 				targets: target,
// 				translateY: yValue,
// 				easing: "cubicBezier(.6, .0135, .06, .9)",
// 				duration: 700,
// 				delay: (_, i) => 28 * i,
// 			});
// 		});
// 	}, []);

// 	const linkInner = (
// 		<>
// 			{name.split(" ").map((word, wordI) => (
// 				<div key={`word-${word}-${wordI}`} tw="inline-block mr-4">
// 					{Array.from(word).map((c, i) => (
// 						<span key={i} tw="w-auto relative inline-block" className="letter">
// 							{c === " " ? "\u00A0" : c}
// 						</span>
// 					))}
// 				</div>
// 			))}
// 		</>
// 	);

// 	return (
// 		<LinkWrapper
// 			key={index}
// 			onMouseEnter={(): void => animateLetters(-48)}
// 			onMouseLeave={(): void => animateLetters(0)}
// 		>
// 			{classNames.map((className, i) => (
// 				<Fragment key={i}>
// 					<h2 className={className} tw="uppercase"}>
// 						{linkInner}
// 					</h2>
// 				</Fragment>
// 			))}
// 		</LinkWrapper>
// 	);
// };

const MotionLink: FC<FakeLinkProps> = ({ name, index }) => {
	const LinkWrapper = styled.div(() => [tw`mx-8 h-12  overflow-hidden cursor-pointer`]);

	const transition = { duration: 0.475, ease: [0.6, 0.125, -0.05, 0.9] };

	const firstAnimation = useAnimation();
	const secondAnimation = useAnimation();
	const animations: AnimationControls[] = [firstAnimation, secondAnimation];

	const letterContainerVariants = {
		before: { transition: { staggerChildren: 0.03 } },
		after: { transition: { staggerChildren: 0.03 } },
	};

	const letterVariants = {
		before: { y: 0, transition: { ...transition } },
		after: { y: -48, transition: { ...transition } },
	};

	const animateLetters = useCallback((variant) => {
		animations.map((animation) => {
			animation.start(variant);
		});
	}, []);

	const linkInner = (
		<>
			{name.split(" ").map((word, wordI) => (
				<div key={`word-${word}-${wordI}`} tw="inline-block mr-4">
					{Array.from(word).map((c, i) => (
						<motion.span key={i} variants={letterVariants} tw="w-auto relative inline-block">
							{c === " " ? "\u00A0" : c}
						</motion.span>
					))}
				</div>
			))}
		</>
	);

	return (
		<LinkWrapper
			key={index}
			onMouseEnter={(): void => animateLetters("after")}
			onMouseLeave={(): void => animateLetters("before")}
		>
			{animations.map((animation, i) => (
				<Fragment key={i}>
					<motion.h2 variants={letterContainerVariants} animate={animation} tw="uppercase">
						{linkInner}
					</motion.h2>
				</Fragment>
			))}
		</LinkWrapper>
	);
};

const HoverWaveEffect: NextPage = () => {
	const fakeLinks = [{ name: "Gucci" }, { name: "Balenciaga" }, { name: "Versace" }];
	const LinksContainer = styled.div(() => [tw`h-screen flex items-center justify-center`]);

	return (
		<Container size="large">
			<LinksContainer>
				{fakeLinks.map((link, index) => (
					<Fragment key={index}>
						<MotionLink name={link.name} index={index} />
					</Fragment>
				))}
			</LinksContainer>
		</Container>
	);
};

export default HoverWaveEffect;
